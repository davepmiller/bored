let loadScript = (url, onloadCallback) => {
  let script = document.createElement('script');
  script.src = url;
  script.onload = onloadCallback
  document.head.appendChild(script);
}

let onloadCallback = () => {
  bored();
}

loadScript('bored.js', onloadCallback)
