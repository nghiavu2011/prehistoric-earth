// Mock DOM & Three for testing prototype.html script execution
const fs = require('fs');
const html = fs.readFileSync('prototype.html', 'utf-8');

const scriptMatch = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!scriptMatch) {
    console.error("No module script found");
    process.exit(1);
}

let code = scriptMatch[1];
// replace imports with mocks
code = code.replace(/import\s+\*\s+as\s+THREE\s+from\s+'[^']+';/, `
const THREE = {
  Scene: function() { this.add = () => {}; },
  Group: function() { this.children = []; this.add = () => {}; this.remove = () => {}; this.traverse = (cb) => {}; this.position = { set: () => {} }; this.scale = { setScalar: () => {} }; this.updateMatrixWorld = () => {}; this.rotation = { set: () => {} }; },
  PerspectiveCamera: function() { this.position = { set: () => {}, copy: () => {}, addScaledVector: () => {} }; this.getWorldDirection = () => ({}); },
  WebGLRenderer: function() { return { setPixelRatio: () => {}, setSize: () => {}, domElement: {}, shadowMap: {} }; },
  Vector3: function(x=0, y=0, z=0) { this.x = x; this.y = y; this.z = z; this.set = (x,y,z) => { this.x=x; this.y=y; this.z=z; }; this.clone = () => new THREE.Vector3(this.x, this.y, this.z); this.copy = (v) => { this.x=v.x; this.y=v.y; this.z=v.z; }; this.lerp = () => {}; this.distanceTo = () => 0; },
  Vector2: function(x=0,y=0) { this.x=x; this.y=y; this.copy = function(v) { this.x=v.x; this.y=v.y; return this; }; this.multiplyScalar = function(s) { this.x*=s; this.y*=s; return this; }; },
  Clock: function() { this.getDelta = () => 0.016; },
  PlaneGeometry: function() { return { rotateX: () => {} }; },
  BufferGeometry: function() { return { setFromPoints: function() { this.attributes = { position: { array: new Float32Array(6), needsUpdate: false } }; return this; } }; },
  LineDashedMaterial: function() {},
  Line: function(geom) { this.geometry = geom; this.computeLineDistances = () => {}; },
  MeshBasicMaterial: function() {},
  ShadowMaterial: function() { this.opacity = 0.5; },
  HemisphereLight: function() { this.position = { set: () => {} }; },
  DirectionalLight: function() { this.position = { set: () => {} }; this.target = { position: { set: () => {} } }; this.shadow = { mapSize: {}, camera: {} }; this.updateMatrixWorld = () => {}; },
  Mesh: function() { this.userData = {}; this.position = { set: () => {} }; this.rotation = { set: () => {} }; this.scale = { set: () => {} }; },
  CanvasTexture: function() {},
  Color: function(c) { this.c = c; },
  MathUtils: { degToRad: (deg) => deg * Math.PI / 180 },
  Box3: function() { return { setFromObject: function() { return this; }, min: { y: 0 }, max: { y: 4 }, getSize: (v) => { v.x=10; v.y=4; v.z=10; }, getCenter: (v) => { v.x=0; v.y=2; v.z=0; }, min: { y: 0 }, max: { y: 4 } }; },
  ACESFilmicToneMapping: 1,
  PCFSoftShadowMap: 1
};
const OrbitControls = function() { return { update: () => {}, target: new THREE.Vector3() }; };
const GLTFLoader = function() { return { setMeshoptDecoder: () => {}, load: (url, onLoad) => { console.log('Mock GLTFLoader load called for:', url); onLoad({ scene: new THREE.Group() }); } }; };
const MeshoptDecoder = {};
`);

code = code.replace(/import\s+\{.*\}\s+from\s+'[^']+';/g, '');

const mockElement = () => ({
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    appendChild: () => {},
    addEventListener: () => {},
    querySelectorAll: () => [],
    querySelector: () => null,
    setAttribute: () => {},
    clientWidth: 1000,
    clientHeight: 600,
    textContent: '',
    innerHTML: ''
});

global.Audio = function() { this.play = () => Promise.resolve(); this.pause = () => {}; this.addEventListener = () => {}; };
global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};

global.window = {
    innerWidth: 1200,
    innerHeight: 800,
    devicePixelRatio: 1,
    addEventListener: (evt, cb) => {
        if (evt === 'DOMContentLoaded') {
            console.log('DOMContentLoaded registered, triggering immediately...');
            setTimeout(cb, 10);
        }
    }
};

global.document = {
    getElementById: (id) => mockElement(),
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: (tag) => {
        const el = mockElement();
        if (tag === 'canvas') {
            el.getContext = () => ({
                createRadialGradient: () => ({ addColorStop: () => {} }),
                fillRect: () => {}
            });
        }
        return el;
    },
    addEventListener: () => {},
    documentElement: mockElement()
};

global.navigator = { clipboard: { writeText: () => Promise.resolve() } };
global.requestAnimationFrame = () => {};

fs.writeFileSync('test_runner.js', code);
console.log('Wrote test_runner.js, now executing in node...');
require('./test_runner.js');
