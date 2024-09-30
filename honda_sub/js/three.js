import * as THREE from 'three';
import {GLTFLoader} from 'gltf';
import {OrbitControls} from 'orbit';

//1 랜더러
window.addEventListener('load',function(){
    init()
})

const canvas = document.querySelector("#canvas")
async function init(){
    const renderer = new THREE.WebGLRenderer({
        antialias: true,//계단현상 방지
        alpha:true,
        canvas,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth,window.innerHeight);
    // document.body.appendChild(renderer.domElement);

//3,scene
const scene = new THREE.Scene();
//2.카메라
const camera = new THREE.PerspectiveCamera( 75,
    window.innerWidth / window.innerHeight,
    1, 500 );
camera.position.set(9,4,10)
const controls = new OrbitControls( camera, renderer.domElement);
controls.autoRotate=true;
controls.enableZoom=false



//바닥면
const geometry = new THREE.CircleGeometry( 7, 200 ); 
const material = new THREE.MeshBasicMaterial( {} ); 
const circle = new THREE.Mesh( geometry, material ); 
circle.rotation.x = Math.PI*-0.5;
circle.position.set(0,-1,0)
circle.receiveShado=true;
scene.add( circle );

//4.바이크 넣을 gltf
const gltfLoader = new GLTFLoader();
const gltf =  await gltfLoader.loadAsync("./free_honda_crf_450/scene.gltf")
const bike = gltf.scene;
bike.scale.set(4,4,4)
bike.castShadow = true;
bike.position.set(0,-1,1)
scene.add(bike)
//5 조명
const directionalLight = new THREE.DirectionalLight( 0xffffff);
directionalLight.position.set(10,5,2)
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024
directionalLight.shadow.mapSize.height = 1024

scene.add( directionalLight );

// const helper = new THREE.DirectionalLightHelper( directionalLight, 5);

// scene.add( helper );

const direction02 = new THREE.DirectionalLight( 0xFFFFFF );
direction02.position.set(-10,-1,1)
scene.add( direction02 );

// const helper02= new THREE.DirectionalLightHelper( direction02, 5 );
// scene.add( helper02 );



const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );








render();

  function render() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(render);
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', handleResize);


  //마우스 휠을 내리면 카메라가 돌아감
  // const s1 = document.querySelector("s1")
  // gsap.from(camera.position,{
  //   y:40,x:40,
  //   scrollTrigger:{
  //       trigger : canvas,//기준
  //       start : 'top center',
  //       end : 'bottom center',
  //       scrub : true,
  //       // markers:true
  //   }
  // })
  // const s2 = document.querySelector("s2")
  // gsap.from(camera.position,{
  //   x:-80,
  //   scrollTrigger:{
  //       trigger : canvas,//기준
  //       start : 'top center',
  //       end : '+=1000',
  //       scrub : true,
  //       markers:true
  //   }
  // })




}//init