// document.getElementById('fetchButton').addEventListener('click', getData);

// async function getData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Public API endpoint
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     displayData(data);
//   } catch (error) {
//     console.error('There was a problem with the fetch operation:', error);
//   }
// }

// function displayData(data) {
//   const dataContainer = document.getElementById('dataContainer');
//   dataContainer.innerHTML = '';

//   data.forEach(item => {
//     const itemDiv = document.createElement('div');
//     itemDiv.classList.add('item');
//     itemDiv.innerHTML = `
//       <p><strong>ID:</strong> ${item.id}</p>
//       <p><strong>Title:</strong> ${item.title}</p>
//       <p><strong>Body:</strong> ${item.body}</p>
//     `;
//     dataContainer.appendChild(itemDiv);
//   });
// }

document.getElementById('fetchButton').addEventListener('click', getData);

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Public API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayData(data) {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = '';

  // Slice the data to get only the first two records
  const limitedData = data.slice(0, 2);

  limitedData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Title:</strong> ${item.title}</p>
      <p><strong>Body:</strong> ${item.body}</p>
    `;
    dataContainer.appendChild(itemDiv);
  });
}

