<template>
  <div>
    <Navbar />
    <div class="container">
      <h3 class="text-center">Liste des membres</h3>

      <div class="card" style="width: 100%;">
        <div class="card-header"><font-awesome-icon icon="users"></font-awesome-icon> Liste des membres</div>
        <div class="card-body">
          <div class="card-text">
            <table>
              <thead>
                <tr>
                  <th>Nom complet</th>
                  <th>Adresse email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(member, index) in members">
                  <td>{{ member.fullname }}</td>
                  <td>{{ member.email }}</td>
                  <td><font-awesome-icon class="trash" icon="trash" @click="deleteMember(member.id, member.fullname, index)"></font-awesome-icon></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 20rem;
}
.trash:hover {
  color: #FF0000;
  transition: 0.3s;
  cursor: pointer;
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
        members: []
      }
    },
    mounted() {
      api.get('members').then(response => {
          response.data.forEach(element => {
            this.members.push(element);
          });
      });
    },
    methods: {
      deleteMember(id, fullname, index) {
        if(confirm('Voulez-vous vraiment supprimer : ' + fullname + ' ?')) {
          api.delete('members/' + id).then(response => {
            this.members.splice(index, 1)
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
