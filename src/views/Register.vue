<template>
    <div>
        <Navbar />
        <div class="container">
            <h1 class="text-center">Page d'inscription</h1>
            <form @submit.prevent="createAccount()">
                <div class="form-group">
                    <input v-model="fullname" class="input-block" type="text" placeholder="Nom d'utilisateur">
                </div>
                <div class="form-group">
                    <input v-model="email" class="input-block" type="email" placeholder="Adresse email">
                </div>
                <div class="form-group">
                    <input v-model="password" class="input-block" type="password" placeholder="Mot de passe">
                </div>
                <button class="btn-block">Créer mon compte</button>
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
    components: { Navbar },
    data() {
        return {
            fullname: '',
            email: '',
            password: ''
        }
    },
    methods : {
        createAccount() {
            api.post('members',{
                fullname: this.fullname,
                email: this.email,
                password: this.password
            }).then(response => {
                alert('Votre compte a été créé !');
                this.$router.push('login');
            }).catch(error => {
                alert(error.response.data.message)
            });
        }
    }
}
</script>