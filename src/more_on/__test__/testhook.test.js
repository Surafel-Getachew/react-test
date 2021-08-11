import TestHook from "../TestHook";
import {
  render,
  waitFor,
  fireEvent,
  cleanup,
  act
} from "@testing-library/react";
import axiosMock from "axios";
import App from "../../App";
import TestHookProvider from "../../context/TestHookProvider";

afterEach(cleanup);

it("Text in state is changed when button clicked", async () => {
  const { getByText } = render(
    <App>
      <TestHook />
    </App>
  );

  expect(getByText("Initial State")).toBeInTheDocument();

  expect(getByText("State Change")).toBeInTheDocument();

  fireEvent.click(getByText("State Change"));

  expect(getByText("Initial State Changed")).toBeInTheDocument();
});

it("button click changes props", async () => {
  const { getByText } = render(
    <App>
      <TestHook />
    </App>
  );

  expect(getByText("Change Name")).toBeInTheDocument();

  expect(getByText("Bob")).toBeInTheDocument();

  await waitFor(() => fireEvent.click(getByText("Change Name")));

  expect(getByText("steve")).toBeInTheDocument();
});

it("Context value is changed by child component", () => {
  const { getByText } = render(
    <TestHookProvider>
      <TestHook />
    </TestHookProvider>
  );

  expect(getByText("Some Text")).toBeInTheDocument();

  fireEvent.click(getByText("Change Text"));

  expect(getByText("Some other text")).toBeInTheDocument();

});



