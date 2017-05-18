import button from './button.js'; 
const app = document.createElement('main');
const text = document.createTextNode('360-viewer');

app.appendChild(text);
app.appendChild(button);
document.getElementById('root').appendChild(app);