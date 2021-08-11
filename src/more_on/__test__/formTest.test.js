import { render, fireEvent, cleanup, getByRole } from "@testing-library/react";
import Form from "../Form";

afterEach(cleanup);

it("Inputing text updates the state", () => {
  const { getByText, getByTestId, getByLabelText } = render(<Form />);
  expect(getByText("Change:")).toBeInTheDocument();
  fireEvent.change(getByLabelText("Input Text:"), {
    target: { value: "surafel" },
  });
  expect(getByText("Change: surafel")).toBeInTheDocument();
});

it("submitting a form works correctly", () => {
  const { getByText, getByLabelText } = render(<Form />);

  fireEvent.change(getByLabelText("Input Text:"), {
    target: { value: "surafel" },
  });

  expect(getByText("Change: surafel")).toBeInTheDocument();
  
  fireEvent.click(getByText("Submit"))
  
  expect(getByText("Submit Value: surafel")).toBeInTheDocument();

});
