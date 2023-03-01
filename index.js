
// Mobile nav toggle button
$(".mainNavToggler").click(function () {
  $(".mobileNav").toggleClass("show");
});


// Zoom Function


$(".galleryMain .zoomUp").click(function () {
  var imgSrc = $(this).attr("src");
  $(".clickedImg").attr("src", imgSrc);
  $(".fade").addClass("show");
});

$(".zoomBtn").click(function () {
  $(".clickedImg").toggleClass("zoomClicked");
  $(this).toggleClass("ck");
});

$(".shareBtn").click(function () {
  $(".shareDiv").toggleClass("sharing");
});

var myDocument = document.documentElement;
$(".expandBtn").click(function () {
  if (myDocument.requestFullscreen) {
    myDocument.requestFullscreen();
  }

  $(".expandBtn").toggleClass("clicked");
  $(".fade").toggleClass("fScreen");
  $(".expandBtn.clicked").click(function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });
});

$(".closeBtn").click(function () {
  $(".fade").removeClass("show");
  $(".clickedimg").removeClass("zoomClicked");
  $(".zoomBtn").removeClass("ck");
  $(".shareDiv").removeClass("sharing");

  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

if ($(window).height() !== screen.height) {
  $(".imgClickWrapper").removeClass("fScreen");
}

// Animated circle Intersection obserrver

var circle = document.getElementsByClassName(".animatedCircle");
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



