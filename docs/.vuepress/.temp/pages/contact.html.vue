<template><div><h1 id="contact-me" tabindex="-1"><a class="header-anchor" href="#contact-me"><span>Contact Me</span></a></h1>
<!-- Contact Hero -->
<div class="contact-hero">
  <h2 class="contact-title">Let's Connect</h2>
  <p class="contact-subtitle">Feel free to reach out for collaborations or opportunities</p>
</div>
<!-- Contact Grid -->
<div class="contact-grid">
  <div class="contact-card">
    <h3>📧 Email</h3>
    <a href="mailto:se.bahauddin@gmail.com">se.bahauddin@gmail.com</a>
  </div>
  <div class="contact-card">
    <h3>💻 GitHub</h3>
    <a href="https://github.com/EngBahadin" target="_blank">EngBahadin</a>
  </div>
  <div class="contact-card">
    <h3>🔗 LinkedIn</h3>
    <a href="https://www.linkedin.com/in/bahadin-ali/" target="_blank">Bahadin Ali</a>
  </div>
  <div class="contact-card">
    <h3>📱 Phone</h3>
    <a href="tel:+9647503342925">+964 750 334 2925</a>
  </div>
</div>
</div></template>



<style>
/* Contact Hero */
.contact-hero {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  color: #24292f;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: #656d76;
  line-height: 1.6;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
}

.contact-card {
  background: #f6f8fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e1e4e8;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.contact-card h3 {
  color: #3eaf7c !important;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}

.contact-card a {
  color: #3eaf7c !important;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #2d8a5f !important;
  text-decoration: underline;
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .contact-title {
    color: #f0f6fc;
  }
  
  .contact-subtitle {
    color: #8b949e;
  }
  
  .contact-card {
    background: #161b22;
    border-color: #30363d;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-title {
    font-size: 1.8rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>