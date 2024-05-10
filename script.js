// Function to change tabs
function changeTab(tabIndex) {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    if (index + 1 === tabIndex) {
      tab.classList.add("active");
      tabContents[index].classList.add("active");
    } else {
      tab.classList.remove("active");
      tabContents[index].classList.remove("active");
    }
  });
}
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
