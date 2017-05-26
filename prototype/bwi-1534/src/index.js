import UserList from './list/list.js';
import style from './app.css';

document.body.classList.add('mobile');
const action = (e) => {
  console.log('action', e, e.target, e.currentTarget);
};

// render()
document.body.innerHTML = UserList(["john", "tom", "sam"], action);
