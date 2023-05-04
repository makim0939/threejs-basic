import * as THREE from "three";

//シーンを作成
const scene = new THREE.Scene();
//レンダラを作成して、DOM要素をHTMLに追加
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

//オブジェクトを作成
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 15, 100);
camera.lookAt(0, 0, 0);

//キューブの作成
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.scale.set(8, 8, 8);
cube.position.set(0, 0, 0);

//ライトの作成
const light = new THREE.DirectionalLight(0xeeeeee, 1);
light.position.set(50, 50, 100);
const light2 = new THREE.DirectionalLight(0xeeeeee, 1);
light.position.set(-50, -50, -100);
scene.add(light);
scene.add(light2);

scene.add(cube);
let i = 0;
function animate() {
  const radian = (i * Math.PI) / 180;
  camera.position.x = 50 * Math.sin(radian);
  camera.position.z = 50 * Math.cos(radian);
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
  i++;
  requestAnimationFrame(animate);
}
animate();
