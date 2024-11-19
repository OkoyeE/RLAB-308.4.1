// Input CSV data
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Function to parse CSV and store as a 2D array
function parseCSVTo2DArray(csv) {
  const rows = csv.split("\n"); // Split into rows
  const result = rows.map((row) => row.split(",").map((cell) => cell.trim())); // Split each row into cells
  return result;
}

// Parse the data
const twoDArray = parseCSVTo2DArray(csvData);
console.log("2D Array:", twoDArray);

// Function to convert rows into objects
function transformRowsToObjects(twoDArray) {
  const [headerRow, ...dataRows] = twoDArray; // Destructure headers and data rows
  const headers = headerRow.map((header) => header.toLowerCase()); // Convert headers to lowercase

  return dataRows.map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
}

// Transform to array of objects
let dataObjects = transformRowsToObjects(twoDArray);
console.log("Array of Objects:", dataObjects);

// Remove the last element
dataObjects.pop();

// Insert a new object at index 1
dataObjects.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// Add a new object to the end
dataObjects.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
});

console.log("Modified Array:", dataObjects);

// Function to calculate average age
function calculateAverageAge(dataObjects) {
  let totalAge = 0;
  for (let i = 0; i < dataObjects.length; i++) {
    totalAge += parseInt(dataObjects[i].age, 10); // Convert age to integer and add to total
  }
  return (totalAge / dataObjects.length).toFixed(2); // Calculate and format average
}

// Calculate the average age
const averageAge = calculateAverageAge(dataObjects);
console.log("Average Age:", averageAge);
