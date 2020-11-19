<template>
  <section id="one" :class="cat.class">
    <div class="inner">
      <a href="#" class="image"><img :src="cat.image" alt="" /></a>
      <div class="content">
        <h2 class="major">{{ cat.title }}</h2>
        <p>{{ cat.description }}</p>
        <a @click="$router.push({ path: 'article/1' })" class="special">Accéder à la categorie</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Partie",
  props: ['cat']
}
</script>

<style scoped>

</style>