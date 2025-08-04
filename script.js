// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // MOBILE MENU TOGGLE
  const menuToggle = document.createElement('div');
  menuToggle.id = 'mobile-menu';
  menuToggle.innerHTML = '&#9776;';
  menuToggle.style.cursor = 'pointer';
  menuToggle.style.color = 'white';
  menuToggle.style.fontSize = '1.8rem';
  menuToggle.style.display = 'none';
  menuToggle.style.marginRight = '10px';
  
  // Append mobile menu icon to navbar
  const navbar = document.querySelector('.navbar');
  navbar.insertBefore(menuToggle, navbar.querySelector('.nav-links'));

  const navLinks = document.querySelector('.nav-links');

  // Show/hide menu on click
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking a link (for mobile UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  });

  // SHOW MOBILE MENU BUTTON ON SMALL SCREENS
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      menuToggle.style.display = 'block';
    } else {
      menuToggle.style.display = 'none';
      navLinks.classList.remove('show');
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  // OPTIONAL: Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
});
