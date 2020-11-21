<template>
  <div>
    <section id="wrapper">
      <header>
        <div class="inner">
          <h2>{{ article.titre }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </header>
      <div class="wrapper">
        <div class="inner">
          <section>
            <VueShowdown :markdown="contenu" />
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from '@/db.js'

export default {
  name: 'Article',
  props: ["siteProperties"],
  data() {
    return {
      article: {},
      contenu: ""
    }
  },
  async created() {

    try {
      await this.$bind('article', db.collection('articles').doc(this.$route.params.id))
      if(!this.article) {
        this.$toastr.e("ID: " + this.$route.params.id, "Article inconnu.")
        this.$router.push({ name: 'Accueil' });
        return;
      }
      this.$store.state.background = this.article.image;
      document.title = this.article.titre + " | " + this.siteProperties.nomSite;
      this.showArticle(this.article.fileUrl);
    } catch(e) {
      this.$toastr.e(e, "Erreur")
    }

  },
  methods: {
    async showArticle(fileUrl) {
      const res = await fetch(fileUrl);
      this.contenu = await res.text();
    }
  },
  watch: {
    article: function () {
      this.showArticle(this.article.fileUrl)
    }
  }
}
</script>

<style scoped>
body {
  background-image: url("https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=");
}

img {
  width: 100%;
  margin-bottom: 50px;
}
</style>
