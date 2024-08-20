var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    // Selecting the drum buttons and adding event listeners for both click and touchstart
    var drumButton = document.querySelectorAll(".drum")[i];
    
    // Add click event listener
    drumButton.addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; // Correct property name
        console.log("Button clicked: " + buttonInnerHTML); // Log for debugging
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    // Add touchstart event listener
    drumButton.addEventListener("touchstart", function() {
        var buttonInnerHTML = this.innerHTML;
        console.log("Button touched: " + buttonInnerHTML); // Log for debugging
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(e) {
    console.log("Key pressed: " + e.key); // Log for debugging
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log("Unrecognized key: " + key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    } else {
        console.log("No button found for key: " + currentKey);
    }
}
