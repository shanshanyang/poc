import style from './user.css';
import app from '../app.css';

// const User = (name, ...props) => {
//   console.log("user", props, this);

//   return `
//     <div class="${style.user}">
//       <span>User Name : </span>
//       <button onClick=${props[0].bind(this, 2)} class="${app.mobile}">${name.toUpperCase()}</button>
//     </div>
//   `;
// };

class User {
  constructor(name, ...props) {
    this.name = name;
    this.handler = props[0];
  }
  
  render() {
    
    const loginBtn = `<button id="${this.name}" class="${app.mobile}">${this.name.toUpperCase()}</button>`;
    console.log('render user', window.performance.now());
    const template = document.createElement('template');
    template.innerHTML = loginBtn;
    console.log(template.content.childNodes, window.performance.now());
    template.content.childNodes[0].onClick = this.handler;

    return `
      <div class="${style.user}">
        <span>User Name : </span>
        ${loginBtn}
      </div>
    `;
  }

}

export default User;
