const url = 'https://www.boredapi.com/api/activity';

let bored = () => {
  const textBody = document.createElement("p");
  textBody.setAttribute("class", "textField");
  document.getElementById("app").appendChild(textBody);
  let processResponse = async r => await r.json().then(json => textBody.innerHTML = json['activity']);
  let showText = () => fetch(url)
      .then(response => processResponse(response))
      .catch(error => console.log(error));
  let clearText = () => {
    textBody.innerHTML = "Bored?";
  }
  clearText();
  textBody.addEventListener("mousedown", showText);
  textBody.addEventListener("mouseout", clearText);
}
