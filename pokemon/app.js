// things to do
// scale pokemon
// computer say name
// on click make image background change color


// pikachu
document.querySelector('#pikachu').addEventListener('click',run)
// let pikImage = document.querySelector('#pik')

function run(){
  let pika = document.querySelector('#pikachu').innerText
  let msg = new SpeechSynthesisUtterance();
  msg.text = pika
  window.speechSynthesis.speak(msg);
  // pikImage.classList.toggle("hidden")
 

  // background display
  document.querySelector('body').style.background = "gray"
  ;
  document.querySelector('body').style.backgroundImage= 'url("https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0016.gif")'; 
  
}

// charmander
// document.querySelector('#charmander').addEventListener('click',run)
// // let charImage = document.querySelector('#char')
// function run(){
//   let char = document.querySelector('#charmander').innerText
//   let msg = new SpeechSynthesisUtterance();
//   msg.text = char
//   window.speechSynthesis.speak(msg);
//   // charImage.classList.toggle("hidden")

//   // background display
//   document.querySelector('body').style.background = "gray";
//   document.querySelector('body').style.backgroundImage= 'url("https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0007.gif")'; 
  
// }



