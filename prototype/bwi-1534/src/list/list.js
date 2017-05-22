import User from '../user.js';
// Import Styles
import list from './list.css';

const UserList = (arrayList) => {
  const users = arrayList.map( ()=> {
    return User();
  });
  return `
    <div class="${list.users}">
      ${users}
    <div>
    `;
};

export default UserList;
