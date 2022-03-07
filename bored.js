const bored = (parent) => {
  const boredText = createDomElement();
  parent.appendChild(boredText);
  initializeBoredText().then(initializeEvents);
}

const createDomElement = () => {
  const boredText = document.createElement("p");
  boredText.setAttribute("class", CONFIG.ELEMENT_ID);
  boredText.setAttribute("id", CONFIG.ELEMENT_ID);
  return boredText;
}

const initializeEvents = () => {
  const boredText = document.getElementById(CONFIG.ELEMENT_ID);
  boredText.addEventListener(CONFIG.UPDATE_EVENT, updateActivity);
  boredText.addEventListener(CONFIG.REFRESH_EVENT, initializeBoredText);
}

const updateActivity = () => fetch(CONFIG.API_URL).then(parseActivityField).then(renderActivity).catch(console.log);

const parseActivityField = async response => await response.json();

const renderActivity = json => setText(json[CONFIG.RESPONSE_FIELD].toLowerCase());

const initializeBoredText = async () => {
  getText() && !getText().includes('😐') ? await showHappyCowboy() : setText(CONFIG.PLACEHOLDER);
}

const showHappyCowboy = async () => {
  setText(CONFIG.HAPPY_COWBOY);
  await waitASec();
  if (getText().includes('🤠')) setText(CONFIG.PLACEHOLDER);
}

const getText = () => document.getElementById(CONFIG.ELEMENT_ID).innerHTML;

const setText = (text) => document.getElementById(CONFIG.ELEMENT_ID).innerHTML = text;

const wait = (resolve) => setTimeout(resolve, CONFIG.WAIT_INTERVAL);

const waitASec = async () => await new Promise(wait);
