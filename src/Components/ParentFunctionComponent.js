import { Component, useContext, useEffect, useState } from 'react';
import ChildFunctionComponent from './ChildFunctionComponent';

function ParentFunctionComponent() {
  // Behind the scene
  // useState (param = undefined) = >{
  //     let a = param
  //     updateA(val)=>{ Kevin
  //         a = val
  //     }
  //     return [a = 'Allen'  modified into 'Kevin' ,updateA]
  // }
  // useState()
  //   let [user, iui] = ['userName', 'fruitName', 'productName'];
  // let setName = (val)=>{
  //     name = val;
  //   }
  let [name, setName] = useState('Allen');

  let [showChild, setShowChild] = useState(false);
  let [labelName, setLabelName] = useState('Show');
  let [asd, setASD] = useState({ labelName: '', view: false });

  //  useContext
  useEffect(() => {
    setTimeout(() => {
      setName('Kevin');
    }, 5000);
  }, []);

  let showOrHideChild = () => {
    setShowChild(!showChild);
    setLabelName(!showChild ? 'Show' : 'Hide');
    // setASD({labelName:!showChild ? 'Show' : 'Hide',view:!asd.view})
  };
  return (
    <div>
      <h1>Parent Function Component</h1>
      <button
        onClick={() => {
          showOrHideChild();
        }}
      >
        {labelName}
      </button>
      {showChild ? (
        <ChildFunctionComponent parentUserName={name} />
      ) : (
        <p>Child Component Got hidden pls click show</p>
      )}
    </div>
  );
}

export default ParentFunctionComponent;

{
  /* <div>
      <h1>Parent Function Component</h1>
      {!showChild ? (
        <button
          onClick={() => {
            setShowChild(true);
          }}
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => {
            setShowChild(false);
          }}
        >
          Hide
        </button>
      )}
      {showChild ? (
        <ChildFunctionComponent parentUserName={name} />
      ) : (
        <p>Child Component Got hidden pls click show</p>
      )}
    </div> */
}
