<template>
  <section id="banner">
    <div class="inner">
      <div class="logo"><span class="icon"><i class="fas fa-vr-cardboard"></i></span></div>
      <h2>{{ siteProperties.nomSite }}</h2>
      <p>
        <i>Projet PJS1 de DUT Informatique.</i>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: ["siteProperties"]
}
</script>

<style scoped>

</style>