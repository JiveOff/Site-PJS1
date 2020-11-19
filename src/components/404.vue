<template>
  <img src="https://media.tenor.com/images/4f8f274f4d7395e1dcfe70f02e692a57/tenor.gif" alt="Typing Cat">
</template>

<script>
export default {
  name: "404",
  mounted() {
    this.$toastr.e("Page introuvable.", "404")
    this.$router.push({ name: "Accueil" })
  }
}
</script>

<style scoped>
</style>