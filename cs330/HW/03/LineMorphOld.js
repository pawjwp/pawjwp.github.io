"use strict";
var gl;
var aPoints;
var bPoints;
var cPoints;
var dPoints;

var morph = false;
var delay = 8;
var tParam = 1.0;
var deltaT = 0.01;
var tLoc;

var color = vec4(0.0, 0.0, 0.0, 1.0);

var aColor = vec4(0.5, 0.0, 1.0, 1.0);
var bColor = vec4(0.0, 0.0, 0.0, 1.0);
var colorLoc;

init();

function init() {
	var canvas = document.getElementById("gl-canvas");

	gl = canvas.getContext('webgl2');
	if (!gl) {
		alert("WebGL isn't available");
	}

	aPoints = [
		vec2((256/512)*2-1, (64/512)*-2+1),
		vec2((296/512)*2-1, (120/512)*-2+1),
		vec2((336/512)*2-1, (168/512)*-2+1),
		vec2((368/512)*2-1, (200/512)*-2+1),
		vec2((400/512)*2-1, (240/512)*-2+1),
		vec2((416/512)*2-1, (288/512)*-2+1),
		vec2((408/512)*2-1, (336/512)*-2+1),
		vec2((368/512)*2-1, (368/512)*-2+1),
		vec2((320/512)*2-1, (376/512)*-2+1),
		vec2((272/512)*2-1, (360/512)*-2+1),
		vec2((288/512)*2-1, (408/512)*-2+1),
		vec2((312/512)*2-1, (448/512)*-2+1),
		vec2((256/512)*2-1, (448/512)*-2+1),
		vec2((200/512)*2-1, (448/512)*-2+1),
		vec2((224/512)*2-1, (408/512)*-2+1),
		vec2((240/512)*2-1, (360/512)*-2+1),
		vec2((192/512)*2-1, (376/512)*-2+1),
		vec2((144/512)*2-1, (368/512)*-2+1),
		vec2((104/512)*2-1, (336/512)*-2+1),
		vec2((96/512)*2-1, (288/512)*-2+1),
		vec2((104/512)*2-1, (240/512)*-2+1),
		vec2((144/512)*2-1, (200/512)*-2+1),
		vec2((176/512)*2-1, (168/512)*-2+1),
		vec2((216/512)*2-1, (120/512)*-2+1)
	];

	bPoints = [
		vec2((256/512)*2-1, (64/512)*-2+1),
		vec2((320/512)*2-1, (88/512)*-2+1),
		vec2((336/512)*2-1, (168/512)*-2+1),
		vec2((288/512)*2-1, (224/512)*-2+1),
		vec2((352/512)*2-1, (216/512)*-2+1),
		vec2((408/512)*2-1, (248/512)*-2+1),
		vec2((424/512)*2-1, (304/512)*-2+1),
		vec2((392/512)*2-1, (360/512)*-2+1),
		vec2((336/512)*2-1, (368/512)*-2+1),
		vec2((280/512)*2-1, (328/512)*-2+1),
		vec2((296/512)*2-1, (408/512)*-2+1),
		vec2((328/512)*2-1, (448/512)*-2+1),
		vec2((256/512)*2-1, (448/512)*-2+1),
		vec2((184/512)*2-1, (448/512)*-2+1),
		vec2((216/512)*2-1, (408/512)*-2+1),
		vec2((232/512)*2-1, (328/512)*-2+1),
		vec2((176/512)*2-1, (368/512)*-2+1),
		vec2((120/512)*2-1, (360/512)*-2+1),
		vec2((88/512)*2-1, (304/512)*-2+1),
		vec2((112/512)*2-1, (248/512)*-2+1),
		vec2((160/512)*2-1, (216/512)*-2+1),
		vec2((224/512)*2-1, (224/512)*-2+1),
		vec2((176/512)*2-1, (168/512)*-2+1),
		vec2((192/512)*2-1, (88/512)*-2+1)
	];

	cPoints = [
		vec2( 0.0, 0.75),
		vec2( 0.5/6.0, 3.75/6.0),
		vec2( 1.0/6.0, 3.00/6.0),
		vec2( 1.5/6.0, 2.25/6.0),
		vec2( 2.0/6.0, 1.50/6.0),
		vec2( 2.5/6.0, 0.75/6.0),
		vec2( 0.5, 0.00),
		vec2( 2.5/6.0,-0.75/6.0),
		vec2( 2.0/6.0,-1.50/6.0),
		vec2( 1.5/6.0,-2.25/6.0),
		vec2( 1.0/6.0,-3.00/6.0),
		vec2( 0.5/6.0,-3.75/6.0),
		vec2( 0.0,-0.75),
		vec2(-0.5/6.0,-3.75/6.0),
		vec2(-1.0/6.0,-3.00/6.0),
		vec2(-1.5/6.0,-2.25/6.0),
		vec2(-2.0/6.0,-1.50/6.0),
		vec2(-2.5/6.0,-0.75/6.0),
		vec2(-0.5, 0.00),
		vec2(-2.5/6.0, 0.75/6.0),
		vec2(-2.0/6.0, 1.50/6.0),
		vec2(-1.5/6.0, 2.25/6.0),
		vec2(-1.0/6.0, 3.00/6.0),
		vec2(-0.5/6.0, 3.75/6.0)
	];

	dPoints = [
		vec2( 0.0, 0.484375),
		vec2( 0.078125, 0.625),
		vec2( 0.21875, 0.7265625),
		vec2( 0.40625, 0.75),
		vec2( 0.59375, 0.6875),
		vec2( 0.6875, 0.53725),
		vec2( 0.703125, 0.375),
		vec2( 0.65625, 0.21875),
		vec2( 0.5625, 0.0625),
		vec2( 0.40625, -0.125),
		vec2( 0.25, -0.3125),
		vec2( 0.125, -0.5),
		vec2( 0.0, -0.75),
		vec2(-0.125, -0.5),
		vec2(-0.25, -0.3125),
		vec2(-0.40625, -0.125),
		vec2(-0.5625, 0.0625),
		vec2(-0.65625, 0.21875),
		vec2(-0.703125, 0.375),
		vec2(-0.6875, 0.53725),
		vec2(-0.59375, 0.6875),
		vec2(-0.40625, 0.75),
		vec2(-0.21875, 0.7265625),
		vec2(-0.078125, 0.625)
	];

	//
	//  Configure WebGL
	//
	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(1.0, 1.0, 1.0, 1.0);

	//  Load shaders and initialize attribute buffers

	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);


	// Load the data into the GPU
	var aBufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, aBufferId);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(aPoints), gl.STATIC_DRAW);
	// Associate out shader variables with our data buffer
	var aPositionLoc = gl.getAttribLocation(program, "aPosition");
	gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(aPositionLoc);

	// Load the data into the GPU
	var bBufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bBufferId);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(bPoints), gl.STATIC_DRAW);
	// Associate out shader variables with our data buffer
	var bPositionLoc = gl.getAttribLocation(program, "bPosition");
	gl.vertexAttribPointer(bPositionLoc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(bPositionLoc);
	
	tLoc = gl.getUniformLocation(program, "t");
    colorLoc = gl.getUniformLocation( program, "aColor" );

	document.getElementById("Morph").onclick = function() {
		morph = !morph;
	};

	render();
};

