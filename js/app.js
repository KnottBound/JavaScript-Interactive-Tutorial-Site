//The Document is an Object. The Write is a Method write().
document.write("<h2>This was written in JavaScript<h2>");
function makeYellow() {
    // This is a simple function named 'makeYellow'.
    
    // 'document' is the global object representing the HTML document in the browser.
    // 'getElementById' is a method of 'document' that returns a reference to the element by its ID.
    // 'style' is a property of the HTML element that allows us to change its inline CSS styles.
    // 'color' is a property of the 'style' object representing the text color of the element.
    // 'yellow' is the value we're assigning to the 'color' property, changing the text color to yellow.
    document.getElementById('event').style.color ='yellow';
}

function makeGreen () {
    document.getElementById('event').style.color ='green';
}

// Creating Get JS Button 'js-button' from DOM, Add Event Listener with Event Listener 'Click' and Event Handler Method jsBtnClick() ,
document.getElementById('js-button').addEventListener('click', jsBtnClick = () => {
    document.getElementById('js-button').style.backgroundColor ='green';
})


let day = 1;
let text = " Day "
let x = " or "

document.getElementById('variables').addEventListener('click', printString = () => {
    document.getElementById('variable-js-example').innerHTML = text + day + x + day + text;
})