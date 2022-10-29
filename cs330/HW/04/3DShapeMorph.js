"use strict";

var shadedCube = function() {
	var gl;
	var aVertices;
	var bVertices;
	var cVertices;
	var dVertices;

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

	var colorLoc;









	var canvas;
	var gl;

	var numPositions = 36;


	var aPositionsArray = [];
	var aNormalsArray = [];
	
	var bPositionsArray = [];
	var bNormalsArray = [];
	
	var cPositionsArray = [];
	var cNormalsArray = [];
	
	var dPositionsArray = [];
	var dNormalsArray = [];
	
	
	aVertices = [
        vec4(-0.25, -0.5,  0.5, 1.0),
        vec4(-0.25,  0.5,  0.25, 1.0),
        vec4(0.5,  0.25,  0.5, 1.0),
        vec4(0.5, -0.5,  0.5, 1.0),
        vec4(-0.25, -0.5, -0.5, 1.0),
        vec4(-0.25,  0.5, -0.25, 1.0),
        vec4(0.5,  0.25, -0.5, 1.0),
        vec4(0.5, -0.5, -0.25, 1.0)
	]
	bVertices = [
        vec4(-0.5, -0.5,  0.5, 1.0),
        vec4(-0.5,  0.5,  0.5, 1.0),
        vec4(0.5,  0.5,  0.5, 1.0),
        vec4(0.5, -0.5,  0.5, 1.0),
        vec4(-0.5, -0.5, -0.5, 1.0),
        vec4(-0.5,  0.5, -0.5, 1.0),
        vec4(0.5,  0.5, -0.5, 1.0),
        vec4(0.5, -0.5, -0.5, 1.0)
	]
	cVertices = [
        vec4(-0.5, -0.5,  0.5, 1.0),
        vec4(-0.5,  0.5,  0.5, 1.0),
        vec4(0.5,  0.5,  0.5, 1.0),
        vec4(0.5, -0.5,  0.5, 1.0),
        vec4(-0.5, -0.5, -0.5, 1.0),
        vec4(-0.5,  0.5, -0.5, 1.0),
        vec4(0.5,  0.5, -0.5, 1.0),
        vec4(0.5, -0.5, -0.5, 1.0)
	]
	dVertices = [
        vec4(-0.5, -0.5,  0.5, 1.0),
        vec4(-0.5,  0.5,  0.5, 1.0),
        vec4(0.5,  0.5,  0.5, 1.0),
        vec4(0.5, -0.5,  0.5, 1.0),
        vec4(-0.5, -0.5, -0.5, 1.0),
        vec4(-0.5,  0.5, -0.5, 1.0),
        vec4(0.5,  0.5, -0.5, 1.0),
        vec4(0.5, -0.5, -0.5, 1.0)
	]
	
/*
	aVertices = [
		vec4((256/512)*2-1, (64/512)*-2+1, 0.0, 0.5),
		vec4((296/512)*2-1, (120/512)*-2+1, 0.0, 0.5),
		vec4((336/512)*2-1, (168/512)*-2+1, 0.0, 0.5),
		vec4((368/512)*2-1, (200/512)*-2+1, 0.0, 0.5),
		vec4((400/512)*2-1, (240/512)*-2+1, 0.0, 0.5),
		vec4((416/512)*2-1, (288/512)*-2+1, 0.0, 0.5),
		vec4((408/512)*2-1, (336/512)*-2+1, 0.0, 0.5),
		vec4((368/512)*2-1, (368/512)*-2+1, 0.0, 0.5),
		vec4((320/512)*2-1, (376/512)*-2+1, 0.0, 0.5),
		vec4((272/512)*2-1, (360/512)*-2+1, 0.0, 0.5),
		vec4((288/512)*2-1, (408/512)*-2+1, 0.0, 0.5),
		vec4((312/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((200/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((224/512)*2-1, (408/512)*-2+1, 0.0, 0.5),
		vec4((240/512)*2-1, (360/512)*-2+1, 0.0, 0.5),
		vec4((192/512)*2-1, (376/512)*-2+1, 0.0, 0.5),
		vec4((144/512)*2-1, (368/512)*-2+1, 0.0, 0.5),
		vec4((104/512)*2-1, (336/512)*-2+1, 0.0, 0.5),
		vec4((96/512)*2-1, (288/512)*-2+1, 0.0, 0.5),
		vec4((112/512)*2-1, (240/512)*-2+1, 0.0, 0.5),
		vec4((144/512)*2-1, (200/512)*-2+1, 0.0, 0.5),
		vec4((176/512)*2-1, (168/512)*-2+1, 0.0, 0.5),
		vec4((216/512)*2-1, (120/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (64/512)*-2+1, 0.0, -0.5),
		vec4((296/512)*2-1, (120/512)*-2+1, 0.0, -0.5),
		vec4((336/512)*2-1, (168/512)*-2+1, 0.0, -0.5),
		vec4((368/512)*2-1, (200/512)*-2+1, 0.0, -0.5),
		vec4((400/512)*2-1, (240/512)*-2+1, 0.0, -0.5),
		vec4((416/512)*2-1, (288/512)*-2+1, 0.0, -0.5),
		vec4((408/512)*2-1, (336/512)*-2+1, 0.0, -0.5),
		vec4((368/512)*2-1, (368/512)*-2+1, 0.0, -0.5),
		vec4((320/512)*2-1, (376/512)*-2+1, 0.0, -0.5),
		vec4((272/512)*2-1, (360/512)*-2+1, 0.0, -0.5),
		vec4((288/512)*2-1, (408/512)*-2+1, 0.0, -0.5),
		vec4((312/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((200/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((224/512)*2-1, (408/512)*-2+1, 0.0, -0.5),
		vec4((240/512)*2-1, (360/512)*-2+1, 0.0, -0.5),
		vec4((192/512)*2-1, (376/512)*-2+1, 0.0, -0.5),
		vec4((144/512)*2-1, (368/512)*-2+1, 0.0, -0.5),
		vec4((104/512)*2-1, (336/512)*-2+1, 0.0, -0.5),
		vec4((96/512)*2-1, (288/512)*-2+1, 0.0, -0.5),
		vec4((112/512)*2-1, (240/512)*-2+1, 0.0, -0.5),
		vec4((144/512)*2-1, (200/512)*-2+1, 0.0, -0.5),
		vec4((176/512)*2-1, (168/512)*-2+1, 0.0, -0.5),
		vec4((216/512)*2-1, (120/512)*-2+1, 0.0, -0.5)
	];

	bVertices = [
		vec4((256/512)*2-1, (132/512)*-2+1, 0.0, 0.5),
		vec4((276/512)*2-1, (96/512)*-2+1, 0.0, 0.5),
		vec4((312/512)*2-1, (70/512)*-2+1, 0.0, 0.5),
		vec4((360/512)*2-1, (64/512)*-2+1, 0.0, 0.5),
		vec4((408/512)*2-1, (80/512)*-2+1, 0.0, 0.5),
		vec4((432/512)*2-1, (120/512)*-2+1, 0.0, 0.5),
		vec4((436/512)*2-1, (160/512)*-2+1, 0.0, 0.5),
		vec4((424/512)*2-1, (200/512)*-2+1, 0.0, 0.5),
		vec4((400/512)*2-1, (240/512)*-2+1, 0.0, 0.5),
		vec4((360/512)*2-1, (288/512)*-2+1, 0.0, 0.5),
		vec4((320/512)*2-1, (336/512)*-2+1, 0.0, 0.5),
		vec4((288/512)*2-1, (384/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((224/512)*2-1, (384/512)*-2+1, 0.0, 0.5),
		vec4((192/512)*2-1, (336/512)*-2+1, 0.0, 0.5),
		vec4((152/512)*2-1, (288/512)*-2+1, 0.0, 0.5),
		vec4((112/512)*2-1, (240/512)*-2+1, 0.0, 0.5),
		vec4((88/512)*2-1, (200/512)*-2+1, 0.0, 0.5),
		vec4((76/512)*2-1, (160/512)*-2+1, 0.0, 0.5),
		vec4((80/512)*2-1, (120/512)*-2+1, 0.0, 0.5),
		vec4((104/512)*2-1, (80/512)*-2+1, 0.0, 0.5),
		vec4((152/512)*2-1, (64/512)*-2+1, 0.0, 0.5),
		vec4((200/512)*2-1, (70/512)*-2+1, 0.0, 0.5),
		vec4((236/512)*2-1, (96/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (132/512)*-2+1, 0.0, -0.5),
		vec4((276/512)*2-1, (96/512)*-2+1, 0.0, -0.5),
		vec4((312/512)*2-1, (70/512)*-2+1, 0.0, -0.5),
		vec4((360/512)*2-1, (64/512)*-2+1, 0.0, -0.5),
		vec4((408/512)*2-1, (80/512)*-2+1, 0.0, -0.5),
		vec4((432/512)*2-1, (120/512)*-2+1, 0.0, -0.5),
		vec4((436/512)*2-1, (160/512)*-2+1, 0.0, -0.5),
		vec4((424/512)*2-1, (200/512)*-2+1, 0.0, -0.5),
		vec4((400/512)*2-1, (240/512)*-2+1, 0.0, -0.5),
		vec4((360/512)*2-1, (288/512)*-2+1, 0.0, -0.5),
		vec4((320/512)*2-1, (336/512)*-2+1, 0.0, -0.5),
		vec4((288/512)*2-1, (384/512)*-2+1, 0.0, -0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((224/512)*2-1, (384/512)*-2+1, 0.0, -0.5),
		vec4((192/512)*2-1, (336/512)*-2+1, 0.0, -0.5),
		vec4((152/512)*2-1, (288/512)*-2+1, 0.0, -0.5),
		vec4((112/512)*2-1, (240/512)*-2+1, 0.0, -0.5),
		vec4((88/512)*2-1, (200/512)*-2+1, 0.0, -0.5),
		vec4((76/512)*2-1, (160/512)*-2+1, 0.0, -0.5),
		vec4((80/512)*2-1, (120/512)*-2+1, 0.0, -0.5),
		vec4((104/512)*2-1, (80/512)*-2+1, 0.0, -0.5),
		vec4((152/512)*2-1, (64/512)*-2+1, 0.0, -0.5),
		vec4((200/512)*2-1, (70/512)*-2+1, 0.0, -0.5),
		vec4((236/512)*2-1, (96/512)*-2+1, 0.0, -0.5)
	];

	cVertices = [
		vec4( 0.0, 0.75, 0.0, 0.5),
		vec4( 0.5/6.0, 3.75/6.0, 0.0, 0.5),
		vec4( 1.0/6.0, 3.00/6.0, 0.0, 0.5),
		vec4( 1.5/6.0, 2.25/6.0, 0.0, 0.5),
		vec4( 2.0/6.0, 1.50/6.0, 0.0, 0.5),
		vec4( 2.5/6.0, 0.75/6.0, 0.0, 0.5),
		vec4( 0.5, 0.00, 0.0, 0.5),
		vec4( 2.5/6.0,-0.75/6.0, 0.0, 0.5),
		vec4( 2.0/6.0,-1.50/6.0, 0.0, 0.5),
		vec4( 1.5/6.0,-2.25/6.0, 0.0, 0.5),
		vec4( 1.0/6.0,-3.00/6.0, 0.0, 0.5),
		vec4( 0.5/6.0,-3.75/6.0, 0.0, 0.5),
		vec4( 0.0,-0.75, 0.0, 0.5),
		vec4(-0.5/6.0,-3.75/6.0, 0.0, 0.5),
		vec4(-1.0/6.0,-3.00/6.0, 0.0, 0.5),
		vec4(-1.5/6.0,-2.25/6.0, 0.0, 0.5),
		vec4(-2.0/6.0,-1.50/6.0, 0.0, 0.5),
		vec4(-2.5/6.0,-0.75/6.0, 0.0, 0.5),
		vec4(-0.5, 0.00, 0.0, 0.5),
		vec4(-2.5/6.0, 0.75/6.0, 0.0, 0.5),
		vec4(-2.0/6.0, 1.50/6.0, 0.0, 0.5),
		vec4(-1.5/6.0, 2.25/6.0, 0.0, 0.5),
		vec4(-1.0/6.0, 3.00/6.0, 0.0, 0.5),
		vec4(-0.5/6.0, 3.75/6.0, 0.0, 0.5),
		vec4( 0.0, 0.75, 0.0, -0.5),
		vec4( 0.5/6.0, 3.75/6.0, 0.0, -0.5),
		vec4( 1.0/6.0, 3.00/6.0, 0.0, -0.5),
		vec4( 1.5/6.0, 2.25/6.0, 0.0, -0.5),
		vec4( 2.0/6.0, 1.50/6.0, 0.0, -0.5),
		vec4( 2.5/6.0, 0.75/6.0, 0.0, -0.5),
		vec4( 0.5, 0.00, 0.0, -0.5),
		vec4( 2.5/6.0,-0.75/6.0, 0.0, -0.5),
		vec4( 2.0/6.0,-1.50/6.0, 0.0, -0.5),
		vec4( 1.5/6.0,-2.25/6.0, 0.0, -0.5),
		vec4( 1.0/6.0,-3.00/6.0, 0.0, -0.5),
		vec4( 0.5/6.0,-3.75/6.0, 0.0, -0.5),
		vec4( 0.0,-0.75, 0.0, -0.5),
		vec4(-0.5/6.0,-3.75/6.0, 0.0, -0.5),
		vec4(-1.0/6.0,-3.00/6.0, 0.0, -0.5),
		vec4(-1.5/6.0,-2.25/6.0, 0.0, -0.5),
		vec4(-2.0/6.0,-1.50/6.0, 0.0, -0.5),
		vec4(-2.5/6.0,-0.75/6.0, 0.0, -0.5),
		vec4(-0.5, 0.00, 0.0, -0.5),
		vec4(-2.5/6.0, 0.75/6.0, 0.0, -0.5),
		vec4(-2.0/6.0, 1.50/6.0, 0.0, -0.5),
		vec4(-1.5/6.0, 2.25/6.0, 0.0, -0.5),
		vec4(-1.0/6.0, 3.00/6.0, 0.0, -0.5),
		vec4(-0.5/6.0, 3.75/6.0, 0.0, -0.5)
	];

	dVertices = [
		vec4((256/512)*2-1, (64/512)*-2+1, 0.0, 0.5),
		vec4((320/512)*2-1, (88/512)*-2+1, 0.0, 0.5),
		vec4((336/512)*2-1, (168/512)*-2+1, 0.0, 0.5),
		vec4((288/512)*2-1, (224/512)*-2+1, 0.0, 0.5),
		vec4((352/512)*2-1, (216/512)*-2+1, 0.0, 0.5),
		vec4((408/512)*2-1, (248/512)*-2+1, 0.0, 0.5),
		vec4((424/512)*2-1, (304/512)*-2+1, 0.0, 0.5),
		vec4((392/512)*2-1, (360/512)*-2+1, 0.0, 0.5),
		vec4((336/512)*2-1, (368/512)*-2+1, 0.0, 0.5),
		vec4((280/512)*2-1, (328/512)*-2+1, 0.0, 0.5),
		vec4((296/512)*2-1, (408/512)*-2+1, 0.0, 0.5),
		vec4((328/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((184/512)*2-1, (448/512)*-2+1, 0.0, 0.5),
		vec4((216/512)*2-1, (408/512)*-2+1, 0.0, 0.5),
		vec4((232/512)*2-1, (328/512)*-2+1, 0.0, 0.5),
		vec4((176/512)*2-1, (368/512)*-2+1, 0.0, 0.5),
		vec4((120/512)*2-1, (360/512)*-2+1, 0.0, 0.5),
		vec4((88/512)*2-1, (304/512)*-2+1, 0.0, 0.5),
		vec4((104/512)*2-1, (248/512)*-2+1, 0.0, 0.5),
		vec4((160/512)*2-1, (216/512)*-2+1, 0.0, 0.5),
		vec4((224/512)*2-1, (224/512)*-2+1, 0.0, 0.5),
		vec4((176/512)*2-1, (168/512)*-2+1, 0.0, 0.5),
		vec4((192/512)*2-1, (88/512)*-2+1, 0.0, 0.5),
		vec4((256/512)*2-1, (64/512)*-2+1, 0.0, -0.5),
		vec4((320/512)*2-1, (88/512)*-2+1, 0.0, -0.5),
		vec4((336/512)*2-1, (168/512)*-2+1, 0.0, -0.5),
		vec4((288/512)*2-1, (224/512)*-2+1, 0.0, -0.5),
		vec4((352/512)*2-1, (216/512)*-2+1, 0.0, -0.5),
		vec4((408/512)*2-1, (248/512)*-2+1, 0.0, -0.5),
		vec4((424/512)*2-1, (304/512)*-2+1, 0.0, -0.5),
		vec4((392/512)*2-1, (360/512)*-2+1, 0.0, -0.5),
		vec4((336/512)*2-1, (368/512)*-2+1, 0.0, -0.5),
		vec4((280/512)*2-1, (328/512)*-2+1, 0.0, -0.5),
		vec4((296/512)*2-1, (408/512)*-2+1, 0.0, -0.5),
		vec4((328/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((256/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((184/512)*2-1, (448/512)*-2+1, 0.0, -0.5),
		vec4((216/512)*2-1, (408/512)*-2+1, 0.0, -0.5),
		vec4((232/512)*2-1, (328/512)*-2+1, 0.0, -0.5),
		vec4((176/512)*2-1, (368/512)*-2+1, 0.0, -0.5),
		vec4((120/512)*2-1, (360/512)*-2+1, 0.0, -0.5),
		vec4((88/512)*2-1, (304/512)*-2+1, 0.0, -0.5),
		vec4((104/512)*2-1, (248/512)*-2+1, 0.0, -0.5),
		vec4((160/512)*2-1, (216/512)*-2+1, 0.0, -0.5),
		vec4((224/512)*2-1, (224/512)*-2+1, 0.0, -0.5),
		vec4((176/512)*2-1, (168/512)*-2+1, 0.0, -0.5),
		vec4((192/512)*2-1, (88/512)*-2+1, 0.0, -0.5)
	];
*/


	var lightPosition = vec4(1.0, 1.0, 1.0, 0.0);
	var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0);
	var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0);
	var lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);

	// custom
	//
	var materialAmbient = vec4(0.0, 0.875, 1.0, 1.0);
	var materialDiffuse = vec4(0.5, 0.75, 1.0, 1.0);
	var materialSpecular = vec4(0.75, 1.0, 1.0, 1.0);
	var materialShininess = 100.0;
	//

	// original
	/*
	var materialAmbient = vec4(1.0, 0.0, 1.0, 1.0);
	var materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0);
	var materialSpecular = vec4(1.0, 0.8, 0.0, 1.0);
	var materialShininess = 100.0;
	*/

	// black plastic
	/*
	var materialAmbient  = vec4(0.0 , 0.0 , 0.0 , 1.0);
	var materialDiffuse  = vec4(0.01 , 0.01 , 0.01 , 1.0);
	var materialSpecular = vec4(0.5 , 0.5 , 0.5, 1.0);
	var materialShininess = 32.0;
	*/

	// brass
	/*
	var materialAmbient  = vec4(0.329412 , 0.223529 , 0.027451 , 1.0);
	var materialDiffuse  = vec4(0.780392 , 0.568627 , 0.113725 , 1.0);
	var materialSpecular  = vec4(0.992157 , 0.941176 , 0.807843, 1.0);
	var materialShininess = 27.8974;
	*/

	// bronze
	/*
	var materialAmbient  = vec4(0.2125 , 0.1275 , 0.054 , 1.0);
	var materialDiffuse  = vec4(0.714 , 0.4284 , 0.18144 , 1.0);
	var materialSpecular  = vec4(0.393548 , 0.271906 , 0.166721, 1.0);
	var materialShininess = 25.6;
	*/

	// chrome
	/*
	var materialAmbient  = vec4(0.25 , 0.25 , 0.25 , 1.0);
	var materialDiffuse  = vec4(0.4 , 0.4 , 0.4 , 1.0);
	var materialSpecular  = vec4(0.774597 , 0.774597 , 0.774597 , 1.0);
	var materialShininess = 76.8;
	*/

	// copper
	/*
	var materialAmbient  = vec4(0.19125 , 0.0735 , 0.0225 , 1.0);
	var materialDiffuse  = vec4(0.7038 , 0.27048 , 0.0828 , 1.0);
	var materialSpecular  = vec4(0.256777 , 0.137622 , 0.086014 , 1.0);
	var materialShininess = 76.8;
	*/

	// gold
	/*
	var materialAmbient  = vec4(0.24725 , 0.1995 , 0.0745 , 1.0);
	var materialDiffuse  = vec4(0.75164 , 0.60648 , 0.22648 , 1.0);
	var materialSpecular  = vec4(0.628281 , 0.555802 , 0.366065 , 1.0);
	var materialShininess = 51.2;
	*/

	// pewter
	/*
	var materialAmbient  = vec4(0.10588 , 0.058824 , 0.113725 , 1.0);
	var materialDiffuse  = vec4(0.42745 , 0.470588 , 0.541176 , 1.0);
	var materialSpecular  = vec4(0.3333 , 0.3333 , 0.521569 , 1.0);
	var materialShininess = 9.84615;
	*/

	// silver
	/*
	var materialAmbient  = vec4(0.19225 , 0.19225 , 0.19225 , 1.0);
	var materialDiffuse  = vec4(0.50754 , 0.50754 , 0.50754 , 1.0);
	var materialSpecular  = vec4(0.508273 , 0.508273 , 0.508273 , 1.0);
	var materialShininess = 51.2;
	*/

	// polished silver
	/*
	var materialAmbient  = vec4(0.23125 , 0.23125 , 0.23125 , 1.0);
	var materialDiffuse  = vec4(0.2775 , 0.2775 , 0.2775 , 1.0);
	var materialSpecular  = vec4(0.773911 , 0.773911 , 0.773911 , 1.0);
	var materialShininess = 89.6;
	*/

	var ctm;
	var ambientColor, diffuseColor, specularColor;
	var modelViewMatrix, projectionMatrix;
	var viewerPos;
	var program;

	var xAxis = 0;
	var yAxis = 1;
	var zAxis = 2;
	var axis = 0;
	var theta = vec3(0, 0, 0);

	var thetaLoc;

	var flag = false;

	init();

	function quad(a, b, c, d) {
		
		
		var at1 = subtract(aVertices[b], aVertices[a]);
		var at2 = subtract(aVertices[c], aVertices[b]);
		var aNormal = cross(at1, at2);
		aNormal = vec3(aNormal);

		aPositionsArray.push(aVertices[a]);
		aNormalsArray.push(aNormal);
		aPositionsArray.push(aVertices[b]);
		aNormalsArray.push(aNormal);
		aPositionsArray.push(aVertices[c]);
		aNormalsArray.push(aNormal);
		aPositionsArray.push(aVertices[a]);
		aNormalsArray.push(aNormal);
		aPositionsArray.push(aVertices[c]);
		aNormalsArray.push(aNormal);
		aPositionsArray.push(aVertices[d]);
		aNormalsArray.push(aNormal);
		
		
		var bt1 = subtract(bVertices[b], bVertices[a]);
		var bt2 = subtract(bVertices[c], bVertices[b]);
		var bNormal = cross(bt1, bt2);
		bNormal = vec3(bNormal);

		bPositionsArray.push(bVertices[a]);
		bNormalsArray.push(bNormal);
		bPositionsArray.push(bVertices[b]);
		bNormalsArray.push(bNormal);
		bPositionsArray.push(bVertices[c]);
		bNormalsArray.push(bNormal);
		bPositionsArray.push(bVertices[a]);
		bNormalsArray.push(bNormal);
		bPositionsArray.push(bVertices[c]);
		bNormalsArray.push(bNormal);
		bPositionsArray.push(bVertices[d]);
		bNormalsArray.push(bNormal);
		
		
		var ct1 = subtract(cVertices[b], cVertices[a]);
		var ct2 = subtract(cVertices[c], cVertices[b]);
		var cNormal = cross(ct1, ct2);
		cNormal = vec3(cNormal);

		cPositionsArray.push(cVertices[a]);
		cNormalsArray.push(cNormal);
		cPositionsArray.push(cVertices[b]);
		cNormalsArray.push(cNormal);
		cPositionsArray.push(cVertices[c]);
		cNormalsArray.push(cNormal);
		cPositionsArray.push(cVertices[a]);
		cNormalsArray.push(cNormal);
		cPositionsArray.push(cVertices[c]);
		cNormalsArray.push(cNormal);
		cPositionsArray.push(cVertices[d]);
		cNormalsArray.push(cNormal);
		
		
		var dt1 = subtract(dVertices[b], dVertices[a]);
		var dt2 = subtract(dVertices[c], dVertices[b]);
		var dNormal = cross(dt1, dt2);
		dNormal = vec3(dNormal);

		dPositionsArray.push(dVertices[a]);
		dNormalsArray.push(dNormal);
		dPositionsArray.push(dVertices[b]);
		dNormalsArray.push(dNormal);
		dPositionsArray.push(dVertices[c]);
		dNormalsArray.push(dNormal);
		dPositionsArray.push(dVertices[a]);
		dNormalsArray.push(dNormal);
		dPositionsArray.push(dVertices[c]);
		dNormalsArray.push(dNormal);
		dPositionsArray.push(dVertices[d]);
		dNormalsArray.push(dNormal);
	}


	function colorCube() {
		quad(1, 0, 3, 2);
		quad(2, 3, 7, 6);
		quad(3, 0, 4, 7);
		quad(6, 5, 1, 2);
		quad(4, 5, 6, 7);
		quad(5, 4, 0, 1);
	}

	function init() {
		canvas = document.getElementById("gl-canvas");

		gl = canvas.getContext('webgl2');
		if (!gl) alert("WebGL 2.0 isn't available");


		gl.viewport(0, 0, canvas.width, canvas.height);
		gl.clearColor(1.0, 1.0, 1.0, 1.0);

		gl.enable(gl.DEPTH_TEST);

		//
		//  Load shaders and initialize attribute buffers
		//
		program = initShaders(gl, "vertex-shader", "fragment-shader");
		gl.useProgram(program);

		colorCube();
		
		
		
		
		
		
		var aNBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, aNBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(aNormalsArray), gl.STATIC_DRAW);
		var aNormalLoc = gl.getAttribLocation(program, "aNormal");
		gl.vertexAttribPointer(aNormalLoc, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(aNormalLoc);
		var aVBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, aVBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(aPositionsArray), gl.STATIC_DRAW);
		var aPositionLoc = gl.getAttribLocation(program, "aPosition");
		gl.vertexAttribPointer(aPositionLoc, 4, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(aPositionLoc);
		
		var bNBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, bNBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(bNormalsArray), gl.STATIC_DRAW);
		var bNormalLoc = gl.getAttribLocation(program, "bNormal");
		gl.vertexAttribPointer(bNormalLoc, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(bNormalLoc);
		var bVBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, bVBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(bPositionsArray), gl.STATIC_DRAW);
		var bPositionLoc = gl.getAttribLocation(program, "bPosition");
		gl.vertexAttribPointer(bPositionLoc, 4, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(bPositionLoc);
		
		var cNBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cNBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(cNormalsArray), gl.STATIC_DRAW);
		var cNormalLoc = gl.getAttribLocation(program, "cNormal");
		gl.vertexAttribPointer(cNormalLoc, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(cNormalLoc);
		var cVBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cVBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(cPositionsArray), gl.STATIC_DRAW);
		var cPositionLoc = gl.getAttribLocation(program, "cPosition");
		gl.vertexAttribPointer(cPositionLoc, 4, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(cPositionLoc);
		
		var dNBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, dNBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(dNormalsArray), gl.STATIC_DRAW);
		var dNormalLoc = gl.getAttribLocation(program, "dNormal");
		gl.vertexAttribPointer(dNormalLoc, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(dNormalLoc);
		var dVBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, dVBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, flatten(dPositionsArray), gl.STATIC_DRAW);
		var dPositionLoc = gl.getAttribLocation(program, "dPosition");
		gl.vertexAttribPointer(dPositionLoc, 4, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(dPositionLoc);
		
		
		
		
		
		
		
	

		thetaLoc = gl.getUniformLocation(program, "theta");

		viewerPos = vec3(0.0, 0.0, -20.0);

		projectionMatrix = ortho(-1, 1, -1, 1, -100, 100);

		var ambientProduct = mult(lightAmbient, materialAmbient);
		var diffuseProduct = mult(lightDiffuse, materialDiffuse);
		var specularProduct = mult(lightSpecular, materialSpecular);

		document.getElementById("ButtonX").onclick = function() {
			axis = xAxis;
		};
		document.getElementById("ButtonY").onclick = function() {
			axis = yAxis;
		};
		document.getElementById("ButtonZ").onclick = function() {
			axis = zAxis;
		};
		document.getElementById("ButtonT").onclick = function() {
			flag = !flag;
		};

		gl.uniform4fv(gl.getUniformLocation(program, "uAmbientProduct"),
			ambientProduct);
		gl.uniform4fv(gl.getUniformLocation(program, "uDiffuseProduct"),
			diffuseProduct);
		gl.uniform4fv(gl.getUniformLocation(program, "uSpecularProduct"),
			specularProduct);
		gl.uniform4fv(gl.getUniformLocation(program, "uLightPosition"),
			lightPosition);

		gl.uniform1f(gl.getUniformLocation(program,
			"uShininess"), materialShininess);

		gl.uniformMatrix4fv(gl.getUniformLocation(program, "uProjectionMatrix"),
			false, flatten(projectionMatrix));
			
		
		
		

		aLoc = gl.getUniformLocation(program, "a");
		bLoc = gl.getUniformLocation(program, "b");
		cLoc = gl.getUniformLocation(program, "c");
		dLoc = gl.getUniformLocation(program, "d");

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
	}

	function render() {

		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
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

		if (flag) theta[axis] += 2.0;

		modelViewMatrix = mat4();
		modelViewMatrix = mult(modelViewMatrix, rotate(theta[xAxis], vec3(1, 0, 0)));
		modelViewMatrix = mult(modelViewMatrix, rotate(theta[yAxis], vec3(0, 1, 0)));
		modelViewMatrix = mult(modelViewMatrix, rotate(theta[zAxis], vec3(0, 0, 1)));

		//console.log(modelView);

		gl.uniformMatrix4fv(gl.getUniformLocation(program,
			"uModelViewMatrix"), false, flatten(modelViewMatrix));

		gl.drawArrays(gl.TRIANGLES, 0, numPositions);


		requestAnimationFrame(render);
	}

}

shadedCube();