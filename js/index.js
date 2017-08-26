
			$(document).on('click touchstart', '.content_button', function() {
			    window.open('profile.html', '_blank');
			});
				

			var container, stats;
			var camera, scene, renderer, particle;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();


			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				var material = new THREE.SpriteMaterial( {
					map: new THREE.CanvasTexture( generateSprite() ),
					blending: THREE.AdditiveBlending
				} );

				for ( var i = 0; i < 150; i++ ) {

					particle = new THREE.Sprite( material );

					particle.position.x = Math.random() * 2 - 1;
			        particle.position.y = Math.random() * 2 - 1;
			        particle.position.z = Math.random() * 2 - 1;
			        
			        particle.position.normalize();

			        particle.position.multiplyScalar( Math.random() * 10 + 1000 );
			        particle.scale.x = particle.scale.y = 35;
			        //particle.scale.x = particle.scale.y = 500;
					scene.add( particle );
				}

				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( 0x00000c );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );


				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


			function generateSprite() {

				var canvas = document.createElement( 'canvas' );
				canvas.width = 16;
				canvas.height = 16;

				var context = canvas.getContext( '2d' );
				var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
				gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
				gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
				gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
				gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

				context.fillStyle = gradient;
				context.fillRect( 0, 0, canvas.width, canvas.height );

				return canvas;

			}


			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}