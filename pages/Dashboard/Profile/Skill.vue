<template>
  <div id="skill">
    <div class="row">
      <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3">
            <div class="d-flex align-items-top">
              <div class="mr-2 d-flex">
                <router-link :to="{ name: 'profile' }"><b><i class="fa-solid fa-arrow-left"></i></b></router-link>
                <h6 class="text-dark mb-0 pl-2">Skills</h6>
              </div>

              <div class="img-fluid ml-auto mb-auto">
                <button type="button" class="btn btn-light btn-sm float-right rounded-circle" @click="updateSkillInfoModalShow(alumni)">
                  <i class="fa fa-add"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="box-body p-3 border-bottom" v-for="item in skills" >
            <div class="d-flex align-items-top job-item-header">
              <h5 class="font-weight-bold text-dark mb-0">{{ item.title }}</h5>
              <button type="button" class="btn btn-sm btn-outline-danger ml-auto mb-auto rounded-circle" @click="destroySkillInfo(alumni,item)">
                <i class="fa-light fa fa-trash"></i>
              </button>
            </div>
            <small class="text-muted">{{ item.description }}</small>
          </div>
        </div>
      </main>

      <aside class="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3">
            <h6 class="m-0">People also viewed</h6>
          </div>

          <div class="box-body p-3">
            <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
              <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" :src="profile_image_url" :alt="alumni.id">
                <div class="status-indicator bg-success"></div>
              </div>
              <div class="font-weight-bold mr-2">
                <div class="text-truncate">Shohel Rana</div>
                <div class="small text-gray-500">East West University
                </div>
              </div>
              <span class="ml-auto"><button type="button" class="btn btn-light btn-sm">Connent</button>
              </span>
            </div>

            <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
              <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" :src="profile_image_url" :alt="alumni.id">
                <div class="status-indicator bg-success"></div>
              </div>
              <div class="font-weight-bold mr-2">
                <div class="text-truncate">Shohel Rana</div>
                <div class="small text-gray-500">East West University
                </div>
              </div>
              <span class="ml-auto"><button type="button" class="btn btn-light btn-sm">Connent</button>
              </span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Skill Info Modal part -->
      <div class="modal fade" id="updateSkillInfoModal" tabindex="-1" role="dialog" aria-labelledby="updateSkillInfoModalLabel" aria-hidden="true">
        <form @submit.prevent="updateSkillInfo()">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="updateSkillInfoModalLabel">Add Skill</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              
              <div class="modal-body">
                <label for="skill_ids" class="mb-0">Skill</label>
                <div class="form-group d-flex">
                  <!-- <select v-model="skillInfoForm.skill_ids" class="form-select form-control">
                    <option value="">Select One</option>
                    <option v-for="item in dependentSkills" :value="item.id">{{ item.title }}</option>
                  </select> -->

                  <!-- <Multiselect
                    v-model="skillInfoForm.skill_ids"
                    mode="tags"
                    placeholder="Select skills"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="false"
                    :options="async function(query) {
                      return await getDependentSkills(query) // check JS block for implementation
                    }"
                  /> -->

                  <Multiselect
                    v-model="skillInfoForm.skill_ids"
                    mode="tags"
                    placeholder="Select skills"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="false"
                    :options="dependentSkills"
                  />

                  <button type="button" class="add-new-input-group text-secondary" @click="createGlobalSkillModalShow()">
                    <i class="fa fa-plus-circle"></i>
                  </button>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button :disabled="skillInfoForm.busy" type="submit" class="btn btn-success">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="modal fade" id="createGlobalSkillModal" tabindex="-1" role="dialog" aria-labelledby="createGlobalSkillModalLabel" aria-hidden="true">
        <form @submit.prevent="createGlobalSkill()">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="createGlobalSkillModalLabel">Create Skill</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              
              <div class="modal-body">
                <div class="form-group">
                  <label for="title" class="mb-0">Title</label>
                  <input v-model="globalSkillForm.title" type="text" name="title" class="form-control" placeholder="Add title">
                </div>

                <div class="form-group">
                    <label for="description" class="mb-0">Description</label>
                    <textarea v-model="globalSkillForm.description" class="form-control" rows="3"
                  cols="50" name="description" placeholder="Enter description ..."></textarea>
                </div>

                <div class="form-group">
                    <label for="status" class="mb-0">Status</label>
                    <select v-model="globalSkillForm.status" class="form-select form-control">
                      <option value="">Please Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button :disabled="globalSkillForm.busy" type="submit" class="btn btn-success">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";

