import { Link } from 'react-router-dom';

export default function RestrictedAccess() {
  return (
    <>
      This is an restricted page, pls redirect to <Link to='/'> Home </Link>
    </>
  );
}
