import * as THREE from 'three'

//create a scene - similiar to canvas
const scene = new THREE.Scene();

//create a shape
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  flatShading: false // Ensure smooth shading
});
const mesh = new THREE.Mesh(geometry, material);

//add created shape to the scene
scene.add(mesh);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1, 100); // Add ambient light
scene.add(ambientLight);

//add lights to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

//add camera to be able to see added elements on the screen
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 20;
scene.add(camera);

//add renderer to render elements on the sreen
const canvas = document.querySelector(".webgl");

// Pass the context to the renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);