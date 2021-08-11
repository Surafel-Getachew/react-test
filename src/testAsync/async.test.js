const fetchData = (data) => {
  return "the data is peanut butter";
};

// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

// test("the data is not peanut butter",() => {
//     return fetchData(data).then((data) => {
//         expect(data).toBe("the data is not peanut butter")
//     },)
// })

// test("the data is not peanut butter", async () => {
//     try {
//         const data = await fetchData("the data is peanut butter");
//         expect(data).toBe("the data is peanut butter");
//     } catch (error) {}
// });

// beforeEach(() => {
//     initializeCityDatabase()
// })

beforeAll(() => {
  // console.log("1-beforeAll");
});

afterAll(() => {
  // console.log("1-afterAll");
});

beforeEach(() => {
  // console.log("1-beforeEach");
});

afterEach(() => {
  // console.log("1-afterEach");
});

test("T1", () => {
  // console.log("test1");
});

describe("Scoped / Nested block", () => {
  beforeAll(() => {
    // console.log("2-beforeAll");
  })
  beforeEach(() => {
    // console.log("2-beforeEach");
  })
  test("T2",() => {
    // console.log("Test-2");
  })
  afterEach(() => {
    // console.log("2-afterEach");
  })
  afterAll(() => {
    // console.log("2-afterAll");
  })
});
