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

    this.inventory = [
      [
        { type: "Juice", name: "Apple Juice", price: 350, count: 3 },
        { type: "Juice", name: "Orange Juice", price: 350, count: 3 },
        { type: "Juice", name: "Peach Juice", price: 350, count: 0 },
        { type: "Juice", name: "Mango Juice", price: 450, count: 15 },
      ],
      [
        { type: "Coffee", name: "Espresso", price: 150, count: 15 },
        { type: "Coffee", name: "Cappuccino", price: 250, count: 1 },
        { type: "Coffee", name: "Corretto", price: 250, count: 2 },
        { type: "Coffee", name: "Macchiato", price: 250, count: 22 },
      ],
      [
        { type: "Tea", name: "Sencha", price: 250, count: 11 },
        { type: "Tea", name: "Matcha", price: 250, count: 2 },
        { type: "Tea", name: "Mint", price: 250, count: 12 },
        { type: "Tea", name: "Chamomile", price: 250, count: 10 },
      ],
      [
        { type: "Beer", name: "Kabinet", price: 350, count: 15 },
        { type: "Beer", name: "Sapporo", price: 350, count: 5 },
        { type: "Beer", name: "Kozel", price: 450, count: 4 },
        { type: "Beer", name: "Krusovice", price: 450, count: 2 },
      ],
    ];
  }

  insertCoin(coin) {
    if (coin === 10 || coin === 50 || coin === 100 || coin === 500) {
      this.till[coin]++;
      this.balance += coin;
    }
  }

  pressButton(entry) {
    if (typeof entry == "string") {
      entry = entry.toUpperCase();
    }

    if (entry === "A" || entry === "B" || entry === "C" || entry === "D") {
      this.selectedRow = entry;
      console.log("Row: " + this.selectedRow);
    } else if (typeof entry === "string") {
      console.log("Please choose: 'A', 'B', 'C' or 'D'");
      return;
    } else if (entry === 1 || entry === 2 || entry === 3 || entry === 4) {
      this.selectedColumn = entry;
      console.log("Column: " + this.selectedColumn);
    } else {
      console.log("Please chose: '1', '2', '3' or '4'");
      return;
    }

    const convertRow = ["A", "B", "C", "D"];
    let index = convertRow.findIndex((row) => {
      return row === this.selectedRow;
    });

    if (this.selectedRow !== "" && this.selectedColumn !== 0) {
      if (this.inventory[index][this.selectedColumn - 1].count < 1) {
        console.log("Item is not available");
        return false;
      }

      if (this.balance < this.inventory[index][this.selectedColumn - 1].price) {
        console.log("Insufficient amount");
        return false;
      }
      this.changeInventoryCount();
      console.log(
        "You've selected: " +
          this.inventory[index][this.selectedColumn - 1].name
      );
      return this.inventory[index][this.selectedColumn - 1];
    }
  }

  changeInventoryCount() {
    const convertRow = ["A", "B", "C", "D"];
    let index = convertRow.findIndex((row) => {
      return row === this.selectedRow;
    });
    this.inventory[index][this.selectedColumn - 1].count--;
  }
  returnChange(item) {
    let change = this.balance - item.price;
    console.log("Your change is: " + change);
    this.balance = 0;
    return change;
  }
}

module.exports = VendingMachine;

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
