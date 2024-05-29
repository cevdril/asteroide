document.addEventListener("DOMContentLoaded", function() {
    // Select the nav bar's unordered list (ul)
    const navBar = document.querySelector("nav ul");

    // Apply CSS styles to center the nav bar items
    navBar.style.display = "flex";
    navBar.style.justifyContent = "center";
    navBar.style.padding = "0";
    navBar.style.margin = "0";
    navBar.style.listStyle = "none";

    // Apply CSS styles to each anchor tag (a)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.style.display = "inline-block";
        link.style.margin = "0 15px";
        link.style.textDecoration = "none";
    });

    // Apply CSS styles to each button within anchor tags
    const navButtons = document.querySelectorAll("nav a button");
    navButtons.forEach(button => {
        button.style.display = "block";
        button.style.color = "white";
        button.style.backgroundColor = "#333";
        button.style.border = "none";
        button.style.padding = "10px 20px";
        button.style.cursor = "pointer";
    });
});


// Descriptive variable names
var carModel = "Toyota Camry"; // string
var carYear = 2015; // integer
var currentYear = 2024;

// Mathematical operation
var carAge = currentYear - carYear;

// Decision making with if-else statement
var carCondition;
if (carAge <= 3) {
    carCondition = "new";
} else if (carAge > 3 && carAge <= 10) {
    carCondition = "used";
} else {
    carCondition = "old";
}

// Logical operators in complex condition
var message;
if (carCondition === "new" || carCondition === "used") {
    message = "The " + carModel + " is a " + carCondition + " car, and it is " + carAge + " years old.";
} else {
    message = "The " + carModel + " is an old car, and it is " + carAge + " years old.";
}

// Output to console
console.log(message);

// Output to browser screen
document.getElementById("output").innerText = message;