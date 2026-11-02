window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY;
    var navbar = document.querySelector(".navbar");

    if (scrollValue > 300) {

        navbar.setAttribute("class", "navbar md:navbar-expand bg-accent");
    } else {
        navbar.setAttribute("class", "navbar md:navbar-expand bg-danger");
    }

});

// location 
document.querySelector("#demo").innerHTML = window.location.href;

document.querySelector("#yassin").addEventListener("click", function () {
    window.location.href = "https://www.google.com/search?q=egypt&ie=UTF-8";
});

var mouse = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d;
}

function getData() {
    alert(123);
}

var yasso;

function cancelTimer() {
    clearTimeout(yasso); 

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you have canceled",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}
