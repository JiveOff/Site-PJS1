<template>
  <div>
    <header id="header" :class="classToUse">
      <h1 @click="smoothPageSwitch('Accueil');" style="cursor: pointer">{{ siteName }}</h1>
      <nav>
        <a class="menuButton" @click="toggleMenu()">Menu</a>
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
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if(this.$route.name == "Accueil") {
        this.classToUse = (window.scrollY > 0) ? "" : "alt";
      } else {
        this.classToUse = "";
      }
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
      this.smoothPageSwitch(name);
    },
    smoothPageSwitch(name) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.$router.push({ name });
    }
  },
  watch: {
    $route () {
      this.handleScroll()
    }
  }
}
</script>

<style scoped>

</style>