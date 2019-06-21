/**
 * - Fix: Switching from Illustrations shows 3rd picture instead of 1st
 * - add search bar for name/latin search
 * - show all the flowers
 * - show all the fruits
 * - show all the leaves
 * - add wiki icon and make it the link to wikipedia
 * - add info on flowering/fruiting to the data and show the plants accordingly to what they do in the current month
 */

let showIllustrations = 0; // Show illustrations (1) or photographs (0) as default picture

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
      <a href="${
        plants[i].url
      }" target="_blank" rel="noopener"><p class="card-text">
        ${plants[i].name}</a> (${plants[i].count})<br>
        <h4>${plants[i].latin}</h4>
      ${plants[i].familie} (${plants[i].famLat})
      </p>`;

    card.appendChild(cardBody);
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

  if (indexImage) {
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

/* Initial Load */
showPlants();
