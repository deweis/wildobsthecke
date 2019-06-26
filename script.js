/**
 * - Create helper function to filter plants and remove the duplicate from search/famNameFilter
 * - Add lazy load
 * - Add webp images
 * - sort plants (in db) by family / latin name asc
 * - show all the flowers
 * - show all the fruits
 * - show all the leaves
 * - add wiki icon and make it the link to wikipedia
 * - add info on flowering/fruiting to the data and show the plants accordingly to what they do in the current month
 *   resp. button to show the respective picture according to what they do now...
 */

let showIllustrations = 0; // Show illustrations (1) or photographs (0) as default picture
let filtered = 0;

/**************************************************************************************************
 * Add one card per entry in plants object
 */
function showPlants() {
  const plantsList = document.getElementById('plants-list');

  for (let i = 0; i < plants.length; i++) {
    const plantId = generateId(plants[i].latin);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', plantId);
    plantsList.appendChild(card);

    /****************
     * Add the image
     */
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', `img/${plants[i].img[showIllustrations]}`);
    cardImage.setAttribute('class', 'card-img-top');
    cardImage.setAttribute('alt', `${plants[i].latin}`);

    // switch to the next image upon click
    cardImage.addEventListener('click', function() {
      return nextImage(plantId, this);
    });

    card.appendChild(cardImage);

    /****************
     * Add card body
     */
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.innerHTML = `
      <h4>${plants[i].latin}</h4>
      <a href="${plants[i].url}" target="_blank" rel="noopener">
      <p class="card-text mb-0">
        ${plants[i].name}</a> (${plants[i].count})<br ><br >
      </p>`;

    card.appendChild(cardBody);

    const familyName = document.createElement('div');
    familyName.setAttribute('class', 'family-name');

    familyName.innerHTML = `
      ${plants[i].familie} (${plants[i].famLat})
    `;

    familyName.addEventListener('click', function() {
      filterFamily(this.innerText);
    });

    cardBody.appendChild(familyName);
  }
}

/**************************************************************************************************
 * Helper Function to generate an ID based on the plants latin name
 */

function generateId(str) {
  let res = str
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return res.charAt(0).toLowerCase() + res.substring(1);
}

/**************************************************************************************************
 * Helper Function to get the next image of the array of images per plant
 * I.e. loop through the array
 */
function nextImage(plantId, imageDiv, indexImage) {
  const imageSrc = imageDiv.src; // get the current image source
  const myRegexp = /img\/(.*)/;
  const imgName = myRegexp.exec(imageSrc)[1]; // extract the img name from the full source
  const thePlantImages = plants.find(x => generateId(x.latin) === plantId).img;

  let nextImg = thePlantImages.findIndex(x => x === imgName); // get the next image from the plants images

  if (indexImage === 1 || indexImage === 0) {
    nextImg = indexImage;
  } else {
    nextImg = nextImg === thePlantImages.length - 1 ? 0 : nextImg + 1; // start from the first again if at last
  }

  return (imageDiv.src = `img/${thePlantImages[nextImg]}`);
}

/**************************************************************************************************
 * Change Pictures to illustrations and vice versa upon title click
 */
document
  .querySelector('.btn-illustrations')
  .addEventListener('click', function() {
    showIllustrations = showIllustrations === 0 ? 1 : 0; // Change default of picture type shown
    const imageNodes = document.querySelectorAll('.card-img-top');

    imageNodes.forEach(node => {
      nextImage(node.parentNode.id, node, showIllustrations);
    });
  });

/**************************************************************************************************
 * The Plant Search
 */
function showSearchResults(plantName) {
  const regExp = new RegExp(plantName, 'gi');

  // Clear the fam-Name filter if applied
  if (filtered === 1) {
    filtered = 0;

    document.querySelectorAll('.family-name').forEach(plant => {
      plant.classList.remove('fam-filtered');
    });
  }

  // Filter the plants that match either the german or latin name
  let filteredPlants = plants
    .filter(plant => plant.name.match(regExp) || plant.latin.match(regExp))
    .map(plant => generateId(plant.latin));

  // Hide the plants not matching
  document.querySelectorAll('.card').forEach(plant => {
    filteredPlants.includes(plant.id)
      ? plant.classList.remove('hide-plant')
      : plant.classList.add('hide-plant');
  });
}

/* Remove focus from the text input on enter click */
document
  .querySelector('#text-search')
  .addEventListener('keyup', function(event) {
    // Cancel the default action, if needed
    event.preventDefault();

    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the search button with a click
      this.blur();
    }
  });

/**************************************************************************************************
 * Filter by Family Name
 */
function filterFamily(fam) {
  if (filtered === 0) filtered = 1;
  else {
    return removeFilter();
  }

  // Clear text-input if filled
  let textField = document.querySelector('#text-search');
  textField.value = '';

  // Filter the plants that match the family name
  let filteredPlants = plants
    .filter(plant => plant.familie === fam.split(' ')[0])
    .map(plant => generateId(plant.latin));

  // Hide the plants not matching
  document.querySelectorAll('.card').forEach(plant => {
    filteredPlants.includes(plant.id)
      ? plant.classList.remove('hide-plant')
      : plant.classList.add('hide-plant');
  });

  document.querySelectorAll('.family-name').forEach(plant => {
    plant.classList.add('fam-filtered');
  });
}

/* Helper Function to remove the filter again*/
function removeFilter() {
  filtered = 0;

  document.querySelectorAll('.card').forEach(plant => {
    plant.classList.remove('hide-plant');
  });

  document.querySelectorAll('.family-name').forEach(plant => {
    plant.classList.remove('fam-filtered');
  });
}

/**************************************************************************************************
 * Scroll to Top Button - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
 */

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('#btnScrollTop').style.display = 'block';
  } else {
    document.querySelector('#btnScrollTop').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
document.querySelector('#btnScrollTop').addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Listen for scrolls
window.onscroll = function() {
  scrollFunction();
};

/**************************************************************************************************
 * Load the page
 */
showPlants();
