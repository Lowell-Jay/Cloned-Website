const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const section2 = document.querySelector("#section2");
  const section5 = document.querySelector("#section5");

  const section2Top = section2.offsetTop;
  const section5Top = section5.offsetTop;
  const scrollPos = window.scrollY;

  // Example: show navbar only between section1 and section2
  if (scrollPos >= section2Top && scrollPos < section5Top) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.navbar ul');
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  if (toggleBtn && navList && navbar) {
    // Toggle menu on click
    toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('show');
    });

    // Show/hide navbar when scrolling (mobile only)
    window.addEventListener('scroll', () => {
      if (window.innerWidth <= 600) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
          navbar.style.top = '0'; // show when scrolling up
        } else {
          navbar.style.top = '-60px'; // hide when scrolling down
          navList.classList.remove('show'); // close menu if open
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    });
  }
});