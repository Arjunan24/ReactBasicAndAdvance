import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      The page your trying to access is not found <Link to='/'> Home </Link>
    </>
  );
}
