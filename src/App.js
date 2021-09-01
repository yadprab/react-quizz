import "./Styles/Styles.css";
import { Main } from "./Components/Main";
import { useState } from "react";
import { QuizSection } from "./Components/QuizSection";
function App() {
  const [state, setState] = useState({ selected: false });
  return (
    <div className="main--wrapper">
      {state.selected ? <QuizSection /> : <Main setState={setState} />}
    </div>
  );
}

export default App;
