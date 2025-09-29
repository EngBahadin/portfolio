<template>
  <section class="hero">
    <img v-if="avatar" class="hero__avatar" :src="avatar" :alt="name" />

    <h1 class="hero__title">{{ name }}</h1>
    <p class="hero__role">{{ role }}</p>
    <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>

    <div class="hero__actions">
      <a
        v-for="(a, i) in actions"
        :key="i"
        :href="a.href"
        class="btn"
        :class="a.variant === 'secondary' ? 'btn--ghost' : 'btn--solid'"
      >
        {{ a.label }}
      </a>
    </div>

    <ul v-if="badges?.length" class="hero__badges">
      <li v-for="b in badges" :key="b" class="pill">{{ b }}</li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  subtitle: String,
  avatar: String,
  actions: Array,
  badges: Array,
})
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
}
.hero__avatar {
  width: 140px; height: 140px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid #4f7cffaa;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6);
}
.hero__title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: .5rem;
}
.hero__role {
  font-size: 1.2rem;
  color: var(--vp-c-brand);
  margin-bottom: .5rem;
}
.hero__subtitle {
  max-width: 600px;
  margin: 0 auto 1.2rem;
  color: var(--vp-c-text);
  opacity: .8;
}
.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
}
.btn {
  padding: .6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}
.btn--solid { background: var(--vp-c-brand); color: #fff; }
.btn--ghost { border: 1px solid var(--vp-c-brand); color: var(--vp-c-brand); }
.hero__badges {
  display: flex; gap: .5rem; flex-wrap: wrap; justify-content: center;
  margin-top: 1rem;
}
.pill {
  background: #4f7cff22;
  border: 1px solid #4f7cff44;
  padding: .3rem .7rem;
  border-radius: 999px;
  font-size: .8rem;
}
</style>
