const API_URL = 'https://www.boredapi.com/api/activity';
const ELEMENT_ID = 'boredText';
const PLACEHOLDER = "<span class='innerHTML'>😐</span>";
const HAPPY_COWBOY = "<span class='innerHTML'>✨🤠🤌</span>";
const RESPONSE_FIELD = 'activity';

const bored = (parent) => {
  const boredText = createDomElement();
  parent.appendChild(boredText);
  initializeBoredText().then(initializeEvents);
}

const createDomElement = () => {
  const boredText = document.createElement("p");
  boredText.setAttribute("class", ELEMENT_ID);
  boredText.setAttribute("id", ELEMENT_ID);
  return boredText;
}

const initializeEvents = () => {
  const boredText = document.getElementById(ELEMENT_ID);
  boredText.addEventListener("mousedown", updateActivity);
  boredText.addEventListener("mouseout", initializeBoredText);
}

const updateActivity = () => fetch(API_URL).then(parseActivityField).then(renderActivity).catch(console.log);

const parseActivityField = async response => await response.json();

const renderActivity = json => document.getElementById(ELEMENT_ID).innerHTML = json[RESPONSE_FIELD].toLowerCase();

const initializeBoredText = async () => {
  let text = document.getElementById(ELEMENT_ID).innerHTML;
  text ? await showHappyCowboy() : setText(PLACEHOLDER);
}

const showHappyCowboy = async () => {
  setText(HAPPY_COWBOY);
  await waitASec();
  setText(PLACEHOLDER);
}

const setText = (text) => document.getElementById(ELEMENT_ID).innerHTML = text;

const waitASec = async () => await new Promise(resolve => setTimeout(resolve, 1500));
