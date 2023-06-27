// JavaScript to handle content display
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");
  var contentSections = document.querySelectorAll(".content-section");
  var homeSection = document.getElementById("home");

  // Display the home section by default
  homeSection.style.display = "block";

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = this.getAttribute("href").substring(1);

      contentSections.forEach(function (section) {
        section.style.display = "none";
      });

      document.getElementById(target).style.display = "block";
    });
  });
});
