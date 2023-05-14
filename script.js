//your JS code here. If required.
// Select the table element in the DOM
const table = document.querySelector('table');

// Create an array of three promises
const promises = [
  createPromise(),
  createPromise(),
  createPromise()
];

// Add a loading row to the table
const loadingRow = createRow('Loading...');
table.appendChild(loadingRow);

// Use Promise.all() to wait for all promises to resolve
Promise.all(promises)
  .then(results => {
    // Remove the loading row
    table.removeChild(loadingRow);

    // Populate the table with the results
    results.forEach((time, index) => {
      const row = createRow(`Promise ${index + 1}`, `${time.toFixed(3)}`);
      table.appendChild(row);
    });

    // Calculate and display the total time taken
    const totalTime = results.reduce((sum, time) => sum + time, 0);
    const totalRow = createRow('Total', `${totalTime.toFixed(3)}`);
    table.appendChild(totalRow);
  });

// Helper function to create a promise with a random timeout
function createPromise() {
  return new Promise(resolve => {
    const timeout = Math.random() * 2000 + 1000;
    setTimeout(() => {
      resolve(timeout / 1000);
    }, timeout);
  });
}

// Helper function to create a table row with cells
function createRow(column1Text, column2Text) {
  const row = document.createElement('tr');
  const column1 = document.createElement('td');
  const column2 = document.createElement('td');
  column1.textContent = column1Text;
  column2.textContent = column2Text || '';
  row.appendChild(column1);
  row.appendChild(column2);
  return row;
}
