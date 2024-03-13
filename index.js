window.onload = function () {
    var element = document.querySelector('.hero-para');
    element.classList.add('typing');
};

// var darkMode = document.getElementById("dark-mode");

// darkMode.onclick = function () {
//     document.body.classList.toggle("dark-theme");
// }

var darkMode = document.getElementById("dark-mode");
    var lightMode = document.getElementById("light-mode");
    var body = document.body;

    darkMode.onclick = function () {
        body.classList.toggle("dark-theme");
        darkMode.style.display = "none";
        lightMode.style.display = "inline-block";
    }

    lightMode.onclick = function () {
        body.classList.toggle("dark-theme");
        lightMode.style.display = "none";
        darkMode.style.display = "inline-block"; 
    } 