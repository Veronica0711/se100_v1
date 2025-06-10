// 1. Fetch stock price from Alpha Vantage
async function getStockPrice() {
  const symbol = document.getElementById("symbol").value.trim().toUpperCase();
  const display = document.getElementById("stockDisplay");
  if (!symbol) return display.innerText = "Please enter a symbol.";

  const apiKey = "YOUR_ALPHA_VANTAGE_KEY"; // get one free :contentReference[oaicite:4]{index=4}
  :contentReference[oaicite:5]{index=5}

  :contentReference[oaicite:6]{index=6}
  try {
    :contentReference[oaicite:7]{index=7}
    :contentReference[oaicite:8]{index=8}
    :contentReference[oaicite:9]{index=9}
    
    if (quote && quote["05. price"]) {
      const price = parseFloat(quote["05. price"]);
      display.innerHTML = `Latest price for <strong>${symbol}</strong>: $${price.toFixed(2)}`;
    } else {
      display.innerText = `Symbol "${symbol}" not found.`;
    }
  } catch (err) {
    display.innerText = "Error fetching data.";
    console.error(err);
  }
}

// 2. Loan payment calculator
function calculateLoan() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const r = parseFloat(document.getElementById("annualRate").value) / 100 / 12;
  const n = parseFloat(document.getElementById("loanYears").value) * 12;
  const result = document.getElementById("loanResult");

  if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
    return result.innerText = "Please enter valid positive numbers.";
  }

  // Monthly payment formula
  const M = (P * r) / (1 - (1 + r) ** -n);
  result.innerHTML = `
    Monthly Payment: <strong>$${M.toFixed(2)}</strong><br>
    Total Payment: <strong>$${(M * n).toFixed(2)}</strong>
  `;
}
