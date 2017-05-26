import User from '../user/user.js';

// Import Styles
import list from './list.css';
import style from '../app.css';

const UserList = (arrayList, ...props) => {
  const users = arrayList.map( (item)=> {
    const user = new User(item, ...props);
    // DOM is not ready
    return user.render();
  });
  
  console.log('render list', window.performance.now(), users);
   const list = `
    <div class="${style.flexbox}">
      ${users.join('')}
    <div>
  `;
  const template = document.createElement('template');
  template.innerHTML = list;
  // template.content.childNodes[1].onClick = (e) => {
  //   console.log(e, e.target, e.currentTarget);
  // };

  console.log(template.content.childNodes[1], window.performance.now());
  return list;
};

export default UserList;
