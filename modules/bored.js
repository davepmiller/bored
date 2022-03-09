import config from "./config.js";

const bored = (parent) => {
  const boredText = createDomElement();
  parent.appendChild(boredText);
  initializeBoredText().then(initializeEvents);
}

const createDomElement = () => {
  const boredText = document.createElement("p");
  boredText.setAttribute("class", config.ELEMENT_ID);
  boredText.setAttribute("id", config.ELEMENT_ID);
  return boredText;
}

const initializeEvents = () => {
  const boredText = document.getElementById(config.ELEMENT_ID);
  boredText.addEventListener(config.UPDATE_EVENT, updateActivity);
  boredText.addEventListener(config.REFRESH_EVENT, initializeBoredText);
}

const updateActivity = () => fetch(config.API_URL).then(parseActivityField).then(renderActivity).catch(console.log);

const parseActivityField = async response => await response.json();

const renderActivity = json => setText(json[config.RESPONSE_FIELD].toLowerCase());

const initializeBoredText = async () => {
  getText() && !getText().includes('😐') ? await showHappyCowboy() : setText(config.PLACEHOLDER);
}

const showHappyCowboy = async () => {
  setText(config.HAPPY_COWBOY);
  await waitASec();
  if (getText().includes('🤠')) setText(config.PLACEHOLDER);
}

const getText = () => document.getElementById(config.ELEMENT_ID).innerHTML;

const setText = (text) => document.getElementById(config.ELEMENT_ID).innerHTML = text;

const wait = (resolve) => setTimeout(resolve, config.WAIT_INTERVAL);

const waitASec = async () => await new Promise(wait);

export default bored;
