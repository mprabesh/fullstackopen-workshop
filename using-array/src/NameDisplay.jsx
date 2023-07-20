const NameDisplay = ({ names }) => {
  //using helper function
  const helperFunction = () => {
    return `${names.firstName} ${names.lastName}`;
  };
  //return <h1>Hello! {names.firstName} {names.lastName}</h1>
  return <h1>Hello! {helperFunction()}</h1>;
};

export default NameDisplay;
