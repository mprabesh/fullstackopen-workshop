import NameDisplay from "./NameDisplay";

const nameList = [
  { firstName: "Prabesh", lastName: "Magar", id: 251 },
  { firstName: "Sunil", lastName: "Tajpuriya", id: 276 },
  { firstName: "Sushil", lastName: "Thanet", id: 284 },
];
const App = () => {
  return (
    <div>
      {nameList.map((value) => (
        <NameDisplay names={value} key={value.id} />
      ))}
    </div>
  );
};

export default App;
