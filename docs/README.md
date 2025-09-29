---
home: true
---

<ClientOnly>
<div id="home" class="hero-custom">
  <img src="/profile.jpg" alt="Bahadin Ali" class="hero-avatar">
  <h1 class="hero-title">Bahadin Ali</h1>
  <p class="hero-role">Frontend Developer · React · Next.js · Vue</p>
  <p class="hero-subtitle">I build fast, clean, accessible web apps. TypeScript addict, Tailwind enjoyer, animation nerd.</p>
  <div class="hero-actions">
    <a href="#projects" class="btn btn-primary">View Projects</a>
    <a href="#about" class="btn btn-secondary">About Me</a>
  </div>
  <div class="hero-badges">
    <span class="badge">React</span>
    <span class="badge">Next.js</span>
    <span class="badge">Vue</span>
    <span class="badge">TypeScript</span>
    <span class="badge">Tailwind</span>
    <span class="badge">Zustand</span>
    <span class="badge">React Query</span>
  </div>
</div>

<div class="skills-section">
  <h2 class="section-title">Skills & Expertise</h2>
  <p class="section-subtitle">Technologies and tools I use to bring ideas to life</p>
  <div class="skills-grid">
    <div class="skill-card">
      <h3>Frontend</h3>
      <p>SPAs and SSR with modern stacks.</p>
      <div class="skill-tags">
        <span>React</span>
        <span>Next.js</span>
        <span>Vue</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Framer Motion</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Backend</h3>
      <p>Server-side development and databases.</p>
      <div class="skill-tags">
        <span>Node</span>
        <span>Express</span>
        <span>PostgreSQL</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Tools & Workflow</h3>
      <p>Collaboration, testing and productivity tools.</p>
      <div class="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Cypress</span>
        <span>Postman</span>
        <span>Scrum/Agile</span>
      </div>
    </div>
  </div>
</div>

<div id="projects" class="section-wrapper">
  <h2 class="section-title">My Projects</h2>
  <div class="projects-container">
    <div class="project-card">
      <img src="/unifood.png" alt="UniFood" class="project-img">
      <div class="project-content">
        <h3>UniFood</h3>
        <p>Online food ordering platform for students with real-time ordering, payment integration, and delivery tracking.</p>
        <div class="project-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>Framer Motion</span>
          <span>Next.js</span>
          <span>Typescript</span>
          <span>React Query</span>
        </div>
        <a href="https://github.com/EngBahadin/frontend-uniFood" target="_blank" class="project-link">View on GitHub →</a>
      </div>
    </div>
    <div class="project-card">
      <img src="/image.png" alt="Sayay Farmuda" class="project-img">
      <div class="project-content">
        <h3>Sayay Farmuda</h3>
        <p>Islamic Hadith sharing platform with advanced search, categorization, and community features for Islamic scholars and students.</p>
        <div class="project-tech">
          <span>React</span>
          <span>Next.js</span>
          <span>Zustand</span>
          <span>React Query</span>
          <span>Typescript</span>
        </div>
        <a href="#" class="project-link disabled">Coming Soon</a>
      </div>
    </div>
  </div>
</div>

<div id="about" class="section-wrapper about-section">
  <h2 class="section-title">About Me</h2>
  <div class="about-intro-text">
    <p class="about-description">I'm a passionate frontend developer based in Erbil, Iraq, specializing in building modern web applications. With expertise in React, Next.js, and Vue, I transform ideas into elegant, performant digital experiences.</p>
  </div>
  <div class="about-timeline">
    <div class="timeline-item">
      <div class="timeline-icon">💼</div>
      <div class="timeline-content">
        <h3>Professional Focus</h3>
        <p>Specializing in React ecosystem and TypeScript, I build scalable SPAs and SSR applications. I'm passionate about creating intuitive user interfaces with smooth animations using Framer Motion.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-icon">🎨</div>
      <div class="timeline-content">
        <h3>Design Philosophy</h3>
        <p>I believe in clean code, accessibility-first design, and pixel-perfect implementations. Every project is an opportunity to craft something beautiful and functional.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-icon">🚀</div>
      <div class="timeline-content">
        <h3>Always Learning</h3>
        <p>The web evolves rapidly, and so do I. Currently exploring advanced React patterns, performance optimization techniques, and modern state management solutions like Zustand and React Query.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-icon">🤝</div>
      <div class="timeline-content">
        <h3>Collaboration & Growth</h3>
        <p>I thrive in agile environments and love working with teams that value code quality, continuous learning, and innovative solutions. Let's build something amazing together.</p>
      </div>
    </div>
  </div>
