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

import Background from '@/images/bg.gif'

export default {
  name: 'Accueil',
  props: ["siteProperties"],
  title: "Accueil",
  components: {
    Banner,
    WrapperPartie
  },
  created() {
    this.$store.state.background = Background
    document.title = "Accueil | " + this.siteProperties.nomSite
  }
}
</script>

<style scoped>

</style>
