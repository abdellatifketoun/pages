var objPeople = [
	{
		username: "admin",
		password: "admin"
	},
	{
		username: "abdo",
		password: "abdo"
	}
]

function getInfo() {
	var username = document.getElementById("username").value
    var password = document.getElementById("password").value

     for(i = 0; i < objPeople.length; i++){
		 if(username == objPeople[i].username && password == objPeople[i].password){
			
			document.getElementById("home").style.backgroundColor = "green";


			setTimeout( function(){
				document.getElementById('admi').style.display = 'block';
				  }, 1000 );

		 return
		}
	 }

	 document.getElementById("home").style.backgroundColor = "red";

	 document.getElementById('aler').style.display = 'block';
}

//acccec display end >.>


