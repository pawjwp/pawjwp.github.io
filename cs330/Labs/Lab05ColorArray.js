"use strict";
var gl;
var points;
init();

function init() {
	var canvas = document.getElementById("gl-canvas");

	gl = canvas.getContext('webgl2');
	if (!gl) {
		alert("WebGL isn't available");
	}

	points = [
		vec2((256 / 512) * 2 - 1, (64 / 512) * -2 + 1),
		vec2((296 / 512) * 2 - 1, (120 / 512) * -2 + 1),
		vec2((336 / 512) * 2 - 1, (168 / 512) * -2 + 1),
		vec2((368 / 512) * 2 - 1, (200 / 512) * -2 + 1),
		vec2((400 / 512) * 2 - 1, (240 / 512) * -2 + 1),
		vec2((416 / 512) * 2 - 1, (288 / 512) * -2 + 1),
		vec2((408 / 512) * 2 - 1, (336 / 512) * -2 + 1),
		vec2((368 / 512) * 2 - 1, (368 / 512) * -2 + 1),
		vec2((320 / 512) * 2 - 1, (376 / 512) * -2 + 1),
		vec2((272 / 512) * 2 - 1, (360 / 512) * -2 + 1),
		vec2((288 / 512) * 2 - 1, (408 / 512) * -2 + 1),
		vec2((312 / 512) * 2 - 1, (448 / 512) * -2 + 1),
		vec2((256 / 512) * 2 - 1, (448 / 512) * -2 + 1),
		vec2((200 / 512) * 2 - 1, (448 / 512) * -2 + 1),
		vec2((224 / 512) * 2 - 1, (408 / 512) * -2 + 1),
		vec2((240 / 512) * 2 - 1, (360 / 512) * -2 + 1),
		vec2((192 / 512) * 2 - 1, (376 / 512) * -2 + 1),
		vec2((144 / 512) * 2 - 1, (368 / 512) * -2 + 1),
		vec2((104 / 512) * 2 - 1, (336 / 512) * -2 + 1),
		vec2((96 / 512) * 2 - 1, (288 / 512) * -2 + 1),
		vec2((112 / 512) * 2 - 1, (240 / 512) * -2 + 1),
		vec2((144 / 512) * 2 - 1, (200 / 512) * -2 + 1),
		vec2((176 / 512) * 2 - 1, (168 / 512) * -2 + 1),
		vec2((216 / 512) * 2 - 1, (120 / 512) * -2 + 1)
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

	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

	// Associate out shader variables with our data buffer

	var positionLoc = gl.getAttribLocation(program, "aPosition");
	gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(positionLoc);

	render();
};

function render() {
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, points.length);
}