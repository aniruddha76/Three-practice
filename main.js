import * as THREE from 'three'

//create a scene - similiar to canvas
const scene = new THREE.Scene();

//create a shape
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83'
});
const mesh = new THREE.Mesh(geometry, material);

//add created shape to the scene
scene.add(mesh);

//add lights to the sene
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(10, 10, 10);
scene.add(light);

//add camera to be able to see added elements on the screen
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

//add renderer to render elements on the sreen
const canvas = document.querySelector(".webgl");
const context = canvas.getContext('webgl2');
if (!context) {
  console.error("WebGL 2 context not supported.");
} else {
  // Pass the context to the renderer
  const renderer = new THREE.WebGLRenderer({ canvas, context });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}