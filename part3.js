// Input CSV string
const csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)
1,0.00,0.050,0.050
2,0.49,0.066,0.066
3,0.98,0.087,0.080
4,1.47,0.116,0.108
5,1.96,0.142,0.138
6,2.45,0.166,0.158
7,2.94,0.193,0.174
8,3.43,0.204,0.192
9,3.92,0.226,0.205
10,4.41,0.238,0.232`;

// Function to process and format the CSV string
function processCSV(csv) {
  const rows = [];
  let currentCell = "";
  let currentRow = [];
  let previousChar = "";

  // Loop through each character in the CSV string
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];

    if (char === "," || (char === "\n" && previousChar !== "\r")) {
      // Add the current cell to the row
      currentRow.push(currentCell.trim());
      currentCell = "";

      if (char === "\n" || i === csv.length - 1) {
        // End of the row
        rows.push(currentRow);
        currentRow = [];
      }
    } else if (char !== "\r") {
      // Build the current cell
      currentCell += char;
    }

    previousChar = char;
  }

  // Format and display the rows
  const formattedRows = rows.map((row) =>
    row.map((cell) => cell.padEnd(15)).join("")
  );
  console.log(formattedRows.join("\n"));
}

// Call the function with the CSV string
processCSV(csvString);
