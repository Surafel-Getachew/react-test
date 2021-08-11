// import Counter from "./Counter/Counter";
// import Posts from "./components/Post/Posts";
import TestHook from "./more_on/TestHook";
// import Form from "./more_on/Form";
import { useState } from "react";
import TestHookProvider from "./context/TestHookProvider";
import "./App.css";

function App({ children }) {
  const [name, setName] = useState("Bob");
  const changeName = () => {
    setName("steve");
  };
  return (
    <div className="App">
      <TestHookProvider>
        <TestHook name={name} changeName={changeName} />
        {/* <Form /> */}
      </TestHookProvider>
    </div>
  );
}

export default App;
