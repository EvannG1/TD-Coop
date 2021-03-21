<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="card">
                <div class="card-header"><font-awesome-icon icon="comments"></font-awesome-icon> Conversation : {{ conversation_name }}</div>
                <div class="card-body">
                    <div v-for="(message, index) in messages" class="messageBlock">
                        <div class="author">
                            {{ message.member_id }}
                        </div>
                        <div class="message">
                            {{ message.message }}
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <form @submit.prevent="postMessage()">
                        <input v-model="messageInput" class="inputMessage" type="text" placeholder="Entrer un message...">
                        <button class="btn-block" style="margin-top: 1em;">Envoyer le message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
  width: 100%;
}

.inputMessage {
    width: 100%;
}

.card-header {
    text-align: center;
}

.author {
    font-style: italic;
    color: #0071de;
}

.messageBlock {
    margin-bottom: 1em;
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
        conversation_id: this.$route.params.id,
        conversation_name: null,
        messageInput: null,
        messages: []
      }
    },
    mounted() {
      api.get('channels/' + this.conversation_id).then(response => {
          this.conversation_name = response.data.label;
      });
      api.get('channels/' + this.conversation_id + '/posts').then(response => {
          response.data.forEach(element => {
            this.messages.push(element);
          });
      });
    },
    methods : {
        postMessage() {
            api.post('channels/' + this.conversation_id + '/posts', {
                message: this.messageInput
            }).catch(error => {
                alert(error.response.data.message)
            });
        }
    }
}
</script>