import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

export default {
  name: "Skill",
  components: {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
    Multiselect
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      alumni: '',
      profile_image_url: '',
      skills: [],
      dependentSkills: [],

      // skill info part
      globalSkillForm: new Form({
        id: "",
        title: "",
        description: "",
        status: "",
      }),

      valueFromSkillInfo: "skill_info",
      skillInfoForm: new Form({
        id: "",
        skill_ids: [],
      }),
    };
  },

  mounted() {
    console.log("Component mounted.");
    this.getDependentData();
    this.getData();
  },

  methods: {
    // async getDependentSkills(){
    //   const res = await fetch(`${this.backendUrl}/skill`);
    //   const data = await res.json();

    //   return data.data.map((item) => {
    //     return { value: item.id, label: item.title }
    //   })
    // },

    getDependentData() {
      axios.get(`${this.backendUrl}/skill`)
        .then((response) => {
          let data =  response.data.data.map((item) => {
            return { value: item.id, label: item.title }
          })
          this.dependentSkills = data;
        })
        .catch((e) => {
          this.$Progress.fail();
        });
    },

    getData() {
      axios.get(`${this.backendUrl}/alumni/${localStorage.getItem('auth_id')}`)
        .then((response) => {
          this.alumni = response.data.alumni;
          this.profile_image_url = response.data.image_url;
          this.skills = response.data.skills;
          // console.log(this.district);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // skill info part
    createGlobalSkillModalShow() {
      $("#createGlobalSkillModal").modal("show");
    },

    createGlobalSkill() {
      this.$Progress.start()
      this.globalSkillForm.busy = true
      this.globalSkillForm.post(`${this.backendUrl}/skill`)
          .then(response => {
              this.getDependentData()
              $('#createGlobalSkillModal').modal('hide')
              if(this.globalSkillForm.successful){
                  this.$Progress.finish()
                  this.$notify({ type: "success", title: "Success", text: "Skill Added" });
              }else{
                  this.$Progress.fail()
                  this.$notify({type: "error", title: "Error", text: 'Something went wrong try again later'})
              }
          })
          .catch(e => {
              this.$Progress.fail()
              console.log(e)
          })
    },

    updateSkillInfoModalShow(alumni) {
      this.skillInfoForm.fill(alumni);
      $("#updateSkillInfoModal").modal("show");
    },

    updateSkillInfo() {
      this.$Progress.start();
      this.skillInfoForm.busy = true;
      this.skillInfoForm.put(`${this.backendUrl}/alumni/` + this.skillInfoForm.id, {
        params: {
          valueFrom: this.valueFromSkillInfo,
        },
      })
      .then((response) => {
        this.getData();
        $("#updateSkillInfoModal").modal("hide");
        if (this.skillInfoForm.successful) {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: "Success",
            text: "Skill info updated",
          });
        } else {
          this.$Progress.fail();
          this.$notify({
            type: "error",
            title: "Error",
            text: "Something went wrong try again later",
          });
        }
        })
        .catch((e) => {
          this.$Progress.fail();
          console.log(e);
        });
    },

    destroySkillInfo(alumni, item) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${this.backendUrl}/alumni/` + alumni.id, {
              params: {
                skill_id: item.id
              }
            })
              .then((response) => {
                this.$swal.fire("Deleted!", response.data.message, "success");
                this.getData();
              });
          }
        });
    }
  },
};
</script>

<style>
  .add-new-input-group{
    display: flex;
    align-items: center;
    padding: 0.47rem 0.75rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #eff2f7;
    border: 1px solid #ced4da;
  }
</style>
