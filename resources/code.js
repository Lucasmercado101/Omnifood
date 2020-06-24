let hamburgerMenu = `<div class="container" onclick="menu(this)">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                      </div>`;

let burgerMenu = new Waypoint({
  element: document.getElementById("features"),
  handler: function (direction) {
    console.log(direction);
    if (direction === "down") {
      $("#logo").attr("src", "resources/img/logo.png");
      console.log("a");
      $("nav").addClass("fixed-top");
    } else {
      console.log("b");
      $("#logo").attr("src", "resources/img/logo-white.png");
      $("nav").removeClass("fixed-top");
    }
  },
  offset: 85,
});

let phoneAnim = new Waypoint({
  element: document.getElementById("how-it-works"),
  handler: function (direction) {
    $("#phone").find("img").animate(
      {
        top: 0,
        opacity: 1,
      },
      1000
    );
  },
  offset: 200,
});

let playedBeat = false;

let planBeat = new Waypoint({
  element: document.getElementById("plans"),
  handler: function (direction) {
    if (!playedBeat) {
      $("#premium").addClass("premium-beat");
      setTimeout(function () {
        $("#premium").removeClass("premium-beat");
      }, 450);
      playedBeat = true;
    }
  },
  offset: 80,
});

if ($(window).width() < 770) {
  $($(hamburgerMenu)).insertBefore("#menu-links");
}

function menu(x) {
  x.classList.toggle("change");
  $("#menu-links").slideToggle(450);
}
