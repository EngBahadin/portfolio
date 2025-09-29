# About Me

<!-- About Hero -->
<div class="about-hero">
  <img src="/profile.jpg" alt="Bahadin Ali" class="about-avatar">
  <div class="about-intro">
    <h2 class="about-title">Hi, I'm Bahadin Ali </h2>
    <p class="about-subtitle">Frontend developer from Erbil, Iraq</p>
  </div>
</div>

<!-- About Content -->
<div class="about-content">
  <div class="about-card">
    <h3>🚀 What I Do</h3>
    <p>I love building modern, scalable web apps with <strong>React</strong>, <strong>Next.js</strong>, <strong>Vue</strong>, and <strong>TypeScript</strong>.</p>
  </div>

  <div class="about-card">
    <h3>💡 My Approach</h3>
    <p>I follow best practices, love animations, and thrive in collaborative environments.</p>
  </div>

  <div class="about-card">
    <h3>🎯 Currently</h3>
    <p>Always learning new technologies and working on exciting projects that challenge my skills.</p>
  </div>
</div>

<style>
/* About Hero */
.about-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.about-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #3eaf7c;
  object-fit: cover;
  flex-shrink: 0;
}

.about-intro {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.about-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  color: #24292f;
}

.about-subtitle {
  font-size: 1.2rem;
  color: #3eaf7c !important;
  font-weight: 600;
}

/* About Content */
.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
}

.about-card {
  background: #f6f8fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e1e4e8;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.about-card h3 {
  color: #3eaf7c !important;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}

.about-card p {
  color: #656d76;
  line-height: 1.6;
  margin: 0;
}

.about-card strong {
  color: #3eaf7c !important;
  font-weight: 600;
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .about-title {
    color: #f0f6fc;
  }
  
  .about-card {
    background: #161b22;
    border-color: #30363d;
  }
  
  .about-card p {
    color: #8b949e;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-hero {
    flex-direction: column;
    text-align: center;
  }
  
  .about-intro {
    min-width: auto;
  }
  
  .about-title {
    font-size: 1.8rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>