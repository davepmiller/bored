const loadScript = (url, onloadCallback) => {
  const script = document.createElement('script');
  script.src = url;
  script.onload = onloadCallback
  document.head.appendChild(script);
}

const onloadCallback = () => bored(document.getElementById("app"));

loadScript('bored.js', onloadCallback)
