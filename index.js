
// Mobile nav toggle button
$(".mainNavToggler").click(function () {
  $(".mobileNav").toggleClass("show");
});

// Animated circle Intersection obserrver

var circle = document.querySelector(".animatedCircle");
var imgBoxes = document.querySelectorAll(".imgBx");

const circleOptions = {
  threshold: "0.9",
};

const circleObserver = new IntersectionObserver(function (
  entries,
  circleObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      imgBoxes.forEach((imgBox) => imgBox.classList.add("animateThree"));
    }
  });
},
circleOptions);

circleObserver.observe(circle);
