/**
 * - add functionality to show all illustrations of the plants
 * - add search bar for name/latin search
 * - show all the flowers
 * - show all the fruits
 * - show all the leaves
 */

/* Function to add one card per entry in plants object */
function showPlants() {
  const plantsList = document.getElementById('plants-list');

  for (let i = 0; i < plants.length; i++) {
    const plantId = generateId(plants[i].latin);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', plantId);
    plantsList.appendChild(card);

    /********************************************************
     * Add the image
     */
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', `img/${plants[i].img[0]}`);
    cardImage.setAttribute('class', 'card-img-top');
    cardImage.setAttribute('alt', `${plants[i].latin}`);

    // switch to the next image upon click
    cardImage.addEventListener('click', function() {
      console.log('clicked image: ', plantId);
      console.log(this);
      return nextImage(plantId, this);
    });

    card.appendChild(cardImage);

    /********************************************************
     * Add card body
     */
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.innerHTML = `
      <a href="${
        plants[i].url
      }" target="_blank" rel="noopener"><p class="card-text">
        ${plants[i].name}</a> (${plants[i].count}) - <strong>${
      plants[i].latin
    }</strong>
      </p>`;

    card.appendChild(cardBody);

    /********************************************************
     * Add the image
     */

    /*card.innerHTML = `
      <div class="card">
        <a href="${plants[i].url}" target="_blank" rel="noopener">
          <img
            src="img/${plants[i].img[0]}"
            class="card-img-top"
            alt="${plants[i].latin}"
          />
        </a>
        <div class="card-body">
          <p class="card-text">
          ${plants[i].name} (${plants[i].count})
            <br />
            <strong>${plants[i].latin}</strong>
          </p>
        </div>
      </div>`;*/
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
 * Helper Function to get next image of the array of images per plant
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

showPlants();
