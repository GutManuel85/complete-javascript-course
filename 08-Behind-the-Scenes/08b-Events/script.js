
function clickMe() {
    console.log('clicked');
}

function hoverMe() {
    console.log('hovered')
}

const input = document.getElementById('input').innerHTML;
const button = document.getElementById('button1');


//Wichtig: hier die Funktion nicht aufrufen, sondern ohne Klammern als Eventhandler zuweisen.
button.onclick = clickMe;
button.onmouseover = hoverMe;