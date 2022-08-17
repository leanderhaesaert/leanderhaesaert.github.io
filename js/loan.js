// Loading and results hidden by default
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
});

// Listen for submit
document.getElementById("loan-form").addEventListener("submit", (e) => {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});
// UI Vars

function calculateResults() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  // Calc Vars
  const principal = parseFloat(amount.value); //checks if first char is a number and returns only the numbers
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedMonths = parseFloat(years.value) * 12;

  // Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedMonths);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedMonths).toFixed(2);
    totalInterest.value = (monthly * calculatedMonths - principal).toFixed(2);
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    //input is false, incomplete
    showError("Please check your numbers");
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "none";
  }
}

// Show Error
function showError(error) {
  document.getElementById("results").style.display = "hidden";
  // Create a div
  const errorDiv = document.createElement("div");
  // Get elements
  const calc = document.getElementById("container-calc");
  const loan = document.getElementById("loan-form");
  // Add class
  errorDiv.className = "alert";
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  calc.insertBefore(errorDiv, loan);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
