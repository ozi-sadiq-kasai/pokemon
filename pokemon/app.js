// things to do
// scale pokemon
// mouse movement on image
// computer say name
// on click make image background change color


// pikachu
document.querySelector('#pikachu').addEventListener('click',run)
let pikImage = document.querySelector('#pik')
function run(){
  let pika = document.querySelector('#pikachu').innerText
  let msg = new SpeechSynthesisUtterance();
  msg.text = pika
  window.speechSynthesis.speak(msg);
  pikImage.classList.toggle("hidden")
}


;
