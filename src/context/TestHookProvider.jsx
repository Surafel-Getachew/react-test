import { createContext, useState, useContext } from "react";
import axios from "axios";

const TestHookContext = createContext();

export const useTestHook = () => {
  return useContext(TestHookContext);
};

const TestHookProvider = ({ children }) => {
  const [text, setText] = useState("Some Text");
  
  const changeText = () => {
    setText("Some other text");
  };

  return (
    <TestHookContext.Provider value={{ text, changeText }}>
      {children}
    </TestHookContext.Provider>
  );
  
};

export default TestHookProvider;
