import ShowAge from './ShowAge';

function ShowName(props = {}) {
  let { user = '' } = props;
  return (
    <>
      <p>Name is {user.name} </p>
      <ShowAge user={user} />
    </>
  );
}

export default ShowName;
