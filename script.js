function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function scrollab() {
    window.scrollTo(0, 1000);
    behavior: 'smooth';
  }

  function scrollhome() {
    window.scrollTo(0, 900);
    behavior: 'smooth';
  }

  function scrollport() {
    window.scrollTo(0, 1750);
    behavior: 'smooth';
  }

  function scrollskill() {
    window.scrollTo(0, 2500);
    behavior: 'smooth';
  }

  function scrollcontact() {
    window.scrollTo(0,3400);
    behavior: 'smooth';
  }

  
