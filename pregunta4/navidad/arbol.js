// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,-4,0.5);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
	var desx = Math.random() * (2 - 1) + 1;
	var desy = Math.random() * (2 - 1) + 1;
	var desz = Math.random() * (2 - 1) + 1;

    console.log(desx," ",desy," ",desz);

        var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.7, 0.0, 0.0 ) );	//0A	0 0 5 - 7 0 0 = -7 0 5  ||  7 0 0 *t -7 0 5
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.7, 0.0 ) );	//1B	0 7 0 - 7 0 0 = -7 7 0  ||  7 0 0 *t -7 7 0		7-7 07
	migeometria.vertices.push( new THREE.Vector3( -0.7, 0.0, 0.0 ) );	//2C	-7 0 0 - 0 7 0 = -7 -7 0 || 0 7 0 *t -7 -7 0	0-7 0-7 	
	migeometria.vertices.push( new THREE.Vector3( 0.0, -0.7, 0.0 ) );	//3D	0 -7 0 - -7 0 0 = 7 -7 0 || -7 0 0 *t 7 -7 0	-77 0-7
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.5 ) );	//4E	7 0 0 - 0 -7 0 = 7 7 0 || 0 -7 0 *t 7 7 0		07 -77

	migeometria.vertices.push( new THREE.Vector3( 0.5, 0.0, 0.3 ) );	//5A
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.3 ) );	//6B
	migeometria.vertices.push( new THREE.Vector3( -0.5, 0.0, 0.3 ) );	//7C
	migeometria.vertices.push( new THREE.Vector3( 0.0, -0.5, 0.3 ) );	//8D
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.7 ) );	//9E

	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.6 ) );	//10A
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, 0.6 ) );	//11B
	migeometria.vertices.push( new THREE.Vector3( -0.3, 0.0, 0.6 ) );	//12C
	migeometria.vertices.push( new THREE.Vector3( 0.0, -0.3, 0.6 ) );	//13D
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.9 ) );	//14E

	for (let i = 0; i < 3; i++) {
		migeometria.faces.push( new THREE.Face3( 0 + (5*i), 1 + (5*i), 4 + (5*i) ) );
		migeometria.faces.push( new THREE.Face3( 1 + (5*i), 2 + (5*i), 4 + (5*i) ) );
		migeometria.faces.push( new THREE.Face3( 2 + (5*i), 3 + (5*i), 4 + (5*i) ) );
		migeometria.faces.push( new THREE.Face3( 3 + (5*i), 0 + (5*i), 4 + (5*i) ) );
		migeometria.faces.push( new THREE.Face3( 0 + (5*i), 2 + (5*i), 1 + (5*i) ) );
		migeometria.faces.push( new THREE.Face3( 0 + (5*i), 3 + (5*i), 2 + (5*i) ) );
	}

	var sphere1 = []; 
	var objetosphere1 = [];

	for (let i = 0; i < 15; i++) {

		var t = Math.random();

		var x = 0.7+(t*(-0.7))
		var y = 0+(t*(0.7))

		var tt = Math.random();
		var x1 = x + (tt*(0-x)); 
		var y1 = y + (tt*(0-y));
		var z1 = 0 + (tt*(0.5-0));

		sphere1[i] = new THREE.SphereGeometry(0.06, 64, 32);
		sphere1[i].computeFaceNormals();
		objetosphere1[i] = new THREE.Mesh(sphere1[i], new THREE.MeshBasicMaterial({ color: 0x0000FF }));
		objetosphere1[i].translateX(x1);
		objetosphere1[i].translateY(y1);
		objetosphere1[i].translateZ(z1);
	}

	/*for (let i = 0; i < 5; i++) {

		var t = Math.random();

		var x = 0+(t*(-0.7))
		var y = 0.7+(t*(-0.7))

		var tt = Math.random();
		var x1 = x + (tt*(0-x)) - 0.05; 
		var y1 = y + (tt*(0-y)) + 0.05;
		var z1 = 0 + (tt*(0.5-0));

		migeometriaAdorno.vertices.push( new THREE.Vector3( x1  , y1 , z1 ) );	//0A	-0.21 0 0.15
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1, y1 + 0.1 , z1 -0.1 ) );	//1B
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 -0.1 , y1 - 0.1, z1 -0.1) );	//2C
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 +0.1 , y1 - 0.1, z1 -0.1) );	//3D
	}

	for (let i = 0; i < 5; i++) {

		var t = Math.random();

		var x = -0.7+(t*(0.7))
		var y = 0+(t*(-0.7))

		var tt = Math.random();
		var x1 = x + (tt*(0-x)) - 0.05; 
		var y1 = y + (tt*(0-y)) - 0.05;
		var z1 = 0 + (tt*(0.5-0));

		migeometriaAdorno.vertices.push( new THREE.Vector3( x1  , y1 , z1 ) );	//0A	-0.21 0 0.15
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1, y1 + 0.1 , z1 -0.1 ) );	//1B
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 -0.1 , y1 - 0.1, z1 -0.1) );	//2C
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 +0.1 , y1 - 0.1, z1 -0.1) );	//3D
	}

	for (let i = 0; i < 5; i++) {

		var t = Math.random();

		var x = 0+(t*(0.7))
		var y = -0.7+(t*(0.7))

		var tt = Math.random();
		var x1 = x + (tt*(0-x)) + 0.05; 
		var y1 = y + (tt*(0-y)) - 0.05;
		var z1 = 0 + (tt*(0.5-0));

		migeometriaAdorno.vertices.push( new THREE.Vector3( x1  , y1 , z1 ) );	//0A	-0.21 0 0.15
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1, y1 + 0.1 , z1 -0.1 ) );	//1B
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 -0.1 , y1 - 0.1, z1 -0.1) );	//2C
		migeometriaAdorno.vertices.push( new THREE.Vector3( x1 +0.1 , y1 - 0.1, z1 -0.1) );	//3D
	}

	for (let i = 0; i < 20; i++) {

		migeometriaAdorno.faces.push( new THREE.Face3( 0 + (4*i), 1+ (4*i), 2+ (4*i) ) );
		migeometriaAdorno.faces.push( new THREE.Face3( 0+ (4*i), 3+ (4*i),1+ (4*i) ) );
		migeometriaAdorno.faces.push( new THREE.Face3( 0+ (4*i), 2+ (4*i),3+ (4*i) ) );
		migeometriaAdorno.faces.push( new THREE.Face3( 1+ (4*i), 3+ (4*i), 2+ (4*i) ) );
	}*/

	var migeometriaTronco = new THREE.Geometry();
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.0, -0.15, -0.4 ) );	//0A
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.15, 0.0, -0.4 ) );	//1B
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.0, 0.15, -0.4 ) );	//2C
	migeometriaTronco.vertices.push( new THREE.Vector3( -0.15, 0.0, -0.4 ) );	//3D
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.0, -0.15, 0.0 ) );	//4E
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.15, 0.0, 0.0 ) );		//5F
	migeometriaTronco.vertices.push( new THREE.Vector3( 0.0, 0.15, 0.0 ) );		//6G
	migeometriaTronco.vertices.push( new THREE.Vector3( -0.15, 0.0, 0.0 ) );	//7H

	migeometriaTronco.faces.push( new THREE.Face3( 0, 2, 1 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 0, 3, 2 ) );

	migeometriaTronco.faces.push( new THREE.Face3( 0, 1, 5 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 0, 5, 4 ) );

	migeometriaTronco.faces.push( new THREE.Face3( 1, 2, 6 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 1, 6, 5 ) );

	migeometriaTronco.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 4, 6, 7 ) );

	migeometriaTronco.faces.push( new THREE.Face3( 7, 2, 3 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 7, 6, 2 ) );

	migeometriaTronco.faces.push( new THREE.Face3( 4, 3, 0 ) );
	migeometriaTronco.faces.push( new THREE.Face3( 4, 7, 3 ) );

	var migeometriaEstrella = new THREE.Geometry();
	migeometriaEstrella.vertices.push( new THREE.Vector3( 0.07, 0.0, 0.95 ) );	//0A
	migeometriaEstrella.vertices.push( new THREE.Vector3( 0.0, 0.07, 0.95 ) );	//1B
	migeometriaEstrella.vertices.push( new THREE.Vector3( -0.07, 0.0, 0.95 ) );	//2C
	migeometriaEstrella.vertices.push( new THREE.Vector3( 0.0, -0.07, 0.95 ) );	//3D
	migeometriaEstrella.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.87 ) );	//4E

	migeometriaEstrella.faces.push( new THREE.Face3( 0, 1, 4 ) );
	migeometriaEstrella.faces.push( new THREE.Face3( 1, 2, 4 ) );
	migeometriaEstrella.faces.push( new THREE.Face3( 2, 4, 3 ) );
	migeometriaEstrella.faces.push( new THREE.Face3( 3, 4, 0 ) );
	migeometriaEstrella.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometriaEstrella.faces.push( new THREE.Face3( 0, 2, 3 ) );

	var migeometriaEstrella1 = new THREE.Geometry();
	migeometriaEstrella1.vertices.push( new THREE.Vector3( 0.07, 0.0, 0.91 ) );	//0A
	migeometriaEstrella1.vertices.push( new THREE.Vector3( 0.0, 0.07, 0.91 ) );	//1B
	migeometriaEstrella1.vertices.push( new THREE.Vector3( -0.07, 0.0, 0.91 ) );	//2C
	migeometriaEstrella1.vertices.push( new THREE.Vector3( 0.0, -0.07, 0.91 ) );	//3D
	migeometriaEstrella1.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.99 ) );	//4E

	migeometriaEstrella1.faces.push( new THREE.Face3( 0 , 1 , 4  ) );
	migeometriaEstrella1.faces.push( new THREE.Face3( 1 , 2 , 4  ) );
	migeometriaEstrella1.faces.push( new THREE.Face3( 2 , 3 , 4	) );
	migeometriaEstrella1.faces.push( new THREE.Face3( 3 , 0 , 4  ) );
	migeometriaEstrella1.faces.push( new THREE.Face3( 0 , 2 , 1  ) );
	migeometriaEstrella1.faces.push( new THREE.Face3( 0 , 3 , 2  ) );
	

    
    var material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } ); // Material de color rojo
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto

	//var materialAdorno = new THREE.MeshBasicMaterial( { color: 0x0000FF } ); // Material de color rojo
    //var miobjetoAdorno = new THREE.Mesh (migeometriaAdorno, materialAdorno); // Crea el objeto

	var materialTronco = new THREE.MeshBasicMaterial( { color: 0x870000 } ); // Material de color rojo
    var miobjetoTronco = new THREE.Mesh (migeometriaTronco, materialTronco); // Crea el objeto

	var materialEstrella = new THREE.MeshBasicMaterial( { color: 0xE0DF4B } ); // Material de color rojo
    var miobjetoEstrella = new THREE.Mesh (migeometriaEstrella, materialEstrella); // Crea el objeto
	var materialEstrella1 = new THREE.MeshBasicMaterial( { color: 0xFFFD55 } ); // Material de color rojo
    var miobjetoEstrella1 = new THREE.Mesh (migeometriaEstrella1, materialEstrella1); // Crea el objeto
	
	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	//scene.add( miobjetoAdorno );
	scene.add( miobjeto );	
	scene.add( miobjetoTronco );
	scene.add( miobjetoEstrella );
	scene.add( miobjetoEstrella1 );

	for (let i = 0; i < 15; i++) {
	
		scene.add( objetosphere1[i] );
	}


}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
