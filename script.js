document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const table = document.getElementById("itemsTable");
  const rows = table.getElementsByTagName("tr");

  searchButton.addEventListener("click", () => {
    const filter = searchInput.value.toLowerCase();
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let item = row.getElementsByTagName("td")[0];
      let price = row.getElementsByTagName("td")[1];
      let weight = row.getElementsByTagName("td")[2];

      if (item && price && weight) {
        let itemText = item.textContent || item.innerText;
        let priceText = price.textContent || price.innerText;
        let weightText = weight.textContent || weight.innerText;

        row.style.display =
          itemText.toLowerCase().includes(filter) ||
          priceText.toLowerCase().includes(filter) ||
          weightText.toLowerCase().includes(filter)
            ? ""
            : "none";
      }
    }
  });
});

//openAddCustomerPopup
// Function to open the Add Customer popup
function openAddCustomerPopup() {
  console.log("Opening Add Customer Popup");
  const popup = document.getElementById("addCustomerPopup");
  popup.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable scrolling while the popup is open
}

// Function to close the Add Customer popup
function closeAddCustomerPopup() {
  const popup = document.getElementById("addCustomerPopup");
  popup.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling when the popup is closed
}

// Function to search customers (replace with your logic)
function searchCustomers() {
  const searchInput = document.getElementById("customerSearchInput").value;
  console.log("Searching for:", searchInput);
}

document.addEventListener("click", function (event) {
  const popup = document.getElementById("addCustomerPopup");
  if (event.target !== popup && !popup.contains(event.target)) {
    popup.style.display = "none";
  }
});
