// Function to sort table rows based on column
function sortTableByColumn(columnIndex, isDate = false) {
  const table = document.querySelector("tbody");
  const rows = Array.from(table.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const aText = a.querySelectorAll("td")[columnIndex].textContent.trim();
    const bText = b.querySelectorAll("td")[columnIndex].textContent.trim();

    if (isDate) {
      // Sort by date
      return new Date(aText) - new Date(bText);
    } else {
      // Sort alphabetically (for Name or Role)
      return aText.localeCompare(bText);
    }
  });

  // Append sorted rows back to the table body
  rows.forEach((row) => table.appendChild(row));
}

// Event listener for dropdown menu
document.querySelectorAll(".dropdown-menu a").forEach((item) => {
  item.addEventListener("click", function () {
    const sortBy = this.textContent;

    if (sortBy === "Sort by Name") {
      sortTableByColumn(0); // Sort by Name (column index 0)
    } else if (sortBy === "Sort by Create Date") {
      sortTableByColumn(2, true); // Sort by Create Date (column index 2) as date
    } else if (sortBy === "Sort by Role") {
      sortTableByColumn(3); // Sort by Role (column index 3)
    }
  });
});

document.getElementById("submitUser").addEventListener("click", function () {
  // Get form elements
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var role = document.getElementById("role").value;

  // Basic validation checks
  if (!fullName || !email || !mobile || !password || !confirmPassword || !role) {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // You can now handle the form data (e.g., send it to a server, display it, etc.)
  console.log("User data:", { fullName, email, mobile, password, role });

  // Close the modal after submission (optional)
  var addUserModal = new bootstrap.Modal(document.getElementById("addUserModal"));
  addUserModal.hide();

  // Clear the form fields after submission
  document.getElementById("addUserForm").reset();

  alert("User successfully added!");
});
