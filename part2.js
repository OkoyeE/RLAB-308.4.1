// Data to display
const data = [
  { ID: 42, Name: "Bruce", Occupation: "Knight", Age: 41 },
  { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
  { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
  { ID: 98, Name: "Bill", Occupation: "Doctor’s Assistant", Age: 26 },
];

// Create a table dynamically
function createTable(data) {
  // Create the table element
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.margin = "20px 0";

  // Add table header
  const headers = Object.keys(data[0]);
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.style.border = "1px solid black";
    th.style.padding = "10px";
    th.style.backgroundColor = "#f2f2f2";
    th.style.textAlign = "left";
    headerRow.appendChild(th);
  });

  // Add table body
  const tbody = table.createTBody();
  data.forEach((row) => {
    const tr = tbody.insertRow();
    headers.forEach((header) => {
      const td = tr.insertCell();
      td.textContent = row[header];
      td.style.border = "1px solid black";
      td.style.padding = "10px";
    });
  });

  // Append the table to the body
  document.body.appendChild(table);
}

// Call the function to create the table
createTable(data);
