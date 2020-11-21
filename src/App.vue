<template>
  <div id="app">
    <div class="img-gradient">
      <transition name="slide-fade" mode="out-in">
        <img class="bg-img" :src="$store.state.background" :key="$store.state.background" data-toggle="tooltip" data-placement="bottom" title="goTop" alt="">
      </transition>
    </div>
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
  overflow: hidden;
  position: relative;
  width: 100%;
}

.bg-img {
  pointer-events: none;
  position: fixed;
  height: 100%;
  min-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.img-gradient {
  opacity: 0.2;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
