<template>
  <div>
    <header id="header" :class="classToUse" v-if="$route.name === 'Accueil'">
      <h1 @click="$router.push({ name: 'Accueil' });" style="cursor: pointer">{{ siteName }}</h1>
      <nav>
        <a class="menuButton" @click="toggleMenu()">Menu</a>
      </nav>
    </header>
    <header id="header" v-else>
      <h1 @click="$router.push({ name: 'Accueil' });" style="cursor: pointer">{{ siteName }}</h1>
      <nav>
        <a id="menu" class="menuButton" @click="toggleMenu()">Menu</a>
      </nav>
    </header>
    <nav id="menu" :style="menuShowStyle">
      <div class="inner" :style="menuShowStyle">
        <h2>Menu</h2>
        <ul class="links">
          <li><a @click="menuGo('Accueil')">Accueil</a></li>
          <li><a @click="menuGo('Accueil')">A propos</a></li>
        </ul>
        <a class="close" @click="toggleMenu()">Close</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["siteProperties"],
  data() {
    return {
      classToUse: "alt",
      menuShowStyle: "",
      siteName: this.siteProperties.nomSite
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.classToUse = (window.scrollY > 0) ? "" : "alt";
    },
    toggleMenu () {
      if(this.menuShowStyle === "") {
        this.menuShowStyle = "opacity: 1; visibility: visible; pointer-events: auto;"
      } else {
        this.menuShowStyle = ""
      }
    },
    menuGo(name) {
      this.toggleMenu();
      this.$router.push({ name });
    }
  }
}
</script>

<style scoped>

</style>