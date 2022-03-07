const url = 'https://www.boredapi.com/api/activity';

const bored = () => {
  const textBody = document.createElement("p");
  textBody.setAttribute("class", "textField");
  document.getElementById("app").appendChild(textBody);
  const processResponse = async r => await r.json().then(json => textBody.innerHTML = json['activity']);
  const showText = () => fetch(url)
      .then(response => processResponse(response))
      .catch(error => console.log(error));
  const clearText = () => textBody.innerHTML = "Bored?";
  clearText();
  textBody.addEventListener("mousedown", showText);
  textBody.addEventListener("mouseout", clearText);
}
