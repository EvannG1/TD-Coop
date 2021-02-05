<template>
  <div>
    <Navbar />
    <div class="container">
      <h3 class="text-center">Liste des conversations</h3>

      <div class="card" style="width: 100%;">
        <div class="card-header"><font-awesome-icon icon="comments"></font-awesome-icon> Liste des conversations</div>
        <div class="card-body">
          <div class="card-text">
            <div class="row">
              <div class="col-6 col">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">Développement de MediaScreen</h4>
                    <h5 class="card-subtitle text-center">Superbe description</h5>
                    <div class="row">
                      <div class="col-6 col">
                        <button class="btn-block btn-secondary"><font-awesome-icon icon="hand-point-right"></font-awesome-icon> Rejoindre</button>
                      </div>
                      <div class="col-6 col">
                        <button class="btn-block btn-danger">Supprimer <font-awesome-icon icon="trash-alt"></font-awesome-icon></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">Conversation entre potes</h4>
                    <h5 class="card-subtitle text-center">Superbe description</h5>
                    <div class="row">
                      <div class="col-6 col">
                        <button class="btn-block btn-secondary"><font-awesome-icon icon="hand-point-right"></font-awesome-icon> Rejoindre</button>
                      </div>
                      <div class="col-6 col">
                        <button class="btn-block btn-danger">Supprimer <font-awesome-icon icon="trash-alt"></font-awesome-icon></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button><font-awesome-icon icon="plus"></font-awesome-icon> Créer une conversation</button>
        </div>
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
}
</script>
