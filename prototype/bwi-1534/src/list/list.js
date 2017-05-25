import User from '../user/user.js';
// Import Styles
import list from './list.css';
import style from '../app.css';

const UserList = (arrayList, ...props) => {
  const users = arrayList.map( (item)=> {
    const user = new User(item, ...props);
    // DOM is not ready
    user.bindEvents();
    return user.render();
  });

  return `
    <div class="${list.users} ${style.flexbox}">
      ${users.join('')}
    <div>
    `;
};

export default UserList;
