<template>
  <div>
    <Navbar />
    <div class="container">
      <h3 class="text-center">Liste des conversations</h3>

      <div class="card" style="width: 100%;">
        <div class="card-header">
          <font-awesome-icon icon="comments"></font-awesome-icon> Liste des conversations
        </div>
        <div class="card-body">
          <div class="card-text">
            <div class="row">
              <div v-for="(conversation, index) in conversations" class="col-6 col">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">{{ conversation.label }}</h4>
                    <h5 class="card-subtitle text-center">{{ conversation.topic }}</h5>
                    <div class="row">
                      <div class="col-6 col">
                        <a :href="'/conversation/' + conversation.id">
                          <button class="btn-block btn-secondary"><font-awesome-icon icon="hand-point-right"></font-awesome-icon> Rejoindre</button>
                        </a>
                      </div>
                      <div class="col-6 col">
                        <button class="btn-block btn-danger" @click="deleteConversation(conversation.id, conversation.label, index)">Supprimer <font-awesome-icon icon="trash-alt">
                          </font-awesome-icon></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <router-link to="/conversation/create"><button><font-awesome-icon icon="plus"></font-awesome-icon> Créer une conversation</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 20rem;
}

.container{
  margin-bottom: 2em;
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
        conversations: []
      }
    },
    mounted() {
      api.get('channels').then(response => {
          response.data.forEach(element => {
            this.conversations.push(element);
          });
      });
    },
    methods: {
      deleteConversation(id, label, index) {
        if(confirm('Voulez-vous vraiment supprimer : ' + label + ' ?')) {
          api.delete('channels/' + id).then(response => {
            this.conversations.splice(index, 1)
          }).catch(error => {
            alert("Vous n'êtes plus connecté !");
            this.$store.commit('logout');
            document.location.reload();
          });
        }
      },
    }
}
</script>
