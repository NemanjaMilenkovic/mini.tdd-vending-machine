// eslint-disable-next-line no-unused-vars
class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.selectedRow = "";
    this.selectedColumn = 0;
    this.juice = { name: `Apple Juice`, price: 350, count: 5 };
    this.coffee = { name: "Tully's", price: 250, count: 7 };
    this.tea = { name: `Good Tea`, price: 450, count: 1 };
    this.beer = { name: "Sapporo", price: 350, count: 0 };
    this.inventory = [
      [this.juice, this.coffee, this.tea, this.beer],
      [this.m7, this.m6, this.m5, this.m4],
      [this.a7, this.a6, this.a5, this.a4],
      [this.t7, this.t6, this.t5, this.t4],
    ];
  }

  insertCoin(coin) {
    if (coin === 10 || coin === 50 || coin === 100 || coin === 500) {
      this.till[coin]++;
      this.balance += coin;
    }
  }

  pressButton(entry) {
    if (entry === "A" || entry === "B" || entry === "C" || entry === "D") {
      this.selectedRow = entry;
      console.log(this.selectedRow);
    }
    if (entry === 1 || entry === 2 || entry === 3 || entry === 4) {
      this.selectedColumn = entry;
      console.log(this.selectedRow, this.selectedColumn);
    }
    if (this.selectedRow !== "" && this.selectedColumn !== 0) {
      this.changeInventoryCount();
    }
  }

  changeInventoryCount() {
    const convertRow = ["A", "B", "C", "D"];
    let index = convertRow.findIndex((row) => {
      return row === this.selectedRow;
    });
    this.inventory[index][this.selectedColumn - 1].count--;
  }
}

module.exports = VendingMachine;

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
