import { urlCheck } from "./urlChecker";

const fetchSet = (event) => {
  event.preventDefault();

  const urlPlaceholder = document.getElementById("url")
  const form = document.querySelector('.url-form')

  //   check what text was put into the form field
  let formText = document.getElementById("url").value;

  if(urlCheck(formText) === true){
    const result = fetch("http://localhost:8080/sentiment",{
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
      .catch((e) => console.log('error',e));
  
    const confidenceText = "confidence of "
    urlPlaceholder.setAttribute('placeholder','URL')
    document.querySelector(".text-content").innerText = result.text
    document.querySelector(".polarity-result").innerText = result.polarity
    document.querySelector(".subjectivity-result").innerText = result.subjectivity
    document.querySelector(".polarity-confidence").innerText = confidenceText + result.polarity_confidence
    document.querySelector(".subjectivity-confidence").innerText = confidenceText + result.subjectivity_confidence.toFixed(1)
  }
  else{
    urlPlaceholder.setAttribute('placeholder','INVALID URL')
  }
  form.reset()
  
};

export { fetchSet };
