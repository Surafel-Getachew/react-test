import { fireEvent, screen,render } from "@testing-library/react";
import AddNewPostBtn from "../AddNewPostBtn";

describe("Add New Post Btn", () => {
  test("button onClick should trigger onClick callback", () => {
    const onClickCallback = jest.fn();

    render(<AddNewPostBtn onClick={onClickCallback} />);

    fireEvent.click(screen.getByText("Add New Post"));

    expect(onClickCallback).toHaveBeenCalled();
  });
});
