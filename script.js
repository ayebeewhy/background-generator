var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


// Exercise 1) "Write code so that the colour inputs match the background generated on the first page load."
color1.value = "#ff0000";
color2.value = "#ffff00";

// Exercise 2) "Display the initial CSS linear gradient property on page load."
css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";





function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);




// Exercise 3) "Add a random button which generates two random numbers for the colour inputs."

// go over this at some point to understand
function getRandomColorHex() {
    const colorLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors() {
    color1.value = getRandomColorHex();
    color2.value = getRandomColorHex();
    setGradient();
}

random.addEventListener("click", changeColors);















