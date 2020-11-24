const { set } = require("mongoose");
const { calculateTip } = require("../src/math");

test("Tip Calculation", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Async test", (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
});
