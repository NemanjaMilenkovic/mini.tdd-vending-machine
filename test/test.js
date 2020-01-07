const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("should save the row letter", () => {
    const machine = new VendingMachine();
    machine.pressButton("A");
    expect(machine.selectedRow).to.equal("A");
  });
  it("should save column number ", () => {
    const machine = new VendingMachine();
    machine.pressButton(2);
    expect(machine.selectedColumn).to.equal(2);
  });
});
