import button from './button.js'; 
const viewer = document.createElement('main');
const text = document.createTextNode('360-viewer');

viewer.appendChild(text);
viewer.appendChild(button);

document.getElementById('root').appendChild(viewer);
export default viewer;
