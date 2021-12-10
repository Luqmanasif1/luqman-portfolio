$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $("#navbar_").addClass("sticky");
      
    } else {
      $("#navbar_").removeClass("sticky");
    }
  });
});

// menu items color change
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $("#navbar_ .menu-items li a").addClass("textColor");
      // select menu item color change

      // $("#navbar_ .menu-items li a").click(function () {
      //   $("#navbar_ .menu-items li a").removeClass("textColorHover");
      //   $(this).addClass("textColorHover");
      // });


    } else {
      $("#navbar_ .menu-items li a").removeClass("textColor");

    
    }
  });
});


// on scroll change single manu item

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#navbar_ .menu-items li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  console.log(current);
  navLi.forEach((a) => {
    a.classList.remove("textColorHover");
    if (a.classList.contains(current)) {

      a.classList.add("textColorHover");
    }
  });
  
});



// toggle menu

$(".menu-bar-btn").click(function () {
  $("#navbar_ .menu-items").toggleClass("active");
  $(".menu-bar-btn i").toggleClass("active");
});

$("#navbar .menu-items li a").click(function () {
  // applying again smooth scroll on menu items click
  $("html").css("scrollBehavior", "smooth");
});

// Smooth Scrolling
$("#navbar_ .menu-items a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// progress bar animation

const skillSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".pskills");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
    // progressBars.style.animation.duration='12s';
    // progressBars.style.animation.timing.function ='ease-out';
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const secPos = skillSection.getBoundingClientRect().top;
  const scrPos = window.innerHeight / 4;

  if (secPos < scrPos) {
    showProgress();
    // console.log("show-prog")
  } else {
    hideProgress();

    // console.log("hide-prog")
  }
});
