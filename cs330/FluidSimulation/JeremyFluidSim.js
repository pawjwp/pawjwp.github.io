"use strict";
var gl;
var aPoints;
var bPoints;
var cPoints;
var dPoints;

var delay = 8;


var delta = 0.02

var aLoc;
var a = 1.0;
var aDelta = 0.0;

var bLoc;
var b = 0.0;
var bDelta = 0.0;

var cLoc;
var c = 0.0;
var cDelta = 0.0;

var dLoc;
var d = 0.0;
var dDelta = 0.0;


var color = vec4(0.0, 0.0, 0.0, 1.0);

var aColor = vec4(0.0, 0.0, 0.0, 1.0);
var bColor = vec4(1.0, 0.0, 0.0, 1.0);
var cColor = vec4(1.0, 0.0, 0.0, 1.0);
var dColor = vec4(0.0, 0.0, 0.0, 1.0);

/* Alternate ace color option
var aColor = vec4(0.5, 0.0, 1.0, 1.0);
var bColor = vec4(1.0, 1.0, 1.0, 1.0);
var cColor = vec4(0.5, 0.5, 0.5, 1.0);
var dColor = vec4(0.0, 0.0, 0.0, 1.0);
*/
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
		vec2((112/512)*2-1, (240/512)*-2+1),
		vec2((144/512)*2-1, (200/512)*-2+1),
		vec2((176/512)*2-1, (168/512)*-2+1),
		vec2((216/512)*2-1, (120/512)*-2+1)
	];

	bPoints = [
		vec2((256/512)*2-1, (132/512)*-2+1),
		vec2((276/512)*2-1, (96/512)*-2+1),
		vec2((312/512)*2-1, (70/512)*-2+1),
		vec2((360/512)*2-1, (64/512)*-2+1),
		vec2((408/512)*2-1, (80/512)*-2+1),
		vec2((432/512)*2-1, (120/512)*-2+1),
		vec2((436/512)*2-1, (160/512)*-2+1),
		vec2((424/512)*2-1, (200/512)*-2+1),
		vec2((400/512)*2-1, (240/512)*-2+1),
		vec2((360/512)*2-1, (288/512)*-2+1),
		vec2((320/512)*2-1, (336/512)*-2+1),
		vec2((288/512)*2-1, (384/512)*-2+1),
		vec2((256/512)*2-1, (448/512)*-2+1),
		vec2((224/512)*2-1, (384/512)*-2+1),
		vec2((192/512)*2-1, (336/512)*-2+1),
		vec2((152/512)*2-1, (288/512)*-2+1),
		vec2((112/512)*2-1, (240/512)*-2+1),
		vec2((88/512)*2-1, (200/512)*-2+1),
		vec2((76/512)*2-1, (160/512)*-2+1),
		vec2((80/512)*2-1, (120/512)*-2+1),
		vec2((104/512)*2-1, (80/512)*-2+1),
		vec2((152/512)*2-1, (64/512)*-2+1),
		vec2((200/512)*2-1, (70/512)*-2+1),
		vec2((236/512)*2-1, (96/512)*-2+1)
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
		vec2((104/512)*2-1, (248/512)*-2+1),
		vec2((160/512)*2-1, (216/512)*-2+1),
		vec2((224/512)*2-1, (224/512)*-2+1),
		vec2((176/512)*2-1, (168/512)*-2+1),
		vec2((192/512)*2-1, (88/512)*-2+1)
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

	// Load the data into the GPU
	var cBufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cBufferId);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(cPoints), gl.STATIC_DRAW);
	// Associate out shader variables with our data buffer
	var cPositionLoc = gl.getAttribLocation(program, "cPosition");
	gl.vertexAttribPointer(cPositionLoc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(cPositionLoc);

	// Load the data into the GPU
	var dBufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, dBufferId);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(dPoints), gl.STATIC_DRAW);
	// Associate out shader variables with our data buffer
	var dPositionLoc = gl.getAttribLocation(program, "dPosition");
	gl.vertexAttribPointer(dPositionLoc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(dPositionLoc);

	aLoc = gl.getUniformLocation(program, "a");
	bLoc = gl.getUniformLocation(program, "b");
	cLoc = gl.getUniformLocation(program, "c");
	dLoc = gl.getUniformLocation(program, "d");
    colorLoc = gl.getUniformLocation(program, "aColor");

	document.getElementById("Morph1").onclick = function() {
		aDelta=delta;
		bDelta=-delta;
		cDelta=-delta;
		dDelta=-delta;
	};
	document.getElementById("Morph2").onclick = function() {
		aDelta=-delta;
		bDelta=delta;
		cDelta=-delta;
		dDelta=-delta;
	};
	document.getElementById("Morph3").onclick = function() {
		aDelta=-delta;
		bDelta=-delta;
		cDelta=delta;
		dDelta=-delta;
	};
	document.getElementById("Morph4").onclick = function() {
		aDelta=-delta;
		bDelta=-delta;
		cDelta=-delta;
		dDelta=delta;
	};

	render();
};

function render() {
	gl.clear(gl.COLOR_BUFFER_BIT);


	//gl.drawArrays( gl.POINTS, 0, aPoints.length );
	//gl.drawArrays( gl.LINE_LOOP, 0, aPoints.length );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, aPoints.length );
	//gl.drawArrays( gl.TRIANGLE_STRIP, 0, aPoints.length );

	a += aDelta;
	b += bDelta;
	c += cDelta;
	d += dDelta;

    if (a > 1.0)
	{
		a = 1.0;
		aDelta = 0.0;
	}
    if (a < 0.0)
	{
		a = 0.0;
		aDelta = 0.0;
	}

    if (b > 1.0)
	{
		b = 1.0;
		bDelta = 0.0;
	}
    if (b < 0.0)
	{
		b = 0.0;
		bDelta = 0.0;
	}

    if (c > 1.0)
	{
		c = 1.0;
		cDelta = 0.0;
	}
    if (c < 0.0)
	{
		c = 0.0;
		cDelta = 0.0;
	}

    if (d > 1.0)
	{
		d = 1.0;
		dDelta = 0.0;
	}
    if (d < 0.0)
	{
		d = 0.0;
		dDelta = 0.0;
	}

	gl.uniform1f(aLoc, a);
	gl.uniform1f(bLoc, b);
	gl.uniform1f(cLoc, c);
	gl.uniform1f(dLoc, d);


	color[0] = (a*aColor[0])+(b*bColor[0])+(c*cColor[0])+(d*dColor[0]);
	color[1] = (a*aColor[1])+(b*bColor[1])+(c*cColor[1])+(d*dColor[1]);
	color[2] = (a*aColor[2])+(b*bColor[2])+(c*cColor[2])+(d*dColor[2]);
	color[3] = (a*aColor[3])+(b*bColor[3])+(c*cColor[3])+(d*dColor[3]);
    gl.uniform4fv(colorLoc, color);


	gl.drawArrays(gl.LINE_LOOP, 0, aPoints.length);


    setTimeout(function (){requestAnimationFrame(render);}, delay);
}
