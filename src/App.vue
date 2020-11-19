<template>
  <div id="app" :style="{ 'background-image': 'linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url(' + $store.state.background + ')' }">
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
    <Header :siteProperties="siteProperties" />
    <Footer />
  </div>
</template>

<script>

require('@/assets/css/main.css')

import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";

export default {
  name: 'App',
  props: ["siteProperties"],
  components: {
    Header,
    Footer
  },
  created() {
    this.$toastr.defaultClassNames = ["animated", "zoomInUp"];
    this.$toastr.defaultPosition = "toast-bottom-right";
  }
}
</script>

<style>
#app {
  background-color: #2e3141;
  background-size: auto, cover;
  background-attachment: fixed;
  background-position: center, center;
  -webkit-transition: all 3s ease;
  transition: all 3s ease;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
