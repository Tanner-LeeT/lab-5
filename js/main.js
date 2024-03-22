/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavouriteGame(game);
    renderFavouriteList();
  });

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });

  document.addEventListener('DOMContentLoaded', function () {
    let videoGameForm = document.getElementById('video-game-form');
    let allGameListItems = document.querySelectorAll('.all-games li');

    // Event listener for form submission
    videoGameForm.addEventListener('submit', function (event) {
      event.preventDefault();
      let platform = videoGameForm.elements['platform-family'].value;
      filterGames(platform);
    });

    function filterGames(platform) {
      allGameListItems.forEach(function (item) {
        if (item.innerText.includes(platform)) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      });
    }
  });

  function renderFavouriteList() {
    let myGamesList = document.querySelector('.my-favourite-games');
    myGamesList.innerHTML = '';

    myGames.forEach(game => {
      myGamesList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
  }

  function addToFavouriteGame(game) {
    myGames.push(game);
    console.log(myGames);
  }

  function removeFromFavouriteGames(game){
    let index = myGames.indexOf(game);
    myGames.splice(index, 1);
    renderFavouriteList();
  }
})();
