<template>
  <div class="skill">
    <h3>{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <ul v-if="skills?.length">
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  skills: Array,
})
</script>

<style scoped>
.skill {
  background: var(--vp-c-bg-alt);
  padding: 1rem;
  border-radius: 12px;
  color: var(--vp-c-text);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  transition: transform .2s;
}
.skill:hover { transform: translateY(-4px); }
.skill h3 { margin-bottom: .5rem; color: var(--vp-c-brand); }
.skill ul { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: .5rem; }
.skill li {
  background: #4f7cff22;
  border: 1px solid #4f7cff44;
  padding: .3rem .6rem;
  border-radius: 8px;
  font-size: .85rem;
}
</style>
