//audio statr>>

  const bleep = new Audio('bleep.mp3');
  bleep.volume = 0.1;

//audio end >>


const content = document.getElementById("content");

//answer >>
const greetings = [
  'Not good , the have bad service .'
];

const loco = [
  'location detected . you are in europ . country , greece . city , athens .'
];

const chaco = [
  'checking message box . message box is empty.'
];

const namos = [
  'hello maria  from class 9'
];

const shoto = [
  'shut down active'
];

const logoto = [
  'welcome to Ai SErvice . here you can controle , edite or shut down sestem .'
];

const momin = [
  'Yes sir ?'
];

const notfu = [
  'Music On'
];
const dod = [
  'plaise wait'
];
const mazoi = [
  'music off'
];

//end

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

var pil = document.getElementById("ono");

recognition.onstart = function() {
  console.log('voice active');
 pil.style.borderColor = "red";

};

recognition.onresult = function(event) {
     const current = event.resultIndex;
     const transcript = event.results[current][0].transcript;
     content.textContent = transcript;
     readOutLoud(transcript);
     console.log(transcript);
};

//click enter for easy talk
window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key){
	if(key.keyCode == "13"){
    recognition.start();
    bleep.play();
	}
};
//end click enter for easy talk>>


//display div start >>
function mySesto() {
  document.getElementById("shopup").style.display = "block";
}

function mycloso() {
  document.getElementById("shopup").style.display = "none";
}
//display div  end <<


setInterval(function(){
  bleep.play();
  recognition.start(); 
    }, 1000);



function readOutLoud(message){
  
  const speech = new SpeechSynthesisUtterance();

  //const notFo = notfu[Math.floor(Math.random() * notfu.length)];
  document.getElementById("ono").style.borderColor = "blue";
 // speech.text = notFu;
 speech.text = 'm..';

if(message.includes("what do you think about cosmote")){
  const finalText = greetings[Math.floor(Math.random() * greetings.length)];
   speech.text = finalText;
}else if (message.includes("show my location")) {
  const myloco = loco[Math.floor(Math.random() * loco.length)];
  speech.text = myloco;
}else if (message.includes("check my message box")) {
  const boxa = chaco[Math.floor(Math.random() * chaco.length)];
  speech.text = boxa;
}else if (message.includes("say hi to Maria")) {
  const sayo = namos[Math.floor(Math.random() * namos.length)];
  speech.text = sayo;
}else if (message.includes("shut down")) {
  const shut = shoto[Math.floor(Math.random() * shoto.length)];
  speech.text = shut;
  setInterval(function(){
     window.close();
     }, 1000);
}else if (message.includes("login")) {
  const logino = logoto[Math.floor(Math.random() * logoto.length)];
  speech.text = logino;
  mySesto();
}else if (message.includes("close")) {
  mycloso();
  }else if (message.includes("Alex")) {
    const life = momin[Math.floor(Math.random() * momin.length)];
    speech.text = life;
    }else if (message.includes("change Style")) {
      var element = document.getElementById('eldo');
element.style.background = 'yellow';
      }else if (message.includes("play music")) {
        const mozaki = notfu[Math.floor(Math.random() * notfu.length)];
        speech.text = mozaki;
      var rolo = new Audio('relax.mp3');
        setInterval(function(){
          rolo.play();  
          return;      
          }, 2000);
        }else if (message.includes("stop music")) {
          const mozakq = mazoi[Math.floor(Math.random() * mazoi.length)];
        speech.text = mozakq;
          setInterval(function(){
            rolo.stop();    
            }, 100);
  }else if (message.includes("reload")) {
          speech.text = "plaise wait";
          window.body.reload();
          }else if (message.includes("show the date")) {
            speech.text = today;
            }else if (message.includes("show the time")) {
              speech.text = time ;
              }else if (message.includes("picture")) {
                picMe();
                }
             

      



  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
};

//date display >>
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
//end date display >>

//time >>
var time = new Date(new Date().getTime() + 4*60*60*1000).toLocaleString();
//time end >>



