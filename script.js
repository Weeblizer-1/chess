const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const colors = [
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // White
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0xffa500 })  // Orange
];

const cubeSize = 1;
const cubeSpacing = 1.05;
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
            const cube = new THREE.Mesh(cubeGeometry, colors);
            cube.position.set(
                (x - 1) * cubeSize * cubeSpacing,
                (y - 1) * cubeSize * cubeSpacing,
                (z - 1) * cubeSize * cubeSpacing
            );
            scene.add(cube);
        }
    }
}

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
