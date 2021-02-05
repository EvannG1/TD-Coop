<template>
    <div>
        <Navbar/>
        <div class="container">
        <h1 class="text-center">Page de connexion</h1>
        <form @submit.prevent="login()">
            <div class="form-group">
                <div class="form-group">
                    <input v-model="email" class="input-block" type="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input v-model="password" class="input-block" type="password" placeholder="Mot de passe">
                </div>
                <button class="btn-block">Connexion</button>
            </div>
        </form>
        </div>
    </div>
</template>

<style lang="scss">
    button {
        margin-top: 3em;
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
            email: 'test@test.fr',
            password: 'test'
        }
    },
    methods : {
        login() {
            api.post('members/signin', {
                email: this.email,
                password: this.password
            }).then(response => {
                this.$store.commit('setMember', response.data.member);
                this.$store.commit('setToken', response.data.token);
                this.$router.push('/');
            }).catch(error => {
                alert(error.response.data.message)
            });
        }
    }
}
</script>