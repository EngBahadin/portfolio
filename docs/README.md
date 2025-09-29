

<!-- Hero Section -->
<div class="hero-custom">
  <img src="/profile.jpg" alt="Bahadin Ali" class="hero-avatar">
  <h1 class="hero-title">Bahadin Ali</h1>
  <p class="hero-role">Frontend Developer · React · Next.js · Vue</p>
  <p class="hero-subtitle">I build fast, clean, accessible web apps. TypeScript addict, Tailwind enjoyer, animation nerd.</p>
  
  <div class="hero-actions">
    <a href="/projects.html" class="btn btn-primary">View Projects</a>
    <a href="/about.html" class="btn btn-secondary">About Me</a>
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

<!-- Skills Grid -->
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

<style>
/* Hero Section */
.hero-custom {
  text-align: center;
  padding: 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
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

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1000px;
  padding: 0 1rem;
}

.skill-card {
  background: var(--c-bg-light);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--c-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-role {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>