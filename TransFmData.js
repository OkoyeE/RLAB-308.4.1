// Input CSV data
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Step 1: Parse CSV into a two-dimensional array
function parseCSVToArray(csv) {
  const rows = csv.split("\n").map((row) => row.split(","));
  const columnCount = rows[0].length; // Dynamically calculate number of columns
  console.log(`Number of columns: ${columnCount}`); // Debugging information
  return rows;
}

// Cache the 2D array
const dataArray = parseCSVToArray(csvData);

// Step 2: Transform rows into objects
function transformToObjects(data) {
  const headers = data[0].map((header) => header.trim().toLowerCase()); // Convert headers to lowercase
  const objects = data.slice(1).map((row) => {
    const obj = {};
    row.forEach((value, index) => {
      obj[headers[index]] = value.trim(); // Map row values to corresponding headers
    });
    return obj;
  });
  return objects;
}

// Perform the transformation
const resultObjects = transformToObjects(dataArray);

// Output the results
console.log("Two-Dimensional Array:", dataArray);
console.log("Array of Objects:", resultObjects);
