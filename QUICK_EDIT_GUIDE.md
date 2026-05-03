# Tech Coderyx Website - Quick Edit Guide

## 🎯 Most Common Edits

This guide shows you how to make the most common website updates.

---

## 📝 1. Change Company Logo/Name

**File:** `index.html` (around line 30)

**Find:**
```html
<div class="logo">
  <span>Tech</span> Coderyx
</div>
```

**Change to:**
```html
<div class="logo">
  <span>Your</span> Company Name
</div>
```

*Tip: The colored part goes in `<span>`*

---

## 🔵 2. Update Hero Section Title

**File:** `index.html` (around line 47)

**Find:**
```html
<h1>Transform Your Business with Innovative IT Solutions</h1>
<p>12 Years of Excellence in Education, Insurance, Medical & Organic Farming Technology</p>
```

**Change to:**
```html
<h1>Your Company's Main Message</h1>
<p>Your company's tagline or subtitle</p>
```

---

## 📞 3. Update Contact Information

**File:** `pages/contact.html` (around line 152)

**Find:**
```html
<p>📧 info@techcoderyx.com</p>
<p>📞 +1-800-CODERYX</p>
```

**Change to:**
```html
<p>📧 your-email@yourcompany.com</p>
<p>📞 +1-XXX-XXXX-XXXX</p>
```

Also update in:
- `index.html` footer
- `pages/about.html` footer
- `pages/services.html` footer

---

## 🎨 4. Change Company Colors

**File:** `assets/css/style.css` (lines 1-10)

**Find:**
```css
:root {
  --primary-green: #2d9659;
  --dark-green: #1a7d44;
  --light-green: #e8f5e9;
  --accent-gold: #f39c12;
  /* ... etc ... */
}
```

**Change to your colors:**
```css
:root {
  --primary-green: #YOUR_COLOR_1;      /* Main color */
  --dark-green: #YOUR_COLOR_2;         /* Dark variant */
  --light-green: #YOUR_COLOR_3;        /* Light variant */
  --accent-gold: #YOUR_COLOR_4;        /* Accent/CTA color */
  /* ... rest stays same ... */
}
```

**Color Resources:**
- https://colorhexa.com/ - Find hex codes
- https://coolors.co/ - Generate palettes
- Chrome DevTools Eyedropper - Pick from any website

---

## ✍️ 5. Update About Section

**File:** `index.html` (around line 83)

**Find:**
```html
<div class="about-text">
  <h3>Who We Are</h3>
  <p>Tech Coderyx Pvt. Ltd. is a leading technology solutions provider...</p>
  <p>We specialize in creating custom software...</p>
  <p>Our commitment to quality...</p>
</div>
```

**Change paragraphs to your company info**

Also update statistics in the stat boxes:
```html
<div class="stat-box">
  <h4>12+</h4>
  <p>Years of Experience</p>
</div>
```

---

## 💼 6. Update Services/Expertise

**File:** `index.html` (around line 130)

**Find:**
```html
<div class="expertise-card">
  <div class="icon-placeholder">📚</div>
  <h3>Education Technology</h3>
  <p>Develop comprehensive e-learning platforms...</p>
</div>
```

**Change:**
- Emoji icon
- Title
- Description

Repeat for all 6 cards.

---

## 🏆 7. Update Projects Portfolio

**File:** `index.html` (around line 200)

**Find:**
```html
<div class="project-card">
  <div class="project-image">
    <div style="text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎓</div>
      <p>E-Learning Platform</p>
    </div>
  </div>
  <div class="project-content">
    <div class="project-category">EDUCATION</div>
    <h4>Digital Learning Ecosystem</h4>
    <p class="project-description">Developed a comprehensive e-learning platform...</p>
    <a href="#">View Case Study →</a>
  </div>
</div>
```

**Update:**
- Emoji (icon)
- Category
- Title
- Description
- Link

---

## 👥 8. Update Team Members

**File:** `index.html` (around line 350)

**Find:**
```html
<div class="team-member">
  <div class="member-image">👨‍💼</div>
  <div class="member-info">
    <h4>Rajesh Kumar</h4>
    <p class="member-role">Chief Executive Officer</p>
    <p class="member-bio">Visionary leader with 15+ years...</p>
  </div>
</div>
```

