<template>
  <div id="group">
    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
        <div class="box-title pl-3 pr-3 pt-2">
            <div class="d-flex align-items-top">
              <div class="mr-2">
                <h6 class="text-dark mb-0">Groups</h6>
              </div>
              <button type="button" class="btn btn-light btn-sm ml-auto mb-auto rounded-pill" @click="addGroupModalShow()">
                Create Group
              </button>
            </div>
        </div>

        <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Your groups</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Requested</a>
            </li>
        </ul>

        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="box-body border-bottom p-3" v-for="(item,index) in groups">
                    <div class="d-flex align-items-center osahan-post-header people-list">
                      <router-link :to="{ path: 'group-view', query: { id: item.id } }">
                          <div class="mr-3">
                              <img class="rounded-circle invitation-dropdown-list-image" :src="item.profile_image" :alt="item.id">
                          </div>
                      </router-link>

                        <div class="font-weight-bold mr-2">
                            <div class="text-truncate">{{ item.name }}</div>
                            <span class="small text-gray-500">25 members</span>
                        </div>
                        
                        <span class="ml-auto small">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm rounded-circle button-hover" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis fa-1x text-secondary"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                <button class="dropdown-item" type="button" @click="editGroupModalShow(item)"><i class="feather-edit"></i> Update</button>
                                <button class="dropdown-item" type="button" @click="destroyGroup(item)"><i class="feather-trash"></i> Delete</button>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="p-3 w-100">
                    Requested
                </div>
            </div>
        </div>
    </div>

    <!-- Create group Modal -->
      <div class="modal fade" id="addEditGroupModal" tabindex="-1" role="dialog" aria-labelledby="addEditGroupModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <form @submit.prevent="groupEditMode ? update() : store()">
          <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="addEditGroupModalLabel">{{ groupEditMode ? 'Update' : 'Create' }} group</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="d-flex align-items-top mb-1">
                  <div class="mr-2">
                    * Indicates required
                  </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="background_image" class="mb-0">Background Image</label>
                            <input type="file" id="file" class="form-control" @change="onBackgroundImageChange">
                            <img class="mt-1" :src="backgroundImagePreview" style="width: 100px;" alt="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="profile_image" class="mb-0">Profile Image</label>
                            <input type="file" id="file" class="form-control" @change="onProfileImageChange">
                            <img class="mt-1" :src="profileImagePreview" style="width: 100px;" alt="">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="name" class="mb-0">Group Name*</label>
                    <input v-model="form.name" type="text" name="name" class="form-control" placeholder="Enter group name">
                </div>

                <div class="form-group">
                  <label for="description" class="mb-0">Description*</label>
                  <Editor
                    v-model="form.description"
                    automatic_uploads="true"
                    api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                    :init="{
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | blocks | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',

                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                    }"
                  />
                </div>

                <div class="form-group">
                    <label for="rules" class="mb-0">Group rules</label>
                    <Editor
                      v-model="form.rules"
                      automatic_uploads="true"
                      api-key="d96q2ppkalbf7qegddzixp72gwn2ivlzvdnzxor2th9jnen2"
                      :init="{
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',

                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                      }"
                    />
                </div>

                <div class="form-group">
                    <label for="permissions" class="mb-0">Permissions</label>
                    <div class="form-check">
                        <input v-model="form.invite_by_member" class="form-check-input" type="checkbox" true-value="Yes" false-value="No">
                        <label class="form-check-label" for="defaultCheck1">
                            Allow members to invite their connections
                        </label><br>
                        <small class="text-muted">If disabled, only admins will be able to invite 1st degree connections to the group. All requests to join will still require admin approval.</small>
                    </div>
                    <div class="form-check">
                        <input v-model="form.review_by_admin" class="form-check-input" type="checkbox" true-value="Yes" false-value="No">
                        <label class="form-check-label" for="defaultCheck1">
                        Require new posts to be reviewed by admins
                        </label><br>
                        <small class="text-muted">If enabled, members’ posts will require admin approval within 14 days before they become visible to others.</small>
                    </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button :disabled="form.busy" type="submit" class="btn btn-success"> {{ groupEditMode ? 'Update' : 'Create' }}</button>
              </div>
            </div>
          </div>
        </form>
      </div>

    <vue-progress-bar></vue-progress-bar>
    <notifications />
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";
import Editor from '@tinymce/tinymce-vue';

