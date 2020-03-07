var bot =  document.getElementById('numbone');
var btn = document.getElementById("check");

var score = 0;


//

//
function dely(){
    if(score == 5){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point GOOD JOB ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node); 
        
    }else if(score == 1){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point NICE TRY ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node);
        return;
    }else if(score == 10){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point HOT GAME ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node); 
        return;
    }else if(score == 2){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point TRY HARD ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node); 
        return;
    }else if(score == 7){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point CLOSE .. ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node); 
        return;
    }else{
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + "Point You Are The Boss.. ||"); 
        node.appendChild(textnode); 
         document.getElementById("home3").appendChild(node); 
    }
};


function low(){
    if(score == 0){
        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode( " + " + score + " Point LOSER .. ||"); 
        node.appendChild(textnode); 
        document.getElementById("home3").appendChild(node); 
        
    }
};


function delo() {
    quantity.value = "";
  }


btn.addEventListener("click", function (){
  
    quantity.onfocus = function() {delo()};
   
    var lucky = document.getElementById("quantity").value;

   var resolota = bot.innerHTML = Math.floor(Math.random() *  100);
   var resolta = document.getElementById("rosi").innerHTML = lucky;  
 



   console.log(resolota)
   console.log(resolta);
   console.log(score);


       if 
       (resolta == resolota){
        console.log('You Win');

        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode("you Win " + " ( " + resolota + " / " + resolta + " ) "); 
        node.appendChild(textnode); 
        document.getElementById("home").appendChild(node);
        document.getElementById("score").innerHTML ="Your Score : " + score++;
        btn.style.color = "green";
        setInterval(function(){ btn.style.color = "black"; }, 3000);
        dely();
        node.style.color = "green";

    }
    else
    {
        console.log('You Lose');

        var node = document.createElement("p"); 
        var textnode =  
            document.createTextNode("you Lose " + " ( " + resolota + " / " + resolta + " ) "); 
        node.appendChild(textnode); 
        document.getElementById("home").appendChild(node); 
       document.getElementById("score").innerHTML ="Your Score : " + score;
       btn.style.color = "red";
       setInterval(function(){ btn.style.color = "black"; }, 3000);
       node.style.color = "red";
       low();
 

 }

 

});


    







//window.addEventListener("keypress", checkKeyPress, false);

//function checkKeyPress(key){
//	if(key.keyCode == "13"){

//	}
//}