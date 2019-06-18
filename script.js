function showPlants() {
  const plantsList = document.getElementById('plants-list');

  /* Add one card per entry in plants object */
  for (let i = 0; i < plants.length; i++) {
    const card = document.createElement('div');
    card.setAttribute('class', 'plant');
    card.setAttribute('id', generateId(plants[i].latin));

    card.innerHTML = `
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
      </div>`;

    plantsList.appendChild(card);
  }
}

/* Helper Function to generate an ID based on the plants latin name */
function generateId(str) {
  let res = str
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return res.charAt(0).toLowerCase() + res.substring(1);
}

showPlants();
