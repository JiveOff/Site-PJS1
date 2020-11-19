<template>
  <div>
    <Banner :siteProperties="siteProperties" />
    <WrapperPartie />
  </div>
</template>

<script>

require('@/assets/css/main.css')

import Banner from "@/components/Accueil/Banner";
import WrapperPartie from "@/components/Accueil/WrapperPartie";

import Background from '@/images/bg.jpg'

export default {
  name: 'Accueil',
  props: ["siteProperties"],
  components: {
    Banner,
    WrapperPartie
  },
  created() {
    this.$store.state.background = Background
  }
}
</script>

<style scoped>

</style>
