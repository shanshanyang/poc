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

  bindEvents() {
    // this.handler.bind(this, this.name);
    console.log(window.document.querySelector('#john'));
    window.addEventListener('click', this.handler);
  }

  render() {
    return `
      <div class="${style.user}">
        <span>User Name : </span>
        <button id="${this.name}" class="${app.mobile}">${this.name.toUpperCase()}</button>
      </div>
    `;
  }

}

export default User;