**Update:**
- Avatar emoji
- Name
- Role
- Bio

---

## 🔗 9. Update Navigation Links

**File:** `index.html` (around line 30)

**Find:**
```html
<ul class="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#expertise">Expertise</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#team">Team</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

**To add a new page:**
```html
<li><a href="pages/blog.html">Blog</a></li>
```

---

## 🔘 10. Change Button Text/Links

**Find in any HTML file:**
```html
<button class="cta-button">Get Started</button>
```

**Change to:**
```html
<button class="cta-button">Your Button Text</button>
```

Or make it link to a page:
```html
<a href="pages/contact.html" class="cta-button">Your Button Text</a>
```

---

## 📸 11. Add Real Images

### Replace Gradient Placeholders

**Find:**
```html
<div class="project-image">
  <div style="text-align: center;">
    <div style="font-size: 3rem;">🎓</div>
  </div>
</div>
```

**Change to:**
```html
<div class="project-image">
  <img src="../assets/images/project-name.jpg" alt="Description">
</div>
```

**Add CSS to style.css:**
```css
.project-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
```

---

## ✉️ 12. Update Contact Form

**File:** `pages/contact.html` (around line 55)

Change form fields and destinations:

```html
<form id="contactForm" action="your-form-handler.php" method="POST">
  <!-- Fields stay the same -->
</form>
```

Or use a service like:
- Formspree.io
- Basin.io
- Netlify Forms

---

## 🎨 13. Customize Font

**File:** `assets/css/style.css` (around line 18)

**Find:**
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Change to Google Font:**

1. Visit https://fonts.google.com/
2. Select font
3. Copy import link
4. Add to top of style.css:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

body {
  font-family: 'Playfair Display', serif;
}
```

---

## 📱 14. Update Mobile Breakpoints

**File:** `assets/css/style.css` (around line 920)

**Find:**
```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

Adjust pixel values for different breakpoints if needed.

---

## 🔍 15. SEO Meta Tags

**Each HTML file needs:**

```html
<meta name="description" content="Your page description (155-160 chars)">
<title>Your Page Title | Tech Coderyx</title>
```

**Update in:**
- `index.html`
- `pages/about.html`
- `pages/services.html`
- `pages/contact.html`

---

## 💾 16. Save Your Changes

Anytime you edit HTML/CSS:
1. Save file (Ctrl+S)
2. Refresh browser (Ctrl+R or F5)
3. Check for errors in console (F12 → Console)

---

## 🚀 17. Test Your Changes

### Local Testing
```bash
# Open in browser or run local server
python -m http.server 8000
```

### Check Responsiveness
1. Open browser
2. Press F12 (DevTools)
3. Click responsive mode icon
4. Test different screen sizes

### Test Links
- Click all navigation links
- Click all buttons
- Verify forms work
- Test contact form

---

## 🆘 Common Issues & Fixes

### Images not showing
- Check file path
- Make sure image exists
- Verify file name spelling

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked
- Verify selector is correct

### Layout broken on mobile
- Check responsive CSS
- Verify meta viewport tag exists
- Test on actual device

### Contact form not working
- Verify form action URL
- Check form method (GET/POST)
- Test in different browser

---

## 📖 File Quick Reference

| File | Purpose | Edit For |
|------|---------|----------|
| `index.html` | Homepage | Main content |
| `pages/about.html` | About page | Company story |
| `pages/services.html` | Services | Service details |
| `pages/contact.html` | Contact | Contact info & form |
| `assets/css/style.css` | All styles | Colors, fonts, layout |
| `assets/js/script.js` | Interactions | Animations, forms |
| `README.md` | Documentation | Reference |
| `DESIGN_GUIDE.md` | Design system | Components |

---

## ✅ Pre-Launch Checklist

- [ ] Updated company name/logo
- [ ] Updated contact information
- [ ] Changed colors if desired
- [ ] Added real images
- [ ] Updated all text content
- [ ] Tested all links work
- [ ] Tested form submission
- [ ] Checked on mobile
- [ ] No console errors
- [ ] All pages accessible

---

## 🎓 Learn More

- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Last Updated**: May 3, 2026  
**Difficulty Level**: Beginner-Friendly  
**Editing Time**: 30 minutes to 1 hour
