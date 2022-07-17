import { useEffect } from 'react';
import ShowName from './ShowName';

function ChildFunctionComponent(props = {}) {
  let { NamedComponent } = props;
  useEffect(() => {
    console.log('Component got Initiated');
    // let myInterval = setInterval(() => {
    //   console.log('Intervals logging');
    // }, 2000);
    return () => {
      console.log('Component got destroyed');
      // clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      <p>
        User Detail : <NamedComponent {...props} />
      </p>
      ;
    </div>
  );
}

export default ChildFunctionComponent;
