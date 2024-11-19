// Input CSV string
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Parse CSV into a 2D array
function parseCSVToArray(csv) {
  const rows = csv.split("\n");
  const result = rows.map((row) => row.split(",").map((cell) => cell.trim()));
  return result;
}

// Cache the result
const csvArray = parseCSVToArray(csvData);
console.log("Two-Dimensional Array:", csvArray);

// Convert rows into objects
function transformToObjects(array) {
  const [headers, ...rows] = array;
  return rows.map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.toLowerCase()] = row[index];
    });
    return obj;
  });
}

// Transform the 2D array into an array of objects
const dataObjects = transformToObjects(csvArray);
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
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("Modified Array:", dataObjects);

// Calculate the average age
function calculateAverageAge(data) {
  let totalAge = 0;
  data.forEach((obj) => {
    totalAge += parseInt(obj.age, 10);
  });
  return (totalAge / data.length).toFixed(1);
}

const averageAge = calculateAverageAge(dataObjects);
console.log("Average Age:", averageAge);

// Transform data back into CSV
function convertToCSV(objects) {
  const headers = Object.keys(objects[0]).join(",");
  const rows = objects.map((obj) => Object.values(obj).join(","));
  return [headers, ...rows].join("\n");
}

const finalCSV = convertToCSV(dataObjects);
console.log("Final CSV:\n", finalCSV);
