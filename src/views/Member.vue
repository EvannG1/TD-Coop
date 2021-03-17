<template>
  <div>
    <Navbar />
    <div class="container">
      <h3 class="text-center">Page de profil d'un membre</h3>
      <div class="text-center">
          <p>Nom d'utilisateur : {{ fullname }}</p>
          <p>Adresse mail : {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 20rem;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
        Navbar
    },
    data() {
      return {
        fullname: null,
        email: null
      }
    },
    mounted() {
      api.get('members').then(response => {
          response.data.forEach(element => {
            if(element.id == this.$route.params.id) {
                this.fullname = element.fullname;
                this.email = element.email;
            }
          });
      });
    }
}
</script>
