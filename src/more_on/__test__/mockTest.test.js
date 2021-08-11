import TestHook from "../TestHook";
import {
  render,
  waitFor,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import axiosMock from "axios";
import App from "../../App";

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "some title" } });
  const { getByText, getByTestId, rerender } = render(
    <App>
      <TestHook />
    </App>
  );

  expect(getByText("loading")).toBeInTheDocument();

  const resolvedEl = await waitFor(() => getByTestId("title"));

  expect(resolvedEl.textContent).toBe("some title");

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
});
