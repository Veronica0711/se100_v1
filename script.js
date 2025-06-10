function calculateCost() {
  // Get input values (as strings)
  let priceInput = document.getElementById("price").value;
  let quantityInput = document.getElementById("quantity").value;

  // Convert to numbers using parseFloat
  let price = parseFloat(priceInput);
  let quantity = parseFloat(quantityInput);

  // Check for invalid input
  if (isNaN(price) || isNaN(quantity)) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
  } else {
    let total = price * quantity;
    document.getElementById("result").innerText = "Total cost: $" + total.toFixed(2);
  }
}
