let totalMonthBill = 0;

function calculateTotalBill() {
  const price = parseFloat(document.getElementById("price").value);

  if (isNaN(price)) {
    alert("Please enter a valid price.");
    return;
  }

  totalMonthBill += price;
  document.getElementById("total-month-bill").textContent = totalMonthBill.toFixed(2);

  // Clear form fields after calculation
  document.getElementById("order-form").reset();
}
