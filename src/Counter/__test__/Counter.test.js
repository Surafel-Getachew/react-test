import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter/>)
    getByTestId = component.getByTestId
})

test("header renders with correct text", () => {
  const headerElements = getByTestId("header");
  expect(headerElements.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const input = getByTestId("input");
  expect(input.value).toBe("1");
});

test("add button render with plus sign", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});
test("subtract button render with plus sign", () => {
  const subtractBtn = getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
});

test("changing the value of inputs works correctly", () => {
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  expect(input.value).toBe("5");
});

test("on clicking + button it should increment counter", () => {
  const addBtnEl = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  //   const input = getByTestId("input");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterElement.textContent).toBe("1");
});
test("on clicking - button it should decrement counter", () => {
  const subtractBtn = getByTestId("subtract-btn");
  const counterElement = getByTestId("counter");
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking add button works correctly", () => {
  const addBtnEl = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterElement.textContent).toBe("5");
});
test("changing input value then clicking subtract button works correctly", () => {
  const subtractBtn = getByTestId("subtract-btn");
  const counterElement = getByTestId("counter");
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("-5");
});

test("adding and subtracting leades to the correct number", () => {
  const counterElement = getByTestId("counter");
  const addBtn = getByTestId("add-btn");
  const subtractBtn = getByTestId("subtract-btn");
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "10",
    },
  });
  let i;
  for (i = 0; i < 4; i++) {
    fireEvent.click(addBtn);
  }
  for (i = 0; i < 2; i++) {
    fireEvent.click(subtractBtn);
  }
  expect(counterElement.textContent).toBe("20");
  for (i = 0; i < 2; i++) {
    fireEvent.click(subtractBtn);
  }
  expect(counterElement.textContent).toBe("0");
});

test("counter color change to green if counter value is 100 and over", () => {
  const counterElement = getByTestId("counter");
  const addBtn = getByTestId("add-btn");
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "100",
    },
  });
  fireEvent.click(addBtn);
  expect(counterElement.className).toBe("green");
  fireEvent.change(input, {
    target: {
      value: "100",
    },
  });
});
test("counter color change to red if counter value is 100 and less", () => {
  const counterElement = getByTestId("counter");
  const addBtn = getByTestId("add-btn");
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "-100",
    },
  });
  fireEvent.click(addBtn);
  expect(counterElement.className).toBe("red");
});
