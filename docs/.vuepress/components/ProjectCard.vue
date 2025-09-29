<template>
  <div class="project-card">
    <img :src="img" :alt="title" class="project-card__img" />
    <h3 class="project-card__title">{{ title }}</h3>
    <p class="project-card__description">{{ description }}</p>
    <a :href="link" target="_blank" class="project-card__link">
      View on GitHub →
    </a>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    img: String,
    link: String
  }
}
</script>
<style scoped>
.project-card {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin: 1rem 0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-card__img {
  width: 100%;
  height: 160px; /* Fixed height instead of max-height */
  object-fit: cover; /* Changed from 'contain' to 'cover' */
  border-radius: 8px;
  margin-bottom: 1rem;
  background: white;
  padding: 0.5rem;
  box-sizing: border-box; /* Include padding in width/height calculations */
}

.project-card__title {
  color: #24292f;
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

.project-card__description {
  color: #656d76;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.5;
}

.project-card__link {
  color: #0969da;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #0969da;
  border-radius: 6px;
  transition: all 0.2s;
}

.project-card__link:hover {
  background: #0969da;
  color: white;
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .project-card {
    background: #161b22;
    border-color: #30363d;
  }
  
  .project-card__img {
    background: #21262d;
  }
  
  .project-card__title {
    color: #f0f6fc;
  }
  
  .project-card__description {
    color: #8b949e;
  }
}</style>