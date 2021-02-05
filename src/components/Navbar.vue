<template>
    <div>
        <nav class="border split-nav">
            <div class="nav-brand">
                <h3><router-link to="/login">TD-Coop</router-link></h3>
            </div>
            <div class="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1">
                <label for="collapsible1">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </label>
                <div class="collapsible-body">
                    <ul v-if="isLogged" class="inline">
                        <li><router-link to="/"><font-awesome-icon icon="comments"></font-awesome-icon> Conversations</router-link></li>
                        <li><router-link to="/members"><font-awesome-icon icon="users"></font-awesome-icon> Membres</router-link></li>
                        <li><a @click="logout()" href="#">Déconnexion <font-awesome-icon icon="sign-out-alt"></font-awesome-icon></a></li>
                    </ul>
                    <ul v-else class="inline">
                        <li><router-link to="/login"><font-awesome-icon icon="sign-in-alt"></font-awesome-icon> Connexion</router-link></li>
                        <li><router-link to="/register"><font-awesome-icon icon="user-plus"></font-awesome-icon> S'inscrire</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
    nav {
        margin-bottom: 3em;
    }
</style>

<script>
export default {
  name: 'Navbar',

  data() {
      return {
          isLogged: false
      }
  },
  methods: {
      checkLogin() {
          if(!this.$store.state.member) {
              this.isLogged = false;
          } else {
              this.isLogged = true;
          }
      },
      logout() {
          this.$store.commit('logout');
          document.location.reload();
      }
  },
  beforeMount() {
      this.checkLogin();
  }
}
</script>