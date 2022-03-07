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
  boredText.addEventListener("mousedown", updateActivity);
  boredText.addEventListener("mouseleave", initializeBoredText);
}

const updateActivity = () => fetch(CONFIG.API_URL).then(parseActivityField).then(renderActivity).catch(console.log);

const parseActivityField = async response => await response.json();

const renderActivity = json => document.getElementById(CONFIG.ELEMENT_ID).innerHTML = json[CONFIG.RESPONSE_FIELD].toLowerCase();

const initializeBoredText = async () => {
  let text = document.getElementById(CONFIG.ELEMENT_ID).innerHTML;
  text && !text.includes('😐') ? await showHappyCowboy() : setText(CONFIG.PLACEHOLDER);
}

const showHappyCowboy = async () => {
  setText(CONFIG.HAPPY_COWBOY);
  await waitASec();
  setText(CONFIG.PLACEHOLDER);
}

const setText = (text) => document.getElementById(CONFIG.ELEMENT_ID).innerHTML = text;

const waitASec = async () => await new Promise(resolve => setTimeout(resolve, 1500));
