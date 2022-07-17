import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChildContext, RootContext } from '../services/context';

function Navigation() {
  let navigation = ['home', 'showName', 'users', 'showAge'];
  let { isAuth } = useContext(RootContext);
  let childContext = useContext(ChildContext);
  useEffect(() => {
    console.log(childContext);
  }, []);
  return isAuth ? (
    <ul>
      {childContext.modal}
      {navigation.map((navs) => {
        return (
          <li>
            <Link to={`/${navs}`}>{navs} </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <></>
  );
}

export default Navigation;
