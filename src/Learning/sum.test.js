import sum from "./sum";

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeTruthy();
});

test("zero", () => {
  expect(0).not.toBeNull();
  expect(0).toBeDefined();
  expect(0).not.toBeTruthy();
  expect(0).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toEqual(4);
  expect(value).toBeGreaterThan(2);
  expect(value).toBeLessThan(5);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThanOrEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

test("the shopping list contains mail", () => {
  const shoppingList = ["milk", "soft drink", "pizza", "apple"];
  // expect(shoppingList).toContain("apple")
  expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}
test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
});


describe("testing mock functions", () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0,1],mockCallback)

  // The mock functions is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The fist argument of the first call to be the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to be the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to be the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)

});


const myMock = jest.fn();

const a = new myMock();

const b = {};

const bound = myMock.bind(b);

bound();

// console.log(myMock.mock.instances);

// call comes first the arg and counting is just like an array
// it starts from 0 in both cases.

const mySecondMock = jest.fn();


mySecondMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValueOnce(true);

// console.log(mySecondMock());
// console.log(mySecondMock());
// console.log(mySecondMock());


const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11,12].filter(num => filterTestFn(num))

// console.log(result);

// output 11 and 12 cons..

// imp detail
// calls are first and arg are second

// console.log(filterTestFn.mock.calls[0][0]);

