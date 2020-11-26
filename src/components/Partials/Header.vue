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
          <span v-for="category in categories" :key="category.id">
            <span v-if="category.articles.length == 1">
              <li><a @click="articleGo(category.articles[0].id)">{{ category.title }}</a></li>
            </span>
            <span v-else v-for="article in category.articles" :key="article.id">
              <li><a @click="articleGo(article.id)">{{ article.titre }}</a></li>
            </span>
          </span>
          <li><a @click="menuGo('A propos')">A propos</a></li>
        </ul>
        <a class="close" @click="toggleMenu()">Close</a>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from '@/db.js'

export default {
  name: "Header",
  props: ["siteProperties"],
  data() {
    return {
      classToUse: "alt",
      menuShowStyle: "",
      siteName: this.siteProperties.nomSite,
      categories: []
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
    },
    articleGo(id) {
      this.toggleMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if(this.$route.name === "Accueil") {
        this.$router.push({ path: 'article/' + id });
      } else {
        this.smoothPageSwitch("Accueil")
        setTimeout(() => {
          this.$router.push({ path: 'article/' + id });
        }, 500);
      }
    }
  },
  watch: {
    $route () {
      this.handleScroll()
    }
  },
  firestore: {
    categories: db.collection('categories')
  }
}
</script>

<style scoped>

</style>