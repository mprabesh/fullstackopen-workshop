const ChangeButton = ({ changeFunc, text }) => {
  return <button onClick={changeFunc}>{text}</button>;
};
export default ChangeButton;
