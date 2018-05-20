// YDKJS Book 1 - Up & Going
// Practice problem - phone purchase calculator
// Chance the value of balance to see how many phones you can buy.
// You'll always spend too much, though.  Learn some discipline!

const taxRate = 0.06; // 6% tax rate
const phonePrice = 49.99;
const accessoryPrice = 9.99;
const spendingThreshold = 300;

let amount = 0;
let balance = 451.76;
let phonesBought = 0;

const addTax = amount => {
  return (amount += amount * taxRate);
};

const formatAmount = amount => {
  return `$${amount.toFixed(2)}`;
};

while (amount < balance) {
  amount += phonePrice;
  phonesBought++;

  amount < spendingThreshold ? (amount += accessoryPrice) : amount;
}

amount = addTax(amount);

console.log(
  `You bought ${phonesBought} phones. Your spent amount is ${formatAmount(
    amount
  )}, compared to your bank balance of $${balance}.`
);

amount > balance ? console.log('You spent too much!') : console.log('You can afford this.');
