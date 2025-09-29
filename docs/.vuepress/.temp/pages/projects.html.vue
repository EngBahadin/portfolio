<template><div><h1 id="my-projects" tabindex="-1"><a class="header-anchor" href="#my-projects"><span>My Projects</span></a></h1>
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
      <a href="https://github.com/EngBahadin/frontend-uniFood" target="_blank" class="project-link">
        View on GitHub →
      </a>
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
      <a href="#" class="project-link disabled">
        Coming Soon
      </a>
    </div>
  </div>
</div>
</div></template>



<style>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.project-card {
  background: var(--c-bg-light);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    margin: 0 auto;
    max-width: 400px;
  }
}
</style>