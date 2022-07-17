import { useEffect, useState } from 'react';

function Root1() {
  const [name, setName] = useState('Guest');
  //   useEffect(() => {
  console.log(name);
  setName('New name');
  //   }, []);

  return <h1> Test Root1 Component</h1>;
}

function Root2() {
  return <h1> Test Root2 Component</h1>;
}

export default { Root1, Root2 };
