window.addEventListener('click', function(e){

const target = document.querySelector('.scroll');

target.style.color = 'red';
target.style.background ='white';


});

document.addEventListener('click', function(e){

    const chang = document.querySelector('.text');
    
    
    chang.style.opacity ='0.9';
    
    
    });
    document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("pio").innerHTML = "12:65";
}

