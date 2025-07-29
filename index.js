function startApp() {
  // Part 1: 🔐 Login & Access Control
  let username = prompt("Enter username (admin or user):");
  let password = prompt("Enter password:");

  if ((username === "admin" || username === "user") && password === "1234") {
    let role = username === "admin" ? "admin" : "user";
    let securityLevel = username === "admin" ? "high" : "low";
    alert("Login successful! Welcome, " + role.toUpperCase() + ".");

    // Part 2: ☕ Coffee Shop Order Calculator
    let name = prompt("What's your name?");
    let age = parseInt(prompt("Enter your age:"));
    let coffeeType = prompt("What coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
    let quantity = parseInt(prompt("How many cups would you like?"));

    let pricePerCup = 0;
    if (coffeeType === "espresso") {
      pricePerCup = 2.5;
    } else if (coffeeType === "latte") {
      pricePerCup = 3.5;
    } else if (coffeeType === "cappuccino") {
      pricePerCup = 4.0;
    } else {
      alert("Invalid coffee type. Exiting.");
      return;
    }

    let originalTotal = pricePerCup * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
    let finalTotal = originalTotal - discount;

    // Part 3: 🧾 Bill Splitter with Tip
    let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    if (![1, 2, 3].includes(splitCount)) {
      alert("Invalid number of people. Exiting.");
      return;
    }

    let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
    if (![0, 5, 10, 15].includes(tipPercent)) {
      alert("Invalid tip percentage. Exiting.");
      return;
    }

    let tipAmount = finalTotal * (tipPercent / 100);
    let totalWithTip = finalTotal + tipAmount;
    let amountPerPerson = totalWithTip / splitCount;

    // Format values
    originalTotal = originalTotal.toFixed(2);
    discount = discount.toFixed(2);
    tipAmount = tipAmount.toFixed(2);
    totalWithTip = totalWithTip.toFixed(2);
    amountPerPerson = amountPerPerson.toFixed(2);

    // Final Output
    alert(
      `Hello ${name}!\n` +
      `You ordered ${quantity} ${coffeeType}(s).\n` +
      `Original total: $${originalTotal}\n` +
      `Discount: $${discount}\n` +
      `Tip: $${tipAmount}\n` +
      `Total with Tip: $${totalWithTip}\n` +
      `Split between ${splitCount} people: $${amountPerPerson} each`
    );

  } else {
    alert("Incorrect username or password. Access denied.");
  }
}