function render() {
	gl.clear(gl.COLOR_BUFFER_BIT);


	//gl.drawArrays( gl.POINTS, 0, aPoints.length );
	//gl.drawArrays( gl.LINE_LOOP, 0, aPoints.length );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, aPoints.length );
	//gl.drawArrays( gl.TRIANGLE_STRIP, 0, aPoints.length );
	
    if (tParam > 1.0 || tParam < 0.0)
	{
		deltaT = -deltaT;
		tParam += deltaT;
		morph = false;
	}
	
	if (morph) tParam += deltaT;
	
	gl.uniform1f(tLoc, tParam);
	
	
	color[0] = (tParam * aColor[0]) + ((1.0 - tParam) * bColor[0]);
	color[1] = (tParam * aColor[1]) + ((1.0 - tParam) * bColor[1]);
	color[2] = (tParam * aColor[2]) + ((1.0 - tParam) * bColor[2]);
	color[3] = (tParam * aColor[3]) + ((1.0 - tParam) * bColor[3]);
    gl.uniform4fv(colorLoc, color);
	
	
	if (morph) {
		gl.drawArrays(gl.LINE_LOOP, 0, aPoints.length);
	} else {
		gl.drawArrays(gl.LINE_LOOP, 0, aPoints.length);
	}


    setTimeout(function (){requestAnimationFrame(render);}, delay);
}