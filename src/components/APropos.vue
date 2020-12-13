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
              <div style="display: inline-block;width: 24%;"><img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"  style="width: 25%; margin-bottom: 10px;"><br>Firebase</div>
            </div><br />
            <h1>Membres de l'équipe</h1>
            <h3>Antoine</h3>
            <blockquote>Salut, je suis Antoine et j'ai 18 ans. La réalité virtuelle a toujours été pour moi une fascination et celle-ci n'a (presque) plus aucun secret pour moi.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/1' });">La créativité en VR</a><br />
            <br />
            <h3>Stefan</h3>
            <blockquote>Hello, je m'appelle Stefan et je passe la majeure partie de mon temps à me perdre sur internet. La réalité virtuelle est une technologie que je suis de loin depuis quelques années et ce projet m'a permis de me pencher dessus.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/4' });">Les limites de la VR</a><br />
            <br />
            <h3>Thomas</h3>
            <blockquote>Salut, je m'appelle Thomas, j'ai 18 ans. Ce que j'aime c'est la cuisine et les jeux vidéos. Je connaissais déjà certains aspects de la réalité virtuelle tel que le jeu vidéo que j'ai pu tester chez un ami.</blockquote>
            Article rédigé: <a @click="smoothPageSwitch({ path: 'article/2' });">La sociabilité en VR</a><br />
            <br />
            <h3>Yannick</h3>
            <blockquote>Coucou, je suis Yannick, 18 ans. Je n'ai jamais expérimenté la réalité virtuelle mais ce projet m'a permis de la découvrir.</blockquote>
            Articles rédigés: <a @click="smoothPageSwitch({ path: 'article/3' });">La culture de la VR</a>, <a @click="smoothPageSwitch({ path: 'article/5' });">La VR et la culture populaire</a><br />
            <br /><br />
            <h3>Zakaria</h3>
            <blockquote>Salut, je m'appelle Zakaria. Grace à ce projet, j'ai pu découvrir d'étonnantes choses sur le monde de la VR durant ce projet.</blockquote>
            Articles rédigés: <a @click="smoothPageSwitch({ path: 'article/6' });">Les jeux vidéos en VR</a>, <a @click="smoothPageSwitch({ path: 'article/7' });">Voyages et expériences</a><br />
            <br />
            <h1>Sources</h1>
            <h3>La créativité en VR</h3>
            <ul>
              <li><a href="https://www.oculus.com/experiences/rift/section/468073640285903/?locale=fr_FR#/?_k=0n22m4">Expériences Arts & créativité Oculus Store</a></li>
              <li><a href="https://www.tiltbrush.com/">Site de Tilt Brush</a></li>
              <li><a href="https://www.oculus.com/medium/?locale=fr_FR">Site de Oculus Medium</a></li>
              <li><a href="https://www.vr-academie.fr/la-realite-virtuelle-au-service-de-lart/">La réalité virtuelle au service de l’art en trois dimensions</a></li>
              <li><a href="https://www.realite-virtuelle.com/art-vr-1812/">Art VR – La réalité virtuelle comme medium de création</a></li>
              <li><a href="https://www.vr-academie.fr/la-realite-virtuelle-au-service-de-lart/">La réalité virtuelle au service de l’art en trois dimensions</a></li>
              <li><a href="https://www.youtube.com/watch?v=MaTxlwSTXYk">Painting in VR - Google Tilt Brush</a></li>
              <li><a href="https://www.minecraft.net/fr-fr/vr">Site de Minecraft VR</a></li>
              <li><a href="http://www.vivecraft.org/">Site du mod ViveCraft</a></li>
            </ul>
            <br />
            <h3>La sociabilité en VR</h3>
            <ul>
              <li><a href="https://store.steampowered.com/app/438100/VRChat/">Vitrine Steam de VRChat</a></li>
              <li><a href="https://www.realite-virtuelle.com/vrchat-harcelement-sexuel-1101/">Le harcèlement sexuel pose de plus en plus de problèmes...</a></li>
              <li><a href="https://hello.vrchat.com/">Site de VRChat</a></li>
              <li><a href="https://www.realite-virtuelle.com/vrchat-record-reconfinement/">VRChat bat son record avec 24 000 utilisateurs simultanés pour le re-confinement</a></li>
              <li><a href="https://en.wikipedia.org/wiki/VRChat">Page Wikipédia de VRChat</a></li>
              <li><a href="https://www.lemonde.fr/pixels/article/2020/02/01/plongee-dans-vrchat-le-reseau-social-turbulent-en-realite-virtuelle_6028066_4408996.html">Plongée dans VRChat: Le réseau social turbulent en réalité virtuelle</a></li>
              <li><a href="https://www.realite-virtuelle.com/vrchat-tout-savoir-social-vr/">Tout savoir sur le social en VR</a></li>
              <li><a href="https://hitek.fr/actualite/joueur-vrchat-salle-chat-malaise-vraie-vie_15166">VRChat: un joueur fait un vrai malaise, la communauté se mobilise pour lui venir en aide</a></li>
            </ul>
            <br />
            <h3>La culture et la VR</h3>
            <ul>
              <li><a href="https://culturevr.fr/category/cinema-et-interactif/">Cinéma et interactif en VR</a></li>
              <li><a href="https://www.youtube.com/watch?v=nyJUza39ELE">"What Virtual Reality is like for someone who doesn't play games"</a></li>
              <li><a href="https://www.v-cult.com/blog/histoire-de-la-realite-virtuelle/">Histoire de la réalité virtuelle</a></li>
              <li><a href="https://fr.wikipedia.org/wiki/Casque_de_r%C3%A9alit%C3%A9_virtuelle">Page Wikipédia sur les casques de réalité virtuelle</a></li>
              <li><a href="https://fr.wikipedia.org/wiki/R%C3%A9alit%C3%A9_virtuelle">Page Wikipédia sur la réalité virtuelle</a></li>
            </ul>
            <br />
            <h3>Les limites de la VR</h3>
            <ul>
              <li><a href="https://www.cnc.fr/professionnels/actualites/le-cnc-devoile-une-etude-inedite-sur-la-realite-virtuelle-et-les-experiences-immersives_978284">Etude inédite sur la réalité virtuelle du CNC</a></li>
              <li><a href="https://www.360natives.com/pc-vr-ready-27042018/">PC VR Ready : quel PC choisir pour la réalité virtuelle ?</a></li>
              <li><a href="https://www.numerama.com/tech/126854-et-vous-quel-espace-au-sol-aurez-vous-pour-la-realite-virtuelle.html">Et vous, quel espace au sol aurez-vous pour la réalité virtuelle ?</a></li>
              <li><a href="https://realitevirtual.wordpress.com/2017/01/30/dossier-les-risques-et-les-limites-de-la-realite-virtuelle/">Les risques et les limites de la réalité virtuelle</a></li>
              <li><a href="https://www.alain-bensoussan.com/avocats/droit-applicable-a-la-realite-virtuelle/2017/05/16/">Règlementation : le droit applicable à la réalité virtuelle</a></li>
              <li><a href="https://www.realite-virtuelle.com/droit-realite-virtuelle-augmentee/">Réalité virtuelle et réalité augmentée : Un droit en construction</a></li>
            </ul>
            <br />
            <h3>Les loisirs en VR</h3>
            <ul>
              <li><a href="https://thinkmobiles.com/blog/fr/top-9-experiences-de-realite-virtuelle/">Top 9 expériences de réalité virtuelle</a></li>
              <li><a href="https://virtualyz.fr/v-sport-comment-la-realite-virtuelle-donne-une-nouvelle-dimension-au-e-sport/">V-Sport - Comment la VR donne une nouvelle dimension au E-Sport ?</a></li>
              <li><a href="https://www.realite-virtuelle.com/top-fps-vr/">FPS VR : Top des meilleurs jeux de tir et shooters en réalité virtuelle</a></li>
              <li><a href="https://store.steampowered.com/app/555160/Pavlov_VR/">Vitrine Steam de Pavlov</a></li>
              <li><a href="https://virtual-guru.com/actualites/realite-virtuelle-et-tourisme-que-se-passe-t-il-deja-est-ce-lavenir/">Réalité virtuelle et tourisme : Que se passe-t-il déjà ? Est-ce l’avenir ?</a></li>
              <li><a href="http://www.2vr-virtualreality.com/2019/08/01/la-realite-virtuelle-au-service-du-tourisme-culture-musee-professionnels-voyage-2-vr/">La réalité virtuelle au service du tourisme</a></li>
              <li><a href="https://www.francepanorama.fr/fonctionnement-camera-360/">Fonctionnement d'une caméra 360</a></li>
              <li><a href="https://arvr.google.com/earth/">Google Earth VR</a></li>
              <li><a href="https://www.samsung.com/fr/wearables/gear-360/">Gear 360</a></li>
              <li><a href="https://www.univrstudio.com/">Formations en réalité virtuelle</a></li>
            </ul>
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
