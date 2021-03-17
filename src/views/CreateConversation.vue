<template>
  <div>
    <Navbar />
    <div class="container">
      <h3 class="text-center">Création d'une conversation</h3>
      <form @submit.prevent="createConversation()">
            <div class="form-group">
                <div class="form-group">
                    <input v-model="topic" class="input-block" type="text" placeholder="Nom de la conversation">
                </div>
                <div class="form-group">
                    <input v-model="label" class="input-block" type="text" placeholder="Thème de la conversation">
                </div>
                <button class="btn-block">Créer la conversation</button>
            </div>
      </form>
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
        label: null,
        topic: null
      }
    },
    methods : {
        createConversation() {
            api.post('channels', {
                label: this.label,
                topic: this.topic
            }).then(response => {
                alert('La conversation a bien été créée !');
                this.$router.push('/');
            }).catch(error => {
                alert(error.response.data.message)
            });
        }
    }
}
</script>
