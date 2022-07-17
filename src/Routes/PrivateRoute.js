import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import RestrictedAccess from '../Components/RestrictedAccess';

function PrivateRoute(props) {
  let { Element, ...rest } = props;
  let [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(props.auth);
  }, []);

  return isAuth || props.publicRoute ? (
    <Element {...rest} admin={true} />
  ) : (
    <RestrictedAccess />
  );
}

export default PrivateRoute;
