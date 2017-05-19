import User from './user.js';

const UserList = (arrayList) => {
  const users = arrayList.map( ()=> {
    return User();
  });
  return `
    <div>
      ${users}
    <div>
    `;
};

export default UserList;
