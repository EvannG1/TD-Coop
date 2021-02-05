<template>
  <div>
    <div id="app" v-if="apiOk">
      <router-view />
    </div>
    <div v-else>
      Impossible de joindre l'API
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        apiOk:false
    }
  },
  mounted() {
    console.log("L'app est démarée")

    api.get('ping').then(response => {
      this.apiOk = true;
      console.log("API fonctionnelle");
      if(!this.$store.state.member) {
        this.$router.push('/login');
      }
    }).catch(error => {
      console.log("API non fontionnelle");
    })
  }
}
</script>
<style lang="scss">
a {
  background-image: none!important;
}
</style>
