import { Container } from "react-bootstrap";
import { people } from "./data";
import DatesCount from "./components/DatesCount";
import PeopleWindow from "./components/PeopleWindow";
import ControlButtons from "./components/ControlButtons";
import { useState } from "react";

function App() {
  const [peopleDate, setPeopleDate] = useState([]);

  const onDelete = () => {
    setPeopleDate([]);
  };

  const onShow = () => {
    setPeopleDate(people);
  };

  return (
    <div className="App font">
      <Container className="py-5 justify-content-center">
        <DatesCount people={peopleDate} />
        <PeopleWindow people={peopleDate} />
        <ControlButtons onDelete={onDelete} onShow={onShow} />
      </Container>
    </div>
  );
}

export default App;
