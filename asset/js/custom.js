const sidebar = document.querySelector(".Sidebar");
const mainContent = document.querySelector(".root");
const sliderBtn = document.querySelector(".sliderBtn");

function toggleSidebar() {
  sidebar.classList.toggle("SidebarExtend");
  mainContent.classList.toggle("shrink");
}

sliderBtn.addEventListener("click", function () {
  toggleSidebar();
});

document.addEventListener("click", function (event) {
  const isClickedInsideSidebar = sidebar.contains(event.target);
  const isClickedOnSliderBtn = sliderBtn.contains(event.target);

  if (!isClickedInsideSidebar && !isClickedOnSliderBtn) {
    sidebar.classList.remove("SidebarExtend");
    mainContent.classList.remove("shrink");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleNav(trigger, nav, otherNav) {
    trigger.forEach(function (elem) {
      elem.addEventListener("click", function (event) {
        event.stopPropagation();
        nav.forEach(function (navElem) {
          navElem.classList.toggle("show");
        });
        otherNav.forEach(function (otherNavElem) {
          otherNavElem.classList.remove("show");
        });
      });
    });
  }

  var UserProfiles = document.querySelectorAll(".UserProfile");
  var dashbord_nav = document.querySelectorAll(".dashbord_nav");

  var notificationBtn = document.querySelectorAll(".notificationBtn");
  var notificationCard = document.querySelectorAll(".notificationCard");

  toggleNav(UserProfiles, dashbord_nav, notificationCard);
  toggleNav(notificationBtn, notificationCard, dashbord_nav);

  document.addEventListener("click", function (event) {
    var clickedOutside = true;

    [dashbord_nav, notificationCard].forEach(function (nav) {
      nav.forEach(function (navElem) {
        if (navElem.contains(event.target)) {
          clickedOutside = false;
        }
      });
    });

    if (clickedOutside) {
      [dashbord_nav, notificationCard].forEach(function (nav) {
        nav.forEach(function (navElem) {
          navElem.classList.remove("show");
        });
      });
    }
  });
});

const buttons = document.querySelectorAll(".tab_btn");

function toggleActiveClass(event) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
}

buttons.forEach((button) => {
  button.addEventListener("click", toggleActiveClass);
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu(button, menu) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var isActive = menu.classList.contains("show");
      hideAllMenus();
      if (!isActive) {
        menu.classList.add("show");
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== button) {
        menu.classList.remove("show");
      }
    });
  }

  function hideAllMenus() {
    var allMenus = document.querySelectorAll(".action_menu");
    allMenus.forEach(function (menu) {
      menu.classList.remove("show");
    });
  }

  var buttons = document.querySelectorAll("[data-toggle-button]");
  buttons.forEach(function (button) {
    var associatedNavClass = button.getAttribute("data-toggle-button");
    var menu = document.querySelector(
      '[data-toggle-nav="' + associatedNavClass + '"]'
    );
    if (menu) {
      toggleMenu(button, menu);
    }
  });
});