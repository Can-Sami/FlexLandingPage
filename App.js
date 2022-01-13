let page = 0;

const pageSetter = (pageNumber) => {
  page = pageNumber;
};

const bindWheel = () => {
  $(window).bind("mousewheel DOMMouseScroll", scrollPage);
};

const unBindWheel = () => {
  $(window).unbind();
};

$(window).bind("mousewheel DOMMouseScroll", scrollPage);

function scrollPage(event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
  } else {
    // scroll down
    if (page == 0) {
      $(".home").fadeOut(150);
      pageSetter(1);  
      unBindWheel();
      setTimeout(() => {
        $("#home__section").load("./pages/page2.html", function() {  $("#home__section").hide().fadeIn(150); });
      }, 160);
      setTimeout(() => {
        bindWheel();
      }, 1000);
    
    }else if (page == 1) {
      $(".page2__home").fadeOut(150);
      pageSetter(2);
      unBindWheel();

      setTimeout(() => {
        $("#home__section").load("./pages/page3.html", function() { $("#home__section").hide().fadeIn(150) });
      }, 160);
      setTimeout(() => {
        bindWheel();
      }, 1000);
    }

    else if (page == 2) {
      $(".page2__home").fadeOut(150);
      pageSetter(3);
      unBindWheel();

      setTimeout(() => {
        $("#home__section").load("./pages/page4.html", function() { $("#home__section").hide().fadeIn(150) });
      }, 160);
      setTimeout(() => {
        bindWheel();
      }, 1000);
    }
  }
}

$("#signin").click(function() {
  window.location.href = "./pages/login/login.html"
})