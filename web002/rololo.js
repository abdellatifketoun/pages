const btn = document.getElementById("talk");
const content = document.getElementById("content");

//answer >>
const greetings = [
  'my name is A22 Bot',
  'AI smart robot',
  'serve humen and make there life easy'
];

const weather = [
'its 2/22/2020',
'located place athens greece'
];

//end

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('voice active');
};

recognition.onresult = function(event) {
     const current = event.resultIndex;
     const transcript = event.results[current][0].transcript;
     content.textContent = transcript;
     readOutLoud(transcript);
};

btn.addEventListener('click', () =>{


  recognition.start();

});



function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'i dont know';


if(message.includes("hello")){


  const finalText = greetings[Math.floor(Math.random() * greetings.length)];
   speech.text = finalText;
   
}


  speech.volume = 2;
  speech.rate = 1;
  speech.pitch = 7;

  window.speechSynthesis.speak(speech);
};




//try{


//}catch(e){


//}