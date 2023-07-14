const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector(".hero-navbar").classList.toggle("show");
});

const smoothScroll = (target) => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const element = document.querySelector(target);
  const offsetTop = element.offsetTop - navbarHeight;
  window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
        });
    };

    const navbarLinks = document.querySelectorAll('.navbar-menu a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });

    function toggleMenu() {
      var navbarMenu = document.getElementById("navbar-menu");
      navbarMenu.style.display = navbarMenu.style.display === "block" ? "none" : "block";
    }

    document.addEventListener('DOMContentLoaded', function() {
      var coverImage = document.querySelector('.cover-image');
      coverImage.classList.add('fade-in');
  });

  