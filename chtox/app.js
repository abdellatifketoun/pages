
    var sock = new WebSocket("ws://localHost:5001");
    
    var log = document.getElementById('log');
    
    var name = prompt('Your Name Here .. ?');
    
    
    sock.onopen = function(){
    
        sock.send(JSON.stringify({
          type: "name",
          data: name
    
        }));
    
    }
    
    
    sock.onmessage = function(event) {
        console.log(event);
        var json = JSON.parse(event.data);
       log.innerHTML += json.name+": "+json.data+"<br>";
        //log.innerHTML += event.data+"<br>";
    }
    
    document.getElementById("myBtn").addEventListener("click", function(){
    var text = document.getElementById('text').value;
    //sock.send(text);
    
    sock.send(JSON.stringify({
    
    type: "message",
    data: text
    
    }));
    
    log.innerHTML += "You: "+text+"<br>";
    
    });
    
    