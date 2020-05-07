import { checkForName } from "./nameChecker";

const handleSubmit = async (event) => {
  event.preventDefault();

  //   check what text was put into the form field
  let formText = document.getElementById("url").value;
  checkForName(formText);
  console.log(formText)

  console.log("::: Form Submitted :::");
  const result = await fetch("http://localhost:8080/sentiment",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      url:formText
    })
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));

  console.log(result);
  document.querySelector(".text-content").innerText = result.text
  document.querySelector(".polarity-result").innerText = result.polarity
  document.querySelector(".subjectivity-result").innerText = result.subjectivity
  document.querySelector(".polarity-confidence").innerText = result.polarity_confidence
  document.querySelector(".subjectivity-confidence").innerText = result.subjectivity_confidence.toFixed(1)
};

export { handleSubmit };
