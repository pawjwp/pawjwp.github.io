/*
Jeremy Parke
Code based on gasket5
*/
var canvas;
var gl;

var positions;

var numTimesToSubdivide = 0;

var bufferId;

init();

function init()
{
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");


    //
    //  Initialize our data
    //

    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW);



    // Associate out shader variables with our data buffer

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    document.getElementById("slider").onchange = function(event) {
        numTimesToSubdivide = parseInt(event.target.value);
        render();
    };


    render();
};

function line(a, b)
{
    positions.push(a, b);
}

function divideMountain(a1, b1, count)
{

    // check for end of recursion

    if (count == 0) {
        line(a1, b1);
    }
    else {
		
		//calculate lengths
		var len = (b1[0] - a1[0])/3;
		
        //points 1/3rd through each side
		var a2 = vec2(a1[0] + len, a1[1]); //a third of the way to the middle from a
		var b2 = vec2(b1[0] - len, b1[1]); //a third of the way to the middle from b
		
		//point middle and up
		var c = vec2(a1[0] + (b1[0] - a1[0]) / 2, len * (Math.sqrt(3))/2)

        --count;

        //generate lines of middle triangle
		line(a2, c);
		line(c, b2);
        //further division for lines on either side
        divideMountain(a1, a2, count);
        divideMountain(b2, b1, count);
    }
}

function render()
{
    var vertices = [
        vec2(-1.0, 0.0),
        vec2( 1.0, 0.0)
    ];
    positions = [];
    divideMountain( vertices[0], vertices[1], numTimesToSubdivide);

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(positions));
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.LINES, 0, positions.length );
    positions = [];
}
