// Input CSV string
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Function to parse CSV into a two-dimensional array
function parseCSVToArray(csv) {
  // Split the CSV string into rows
  const rows = csv.split("\n");

  // Split the first row to determine the number of columns dynamically
  const headings = rows[0].split(",");
  const numColumns = headings.length;

  // Parse the CSV into a two-dimensional array
  const twoDimensionalArray = rows.map((row) =>
    row.split(",").map((cell) => cell.trim())
  );

  // Cache the two-dimensional array for later use
  return { array: twoDimensionalArray, numColumns };
}

// Parse the CSV and store results
const { array: dataArray, numColumns } = parseCSVToArray(csvString);

// Log results
console.log(`Number of Columns: ${numColumns}`);
console.log("Two-Dimensional Array:", dataArray);

// Example: Accessing specific rows and columns
console.log(dataArray[0]);
console.log(dataArray[1]);
