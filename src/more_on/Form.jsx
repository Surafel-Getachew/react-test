import { useState } from "react";

const Form = () => {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValueSubmit(e.target.text1.value);
    setValueSubmit(valueChange);
  };
  const handleChange = (e) => {
    setValueChange(e.target.value);
  };
  return (
    <div>
      <h1>React Hook Form</h1>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor="text1">Input Text:</label>
        <input id="text1" onChange={handleChange} value= {valueChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      <h3>React State:</h3>
      <p>Change: {valueChange}</p>
      <p>Submit Value: {valueSubmit}</p>
      <br />
    </div>
  );
};

export default Form;
