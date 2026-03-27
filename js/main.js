



let selectedSide = "";



(function () {
  "use strict";

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-fh5co-nav-toggle").removeClass("active");
        }
      }
    });
  };

  var offcanvasMenu = function () {
    $("#page").prepend('<div id="fh5co-offcanvas" />');
    $("#page").prepend(
      '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>',
    );
    var clone1 = $(".menu-1 > ul").clone();
    $("#fh5co-offcanvas").append(clone1);
    var clone2 = $(".menu-2 > ul").clone();
    $("#fh5co-offcanvas").append(clone2);

    $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
    $("#fh5co-offcanvas").find("li").removeClass("has-dropdown");

    // Hover dropdown menu on mobile
    $(".offcanvas-has-dropdown")
      .mouseenter(function () {
        var $this = $(this);

        $this.addClass("active").find("ul").slideDown(500, "easeOutExpo");
      })
      .mouseleave(function () {
        var $this = $(this);
        $this.removeClass("active").find("ul").slideUp(500, "easeOutExpo");
      });

    $(window).resize(function () {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });
  };

  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      var $this = $(this);

      if ($("body").hasClass("overflow offcanvas")) {
        $("body").removeClass("overflow offcanvas");
      } else {
        $("body").addClass("overflow offcanvas");
      }
      $this.toggleClass("active");
      event.preventDefault();
    });
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo",
              );
            });
          }, 100);
        }
      },
      { offset: "85%" },
    );
  };

  var dropdown = function () {
    $(".has-dropdown")
      .mouseenter(function () {
        var $this = $(this);
        $this
          .find(".dropdown")
          .css("display", "block")
          .addClass("animated-fast fadeInUpMenu");
      })
      .mouseleave(function () {
        var $this = $(this);

        $this
          .find(".dropdown")
          .css("display", "none")
          .removeClass("animated-fast fadeInUpMenu");
      });
  };

  var testimonialCarousel = function () {
    var owl = $(".owl-carousel-fullwidth");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
    });
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo",
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#fh5co-counter").length > 0) {
      $("#fh5co-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" },
      );
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  

  $(function () {
    mobileMenuOutsideClick();
    parallax();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    testimonialCarousel();
    goToTop();
    loaderPage();
    counter();
    counterWayPoint();

    // 👇 ADD THIS HERE

    const bride = document.getElementById("bride-side");
    const groom = document.getElementById("groom-side");

	console.log("Bride:", bride);
    console.log("Groom:", groom);

    

    if (bride && groom) {
      bride.addEventListener("click", () => {
        selectedSide = "Bride";

        bride.classList.add("active");
        groom.classList.remove("active");

        console.log("Selected:", selectedSide);
      });

      groom.addEventListener("click", () => {
        selectedSide = "Groom";

        groom.classList.add("active");
        bride.classList.remove("active");

        console.log("Selected:", selectedSide);
      });
    }
  });
})();

// RSVP BUTTON HANDLER
document.addEventListener("DOMContentLoaded", function () {
  const rsvpBtn = document.getElementById("rsvp-btn");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const count = document.getElementById("guest-count");

  let value = 1;

  console.log("RSVP BTN:", rsvpBtn);
  console.log("PLUS:", plus);
  console.log("MINUS:", minus);
  console.log("COUNT:", count);

  if (rsvpBtn) {
//     rsvpBtn.addEventListener("click", function () {
//       console.log("RSVP clicked");

// const message = document.getElementById("rsvp-message");

//       if (!selectedSide) {
//     message.innerText = "Please select Bride or Groom side";
//     message.style.color = "red";
//     return;
//   }

//   message.innerText = "Your RSVP is confirmed!";
//   message.style.color = "green";
//     });
  }

  if (plus && minus && count) {
    plus.addEventListener("click", () => {
      value++;
      count.innerText = value;
    });

    minus.addEventListener("click", () => {
      if (value > 1) value--;
      count.innerText = value;
    });
  }

  
     const form = document.getElementById("rsvp-form");

     if (form) {
       form.addEventListener("submit", async function (e) {
       e.preventDefault();

    const message = document.getElementById("rsvp-message");

    if (!selectedSide) {
      message.innerText = "Please select Bride or Groom side";
      message.style.color = "red";
      return;
    }

	 // Example data (you can customize)
    const name = document.getElementById("name").value;

    const { error } = await supabase
      .from("rsvp")
      .insert([
        {
          name: name,
          side: selectedSide
        }
      ]);

	  if(error){
		 message.innerText = "Error submitting RSVP";
         message.style.color = "red";
	  }else {
		message.innerText = "Your RSVP is confirmed!";
        message.style.color = "green";

	   // Optional reset
      form.reset();
	  }

  });
}

});
