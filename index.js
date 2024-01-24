var sidenav = document.getElementById("sidebar");
var menu = document.getElementById("menuicon");
var close = document.getElementById("close-nav");

menu.addEventListener("click", function () {
     sidenav.style.right = 0;
});

close.addEventListener("click", function () {
     sidenav.style.right = "-50%"
}); 