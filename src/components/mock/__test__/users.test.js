import axios from "axios";
import Users from "../users";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});

// const myMockFn = jest.fn((cb) => cb(null, true));

// myMockFn((err, val) => {
//   console.log(val);
// });

// const myMockFnn = jest
//   .fn()
//   .mockImplementationOnce((cb) => cb(null, true))
//   .mockImplementationOnce((cb) => cb(null, false));

//   myMockFnn((err,value) => console.log(value))
//   myMockFnn((err,value) => console.log(value));;

const myMockFn = jest.fn(() => {
  return "default";
});

myMockFn
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

test("about the mocked function", () => {
  const myNamedMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation((scala) => scala + 42)
    .mockName("add 42");

  myNamedMockFn(1);

  // The mock function was called at least once
  expect(myNamedMockFn).toBeCalled();

  // The mock function was called at least once with the specified args
  expect(myNamedMockFn).toBeCalledWith(1);

  // The last call to the mocke function wwas called with the specified args
  expect(myNamedMockFn).toBeCalledWith(1);

  // All calls and the name of the mock is written as a snapshot
     expect(myNamedMockFn).toMatchSnapshot()

  // Expect the last call first argument to equal 1
  expect(myNamedMockFn.mock.calls[myNamedMockFn.mock.calls.length - 1][0]).toBe(
    1
  );

  //
  expect(myNamedMockFn.getMockName()).toBe("add 42");
});