export default {
    name: "Group",
    components: {
      Button,
      HasError,
      AlertError,
      AlertErrors,
      AlertSuccess,
      Editor,
    },

    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            auth_id: `${localStorage.getItem('auth_id')}`,
            groupEditMode: false,
            backgroundImagePreview: '',
            profileImagePreview: '',
            groups: [],

            form: new Form({
                id: "",
                user_id: "",
                user_type: "",
                background_image: "",
                profile_image: "",
                name: "",
                description: "",
                rules: "",
                invite_by_member: "No",
                review_by_admin: "No",
            }),
        };
    },

    mounted() {
        this.getData();
    },

    methods: {
        getData() {
            axios.get(`${this.backendUrl}/group`, {
                params: {
                    user_id: this.auth_id,
                    user_type: 'alumni',
                },
            })
            .then((response) => {
                this.groups = response.data.data
                // console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
        },

        addGroupModalShow() {
            this.groupEditMode = false;
            this.form.user_id = this.auth_id;
            this.form.user_type = 'alumni';
            $("#addEditGroupModal").modal("show");
        },

        onBackgroundImageChange(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onloadend = (file) => {
                this.backgroundImagePreview = reader.result;
                this.form.background_image = reader.result;
            }
            reader.readAsDataURL(file);
        },

        onProfileImageChange(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onloadend = (file) => {
                this.profileImagePreview = reader.result;
                this.form.profile_image = reader.result;
            }
            reader.readAsDataURL(file);
        },

        store() {
            this.$Progress.start();
            this.form.busy = true;
            this.form.post(`${this.backendUrl}/group`, {
                params: {
                    user_id: this.form.user_id,
                    user_type: this.form.user_type,
                },
            })
            .then((response) => {
                this.getData();
                $("#addEditGroupModal").modal("hide");
                if (this.form.successful) {
                    this.$Progress.finish();
                    this.$notify({ type: "success", title: "Success", text: response.data.data.message });
                    this.form.reset()
                    $('#file').val('')
                    this.backgroundImagePreview = ''
                    this.profileImagePreview = ''
                } else {
                    this.$Progress.fail();
                    this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
                }
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        editGroupModalShow(group) {
            this.groupEditMode = true;
            this.form.user_id = this.auth_id;
            this.form.user_type = 'alumni';
            this.form.fill(group);
            this.form.background_image = '';
            this.form.profile_image = '';
            this.backgroundImagePreview = group.background_image;
            this.profileImagePreview = group.profile_image;
            $("#addEditGroupModal").modal("show");
        },

        update() {
          this.$Progress.start();
          this.form.busy = true;
          this.form.put(`${this.backendUrl}/group/` + this.form.id)
            .then((response) => {
              this.getData();
              $("#addEditGroupModal").modal("hide");
              if (this.form.successful) {
                this.$Progress.finish();
                this.$notify({ type: "success", title: "Success", text: response.data.data.message });
                this.form.reset()
                $('#file').val('')
                this.backgroundImagePreview = ''
                this.profileImagePreview = ''
              } else {
                this.$Progress.fail();
                this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
              }
            })
            .catch((e) => {
              this.$Progress.fail();
              console.log(e);
            });
        },

        destroyGroup(group) {
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
                axios.delete(`${this.backendUrl}/group/` + group.id)
                  .then((response) => {
                    this.$swal.fire("Deleted!", response.data.message, "success");
                    this.getData();
                  });
              }
            });
        },
    },
};
</script>

<style>
    .invitation-dropdown-list-image {
        height: 5rem;
        width: 5rem;
    }
</style>