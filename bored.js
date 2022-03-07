const API_URL = 'https://www.boredapi.com/api/activity';
const BORED_TEXT_ID = 'boredText';
const BORED_TEXT_INITIAL_VALUE = 'Bored?';

const bored = () => {
  const boredText = document.createElement("p");
  boredText.setAttribute("class", BORED_TEXT_ID);
  boredText.setAttribute("id", BORED_TEXT_ID);
  document.getElementById("app").appendChild(boredText);
  initializeBoredText();
  setEvents();
}

const setEvents = () => {
  const boredText = document.getElementById(BORED_TEXT_ID);
  const parseActivityField = async r => await r.json().then(json => boredText.innerHTML = json['activity']);
  const showActivity = () => fetch(API_URL)
      .then(response => parseActivityField(response))
      .catch(error => console.log(error));
  boredText.addEventListener("mousedown", showActivity);
  boredText.addEventListener("mouseout", initializeBoredText);
}

const initializeBoredText = () => {
  document.getElementById(BORED_TEXT_ID).innerHTML = BORED_TEXT_INITIAL_VALUE;
}