</div>

<div id="contact" class="section-wrapper">
  <h2 class="section-title">Let's Connect</h2>
  <p class="section-subtitle">Feel free to reach out for collaborations or opportunities</p>
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
</div>
</ClientOnly>

<style>
html {
  scroll-behavior: smooth;
}

.section-wrapper {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--c-text);
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--c-text-light);
  margin-bottom: 3rem;
}

.hero-custom {
  text-align: center;
  padding: 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  border: 4px solid #3eaf7c;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  object-fit: cover;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--c-text);
}

.hero-role {
  font-size: 1.3rem;
  color: #3eaf7c;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--c-text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #3eaf7c;
  color: white;
  border: 2px solid #3eaf7c;
}

.btn-primary:hover {
  background: #369970;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(62, 175, 124, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #3eaf7c;
  border: 2px solid #3eaf7c;
}

.btn-secondary:hover {
  background: #3eaf7c;
  color: white;
  transform: translateY(-2px);
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.badge {
  background: rgba(62, 175, 124, 0.1);
  border: 1px solid rgba(62, 175, 124, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #3eaf7c;
}

.skills-section {
  padding: 2rem 1rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.skill-card {
  background: var(--c-bg-light);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #3eaf7c;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(62, 175, 124, 0.25);
}

.skill-card h3 {
  color: #3eaf7c;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.skill-card p {
  color: var(--c-text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  background: rgba(62, 175, 124, 0.1);
  border: 1px solid rgba(62, 175, 124, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #3eaf7c;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem auto 0;
}

.project-card {
  background: var(--c-bg-light);
  border: 2px solid #3eaf7c;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(62, 175, 124, 0.3);
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: white;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: var(--c-text);
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.project-content p {
  color: var(--c-text-light);
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tech span {
  background: rgba(62, 175, 124, 0.1);
  border: 1px solid rgba(62, 175, 124, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #3eaf7c;
  font-weight: 500;
}

.project-link {
  color: #3eaf7c;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 2px solid #3eaf7c;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #3eaf7c;
  color: white;
  transform: translateY(-2px);
}

.project-link.disabled {
  color: var(--c-text-light);
  border-color: var(--c-border);
  cursor: not-allowed;
}

.project-link.disabled:hover {
  background: transparent;
  transform: none;
}

.about-section {
  background: linear-gradient(135deg, rgba(62, 175, 124, 0.05) 0%, rgba(62, 175, 124, 0.02) 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
}

.about-intro-text {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--c-text);
  margin: 0;
}

.about-timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.about-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #3eaf7c, rgba(62, 175, 124, 0.3));
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  align-items: flex-start;
}

.timeline-icon {
  width: 60px;
  height: 60px;
  background: var(--c-bg);
  border: 3px solid #3eaf7c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(62, 175, 124, 0.2);
}

.timeline-content {
  flex: 1;
  background: var(--c-bg-light);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 2px solid #3eaf7c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(62, 175, 124, 0.25);
}

.timeline-content h3 {
  color: #3eaf7c;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.timeline-content p {
  color: var(--c-text);
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: var(--c-bg-light);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #3eaf7c;
  text-align: center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(62, 175, 124, 0.25);
}

.contact-card h3 {
  color: #3eaf7c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}

.contact-card a {
  color: #3eaf7c;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #2d8a5f;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-role {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
  
  .skills-grid,
  .projects-container,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    margin: 0 auto;
    max-width: 400px;
  }
  
  .about-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    gap: 1rem;
  }
  
  .timeline-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .timeline-content h3 {
    font-size: 1.1rem;
  }
  
  .about-description {
    font-size: 1rem;
  }
}
</style>