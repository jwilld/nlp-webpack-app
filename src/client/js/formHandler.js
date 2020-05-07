import { checkForName } from "./nameChecker";
function handleSubmit(event) {
  event.preventDefault();

//   check what text was put into the form field
  let formText = document.getElementById("url").value;
  checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8080/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    }).catch(e => e)
}

export { handleSubmit };
