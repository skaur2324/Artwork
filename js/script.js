window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { // Change 100 to your desired scroll position
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });