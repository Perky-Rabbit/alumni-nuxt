<template>
  <div id="register">
    <div class="register-area pt-100 pb-70">
      <div class="container">
        <div class="shadow-none p-3 mb-5 bg-light rounded">
          <form @submit.prevent="store()">
            <div class="row mb-3">
              <label for="ewu_id_no" class="col-sm-3 col-form-label">EWU id number</label>
              <div class="col-sm-7 m-auto">
                <input type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Enter Your University ID" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="title" class="col-sm-3 col-form-label">Title</label>
              <div class="col-sm-7 m-auto">
                <input type="text" class="form-control shadow-lg bg-white rounded"
                  placeholder="Add Title" />
              </div>
            </div>

            <div class="col-md-12 text-center">
              <button type="submit" class="default-btn">
                Submit<span></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  layout: 'home',
  created() {
    useHead({
      title: 'Home | EWU',
      meta: [
        {name: 'keywords', content: 'Nuxt 3'},
        {name: 'description', content: 'Nuxt 3'}
      ],
    })
  },
};
</script>
