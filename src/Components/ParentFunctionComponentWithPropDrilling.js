import { Component, useContext, useEffect, useState } from 'react';
import { ChildContext, RootContext } from '../services/context';
import ChildFunctionComponent from './ChildFunctionComponent';
import Navigation from './Navigation';
import ShowAge from './ShowAge';
import ShowName from './ShowName';

function ParentFunctionComponentWithPropDrilling(props) {
  let [user, setUser] = useState({ name: '', age: 0 });
  let [usersList, setUsersList] = useState([]);
  let contextValue = useContext(RootContext);
  let childContext = useContext(ChildContext);
  useEffect(() => {
    // let numList = [1, 2, 3, 4, 5];
    // let updatedNum = numList.map((num) => {
    //   return num * 5;
    // });
    // let filterHigherValues = updatedNum.filter((elm) => {
    //   return elm < 5;
    // });
    // console.log('updatedNum', updatedNum);
    // console.log('filterHigherValues', filterHigherValues);
    console.log(childContext);
    // console.log(contextValue);
    // childContext.setModal('PC');
  }, []);
  let addUsers = () => {
    console.log(user);
    if (user.name && user.age) {
      setUsersList([...usersList, user]);
      setUser({ name: '', age: '' });
      console.log(usersList);
    }
  };
  let { name = '', age = 0 } = user;
  return (
    <div>
      {/* <Navigation /> */}
      <button
        onClick={() => {
          contextValue.setAuth(!contextValue.isAuth);
          childContext.setModal('PC');
        }}
      >
        {!contextValue.isAuth ? 'Show' : 'Hide'}
      </button>
      <h1>Parent Function Component</h1>
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setUser({ ...user, name: e.target.value });
        }}
        value={name}
      />
      <input
        onChange={(e) => {
          setUser({ ...user, age: e.target.value });
        }}
        value={age}
      />

      <button
        onClick={() => {
          addUsers();
        }}
      >
        Add
      </button>
      {usersList.map((user, i) => {
        let ComponentName = i > 2 ? ShowName : ShowAge;
        return (
          <ChildFunctionComponent NamedComponent={ComponentName} user={user} />
        );
      })}
      {childContext.modal}
    </div>
  );
}

export default ParentFunctionComponentWithPropDrilling;
