//////////////////////////////////////////////////////
// Wow Library
new WOW().init();
//////////////////////////////////////////////////////
// Scroll to add shadow to navbar
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});
//////////////////////////////////////////////////////
// // Switch for dark and light mode

$(document).ready(function(){
    const darkModeToggle = document.querySelector("#dark-mode-toggle");
    darkModeToggle.addEventListener("change", () => {
       document.body.classList.toggle("darkmode");
    })  
    $("#dark-mode-toggle").on("click",function () {
        $(this).parent().toggleClass("checked");
    })
})

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".nav-bar");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

// dark mode light mode
// // check for saved 'darkMode' in localStorage
// // let darkMode = localStorage.getItem("darkMode");

// const darkModeToggle = document.querySelector("#dark-mode-toggle");

// const enableDarkMode = () => {
//   // 1. Add the class to the body
//   document.body.classList.add("darkmode");
//   // 2. Update darkMode in localStorage
//   localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = () => {
//   // 1. Remove the class from the body
//   document.body.classList.remove("darkmode");
//   // 2. Update darkMode in localStorage
//   localStorage.setItem("darkMode", null);
// };

// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === "enabled") {
//   enableDarkMode();
// }

// // When someone clicks the button
// darkModeToggle.addEventListener("click", () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem("darkMode");

//   // if it not current enabled, enable it
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//     // if it has been enabled, turn it off
//   } else {
//     disableDarkMode();
//   }
// });