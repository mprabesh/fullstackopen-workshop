import NotesForm from "./components/NotesForm";
import Notes from "./components/Notes";
import VisisbilityFilter from "./components/VIsibilityFilter";

const App = () => {
  return (
    <div>
      <h2>Notes App</h2>
      <NotesForm />
      <hr />
      <VisisbilityFilter />
      <hr />
      <Notes />
    </div>
  );
};

export default App;
