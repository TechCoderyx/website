// Tech Coderyx - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
  initializeScrollAnimations();
  initializeNavigation();
  initializeButtons();
});

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.expertise-card, .project-card, .team-member, .stat-box').forEach(el => {
    observer.observe(el);
  });
}

// ===== SMOOTH NAVIGATION =====
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons button');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinksContainer.style.display = navLinksContainer.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

// ===== BUTTON INTERACTIONS =====
function initializeButtons() {
  const buttons = document.querySelectorAll('.cta-button, .secondary-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });

    // Add click handlers for call-to-action buttons
    if (button.textContent.includes('Consultation') || button.textContent.includes('Schedule') || button.textContent.includes('Get Started')) {
      button.addEventListener('click', function() {
        openContactForm();
      });
    }
  });
}

// ===== CONTACT FORM MODAL =====
function openContactForm() {
  alert('Contact form would open here. Implement with: name, email, phone, company, message fields.');
  // In a real app, you'd open a modal or navigate to a contact page
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
  }
});

// ===== DYNAMIC STATS COUNTER =====
function animateCounters() {
  const statBoxes = document.querySelectorAll('.stat-box h4');
  
  statBoxes.forEach(box => {
    const target = parseInt(box.textContent);
    if (isNaN(target)) return;
    
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        box.textContent = target + '+';
        clearInterval(timer);
      } else {
        box.textContent = Math.floor(current) + '+';
      }
    }, 30);
  });
}

// Trigger counter animation when stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      animateCounters();
    }
  });
});

const aboutSection = document.querySelector('#about');
if (aboutSection) {
  statsObserver.observe(aboutSection);
}

console.log('Tech Coderyx website initialized successfully!');
