<template>
  <div>
    <section id="wrapper">
      <header>
        <div class="inner">
          <h2 style="border: none;">A propos</h2>
        </div>
      </header>
      <div class="wrapper">
        <div class="inner">
          <section>
            <h1>Le site</h1>
            Ce site a été réalisé dans le cadre de notre projet de semestre 1 de DUT Informatique.<br />
            Le sujet général du site est la réalité virtuelle, une technologie d'avenir qui offre une très grande palette de possibilités.<br /><br />
            Nous avons utilisé plusieurs technologies open-source afin de réaliser ce projet:<br />
            <ul>
              <li><a href="https://vuejs.org">Vue.js</a> afin de développer notre propre CMS.</li>
              <li><a href="https://fr.wikipedia.org/wiki/Markdown">Markdown</a> afin de formater nos articles plus facilement.</li>
            </ul><br />
            Nous avons également utilisé plusieurs outils comme:<br /><br />
            <div style="text-align: center;">
              <div style="display: inline-block;width: 24%;"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" style="width: 30%; margin-bottom: 10px;"><br>Discord</div>
              <div style="display: inline-block;width: 24%;"><img src="https://i.jiveoff.fr/zumt4.png"  style="width: 30%; margin-bottom: 10px;"><br>GitHub</div>
              <div style="display: inline-block;width: 24%;"><img src="https://stackedit.io/static/landing/logo.svg"  style="width: 80%; margin-bottom: 10px;"><br>StackEdit</div>
              <div style="display: inline-block;width: 24%;"><img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"  style="width: 55%; margin-bottom: 10px;"><br>Firebase</div>
            </div><br />
            <h1>Membres de l'équipe</h1>
            <h3>Antoine</h3>
            <blockquote>Salut, je suis Antoine et j'ai 18 ans. La réalité virtuelle a toujours été pour moi une fascination et celle-ci n'a (presque) plus aucun secret pour moi.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/1' });">La créativité en VR</a><br />
            <br />
            <h3>Stefan</h3>
            <blockquote>Stefan. Je passe la majeure partie de mon temps à me perdre sur internet. La réalité virtuelle est une technologie que je suis de loin depuis quelques années et ce projet m'a permis de me pencher dessus.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/4' });">Les limites de la VR</a><br />
            <br />
            <h3>Thomas</h3>
            <blockquote>Salut, je m'appelle Thomas, j'ai 18 ans. Ce que j'aime c'est la cuisine et les jeux vidéos. Je connaissais déjà certains aspects de la réalité virtuelle tel que le jeux vidéo que j'ai pu tester chez un ami.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/2' });">La sociabilité en VR</a><br />
            <br />
            <h3>Yannick</h3>
            <blockquote>Coucou, je suis Yannick, 18 ans. Je n'ai jamais expérimenté la réalité virtuelle mais ce projet m'a permis de la découvrir.</blockquote>
            Articles rédigés: <a @click="smoothPageSwitch({ path: 'article/3' });">La culture de la VR</a>, <a @click="smoothPageSwitch({ path: 'article/5' });">La VR et la culture populaire</a><br />
            <br /><br />
            <h3>Zakaria</h3>
            <blockquote>Salut, je m'appelle Zakaria. Grace à ce projet, j'ai pu découvrir d'étonnantes choses sur le monde de la VR durant ce projet.</blockquote>
            Articles rédigés: <a @click="smoothPageSwitch({ path: 'article/6' });">Les jeux vidéos en VR</a>, <a @click="smoothPageSwitch({ path: 'article/7' });">Voyages et expériences</a><br />
            <br /><br />
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Background from '@/images/bg.gif'

export default {
  name: 'A propos',
  props: ["siteProperties"],
  methods: {
    smoothPageSwitch(obj) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.$router.push(obj);
    }
  },
  created() {
    this.$store.state.background = Background
    document.title = "A propos | " + this.siteProperties.nomSite
  }
}
</script>

<style scoped>
#wrapper > header {
  padding: 8em 0 0em 0;
  padding-top: 8em;
  padding-right: 0px;
  padding-bottom: 0em;
  padding-left: 0px;
}
</style>
