<template>
  <section id="wrapper">
    <Partie v-for="category in categories"
            v-bind:key="category.id"
            v-bind:cat="category" />
  </section>
</template>

<script>
import { db } from '@/db.js'

import Partie from '@/components/Accueil/Partie.vue'

export default {
  name: "WrapperPartie",
  components: {
    Partie
  },
  data() {
    return {
      categories: [],
    }
  },
  firestore: {
    categories: db.collection('categories')
  }
}
</script>

<style scoped>

</style>