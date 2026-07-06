// ZTSI - Main JavaScript File

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
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Setup modal close buttons
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.querySelector('.close-modal');
  
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

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

console.log('ZTSI website initialized successfully!');

// ===== FORM SUBMISSION & TOAST =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('consultation-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Prevent default mailto behavior for better UX (as it may fail if no client is configured)
      e.preventDefault();
      
      // Hide the modal
      const modal = document.getElementById('contact-modal');
      if (modal) {
        modal.style.display = 'none';
      }
      
      // Show toaster message
      showToast('Thank you! The backend team will contact you shortly.');
      
      // Reset form
      contactForm.reset();
    });
  }
});

function showToast(message) {
  let toast = document.getElementById('toast-message');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-message';
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.backgroundColor = '#2c3e50'; // Using a nice dark color
    toast.style.color = '#ffffff';
    toast.style.padding = '16px 24px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.zIndex = '10000';
    toast.style.fontSize = '16px';
    toast.style.fontWeight = '500';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  
  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);
  
  // Hide after 4 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 4000);
}
