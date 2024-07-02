// // Adding an event listener to the button with the id 'fetchButton'
// // When the button is clicked, it will trigger the getData function
// document.getElementById('fetchButton').addEventListener('click', getData);

// // Defining an asynchronous function to fetch data from an API
// async function getData() {
//   try {
//     // Making a fetch request to the specified API endpoint
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Public API endpoint
    
//     // Checking if the response status is OK (status code 200-299)
//     if (!response.ok) {
//       // If the response is not OK, throwing an error
//       throw new Error('Network response was not ok');
//     }
    
//     // Parsing the response data as JSON
//     const data = await response.json();
    
//     // Calling the displayData function to display the fetched data on the webpage
//     displayData(data);
//   } catch (error) {
//     // Catching any errors that occur during the fetch operation and logging them to the console
//     console.error('There was a problem with the fetch operation:', error);
//   }
// }

// // Defining a function to display the fetched data on the webpage
// function displayData(data) {
//   // Getting the container element where the data will be displayed
//   const dataContainer = document.getElementById('dataContainer');
  
//   // Clearing any existing content in the data container
//   dataContainer.innerHTML = '';
  
//   // Iterating through each item in the fetched data array
//   data.forEach(item => {
//     // Creating a new div element for each item
//     const itemDiv = document.createElement('div');
//     // Adding a CSS class to the new div element
//     itemDiv.classList.add('item');
    
//     // Setting the inner HTML of the new div element to display the item's details
//     itemDiv.innerHTML = `
//       <p><strong>ID:</strong> ${item.id}</p>
//       <p><strong>Title:</strong> ${item.title}</p>
//       <p><strong>Body:</strong> ${item.body}</p>
//     `;
    
//     // Appending the new div element to the data container
//     dataContainer.appendChild(itemDiv);
//   });
// }


// Add an event listener to the button with ID 'fetchButton' to trigger the getData function when clicked
document.getElementById('fetchButton').addEventListener('click', getData);

// Asynchronous function to fetch data from a public API endpoint
async function getData() {
  try {
    // Make a GET request to the specified API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Public API endpoint
    // Check if the response is okay (status is in the range 200-299)
    // if (!response.ok) {
    //   throw new Error('Network response was not ok'); // Throw an error if the response is not okay
    // }
    // Parse the response body as JSON
    const data = await response.json();
    // Call the displayData function to handle the fetched data
    displayData(data);
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Function to display the fetched data in the HTML element with ID 'dataContainer'
function displayData(data) {
  // Get the HTML element with ID 'dataContainer'
  const dataContainer = document.getElementById('dataContainer');
  // Clear any existing content in the data container
  dataContainer.innerHTML = '';

  // Slice the data array to get only the first two records
  const limitedData = data.slice(0, 2);

  // Iterate over the limited data array and create HTML elements for each item
  limitedData.forEach(item => {
    // Create a new div element for each item
    const itemDiv = document.createElement('div');
    // Add a class 'item' to the div element
    itemDiv.classList.add('item');
    // Set the inner HTML of the div element to display the item's ID, title, and body
    itemDiv.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Title:</strong> ${item.title}</p>
      <p><strong>Body:</strong> ${item.body}</p>
    `;
    // Append the div element to the data container
    dataContainer.appendChild(itemDiv);
  });
}


