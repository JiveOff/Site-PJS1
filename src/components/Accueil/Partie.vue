<template>
  <section id="one" :class="cat.class">
    <div class="inner">
      <a href="#" class="image"><img :src="cat.image" alt="" /></a>
      <div class="content">
        <h2 class="major">{{ cat.title }}</h2>
        <p>{{ cat.description }}</p>
        <a @click="smoothPageSwitch({ path: 'article/1' });" class="special">Accéder à la categorie</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Partie",
  props: ['cat'],
  methods: {
    smoothPageSwitch(obj) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.$router.push(obj);
    }
  }
}
</script>

<style scoped>

</style>