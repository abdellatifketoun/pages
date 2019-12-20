// Set the color of the <h1> to a different color
document.querySelector('h1').style.color = "green";

const listDiv = document.querySelector('.container');
const listOl = listDiv.querySelector('ol');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listOl.children;

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'upButton';
  up.textContent = 'Up';
  li.appendChild(up);
  let down = document.createElement('button');
  down.className = 'downButton';
  down.textContent = 'Down';
  li.appendChild(down);
  let remove = document.createElement('button');
  remove.className = 'removeButton';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}
for(let i=0; i<lis.length; i+=1) {
  attachListItemButtons(lis[i]);
}
// adds a new item on the To Do List
addItemButton.addEventListener('click', () => {
  let ol = document.getElementsByTagName('ol')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ol.appendChild(li);
  addItemInput.value = '';
});

// clicking the buttons
listOl.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON'){
    if (event.target.className == 'removeButton') {
      let li = event.target.parentNode;
      let ol = li.parentNode;
      ol.removeChild(li);
    }
    if (event.target.className == 'upButton') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ol = li.parentNode;
      if (prevLi) { ol.insertBefore(li, prevLi); }
    }
    if (event.target.className == 'downButton') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ol = li.parentNode;
      if (nextLi) { ol.insertBefore(nextLi, li); }
    }
  }
});
