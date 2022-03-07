const scripts = ['bored.js', 'config.js'];
let loadedCnt = 0;

const loadScripts = (urls, onloadCallback) => {
  urls.forEach(url => {
    let script = document.createElement('script');
    script.src = url;
    script.onload = onloadCallback
    document.head.appendChild(script);
  });
}

const onloadCallback = () => {
  if (++loadedCnt === scripts.length) bored(document.getElementById(CONFIG.APP_ELEMENT_ID));
}

loadScripts(scripts, onloadCallback)
