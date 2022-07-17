function ShowAge(props = {}) {
  let { user = '' } = props;
  return (
    <>
      <p>Age is {user.age}</p>
    </>
  );
}

export default ShowAge;
