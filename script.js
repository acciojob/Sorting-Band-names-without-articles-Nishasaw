//your code h
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith', 'The Rolling Stones'];

// Function to remove articles from a band name
function removeArticles(name) {
  return name.replace(/^(the|a|an)\s+/i, ''); // Case-insensitive regex to match articles at the beginning of the string and remove them
}

// Sort the band names without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase(); // Convert to lowercase for case-insensitive sorting
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Get the ul element with id 'band'
const ulElement = document.getElementById('band');

// Iterate through the sorted band names and add them to the ul as li elements
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});


