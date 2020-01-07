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

  describe("pressButton", () => {
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
    it("should check if item exists", () => {
      const machine = new VendingMachine();
      machine.insertCoin(500);
      machine.pressButton("A");
      let isAvailable = machine.pressButton(3);
      expect(isAvailable).to.equal(false);
    });
    it("should check if the balance is sufficient", () => {
      const machine = new VendingMachine();
      machine.insertCoin(50);
      machine.pressButton("A");
      let isAvailable = machine.pressButton(1);
      expect(isAvailable).to.equal(false);
    });
  });
  describe("changeInventoryCount", () => {
    it("should decrease item inventory by 1", () => {
      const machine = new VendingMachine();
      const lastCount = machine.inventory[0][0].count;
      machine.insertCoin(500);
      machine.pressButton("A");
      machine.pressButton(1);
      expect(machine.inventory[0][0].count).to.equal(lastCount - 1);
    });
  });

  describe("returnChange", () => {
    it("should return the correct change", () => {
      const machine = new VendingMachine();
      machine.insertCoin(500);
      const balance = machine.balance;
      machine.pressButton("A");
      let item = machine.pressButton(1);
      expect(machine.returnChange(item)).to.equal(
        balance - machine.inventory[0][0].price
      );
    });
  });
});
