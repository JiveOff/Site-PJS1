<template>
  <section id="one" :class="cat.class">
    <div class="inner">
      <span class="image"><img :src="cat.image" alt="" /></span>
      <div class="content">
        <h2 class="major">{{ cat.title }}</h2>
        <p>{{ cat.description }}</p>
        <div v-for="(element) in cat.articles" :key="element">
          <a @click="smoothPageSwitch({ path: 'article/' + element.id });" class="special">{{ element.titre }}</a>
        </div>
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