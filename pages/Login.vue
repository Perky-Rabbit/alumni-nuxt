<template>
  <div id="login">
    <div class="register-area pt-100 pb-70">
      <div class="container">
        <div class="shadow-none p-3 mb-5 bg-light rounded">
          <form @submit.prevent="submit" @keydown="form.onKeydown($event)">

            <div v-if="form.progress" class="text-center">
              Progress: {{ form.progress.percentage }}%
            </div>

            <AlertError :form="form" message="There were some problems with your input." />

            <div class="row mb-3">
              <label for="email" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.email" type="text" name="email" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Your valid email address" />
                <HasError :form="form" field="email" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="password" class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-7 m-auto">
                <input v-model="form.password" name="password" type="password" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter password" />
                <HasError :form="form" field="password" />
              </div>
            </div>

            <div class="col-md-12 text-center">
              <button type="submit" class="default-btn" :disabled="form.busy">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
export default {
  name: "Login",
  components: {
    Button,
    HasError,
    AlertError
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      form: new Form({
        email: "",
        password: "",
      }),
    }
  },

  methods: {
    submit(){
      this.form.busy = true
      this.form.post(`${this.backendUrl}/alumni/login`)
        .then(response => {
            console.log(response);
              localStorage.setItem('alumniLoggedInToken',response.data.token)
              localStorage.setItem('auth_id',response.data.auth_id)
              if(this.form.successful){
                  this.$router.push({name: 'dashboard'})
              }else{
                  this.$router.push({name: 'login'})
              }
          })
          .catch(e => {
              console.log(e)
          })
    }
  }
}
</script>

<style>

</style>