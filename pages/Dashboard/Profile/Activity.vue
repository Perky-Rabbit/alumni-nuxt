<template>
  <div id="activity">
    <div class="row">
      <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div class="box shadow-sm rounded bg-white osahan-share-post">
          <div class="box-title pl-3 pr-3 pt-3">
            <div class="d-flex align-items-top">
              <div class="mr-2">
                <h5 class="text-dark mb-0">My Activity</h5>
              </div>

              <!-- <div class="img-fluid ml-auto mb-auto">
                <button type="button" class="btn btn-light btn-sm float-right rounded-pill" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to your post">
                  <i class="fa fa-add"></i> Start a post
                </button>
              </div> -->
            </div>
          </div>

          <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All activity</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Posts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Articles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Documents</a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <!-- My activity part start -->
            <div class="box shadow-sm rounded bg-white mb-3">
              <div v-for="(item,index) in newsFeeds" class="box shadow-sm rounded bg-white osahan-post">
                <div class="pl-3 pr-3 pt-1 pb-1 d-flex align-items-center border-bottom osahan-post-header">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" :src="item.alumni.alumni.source" :alt="item.alumni.id" />
                  </div>

                  <div class="font-weight-bold">
                    <div class="text-truncate">{{ item.alumni.first_name }} {{ item.alumni.middle_name }} {{ item.alumni.last_name }}</div>
                    <div class="small text-gray-500">{{ item.alumni.designation_department }} at {{ item.alumni.organization }}</div>
                    <div class="small text-gray-500">{{ item.created_at }}</div>
                  </div>
                  
                  <span class="ml-auto small">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm rounded-circle button-hover" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa-solid fa-ellipsis fa-1x text-secondary"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <button class="dropdown-item" type="button" @click="editPostModalShow(item)"><i class="feather-edit"></i> Edit</button>
                          <button class="dropdown-item" type="button"><i class="feather-trash"></i> Delete</button>
                        </div>
                      </div>
                  </span>
                </div>

                <div class="p-3 border-bottom osahan-post-body">
                  <span v-if="!readMore[item.id]">{{item.body.substring(0, 200) + "..."}}</span>
                  <span v-if="readMore[item.id]">{{item.body}}</span>
                  <span @click="showMore(item.id)" v-if="!readMore[item.id]" class="btn btn-sm underline-on-hover pt-0 text-gray-500">show more</span>
                  <span @click="showLess(item.id)" v-if="readMore[item.id]" class="btn btn-sm underline-on-hover pt-0 text-gray-500">show less</span>

                  <!-- image show start -->
                  <table class="table-bordered table-active table-responsive">
                    <tbody v-if="item.images.length == 1">
                      <tr>
                        <th>
                          <img class="img-fluid" :src="item.images[0].source" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                    </tbody>

                    <tbody v-if="item.images.length == 2">
                      <tr>
                        <th v-for="(image,index) in item.images">
                            <img class="img-fluid" :src="image.source" alt="" style="width:374px; height: 300px;">
                        </th>
                      </tr>
                    </tbody>

                    <tbody v-if="item.images.length == 3">
                      <tr>
                        <th colspan="2">
                          <img class="img-fluid" :src="item.images[0].source" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                      <tr>
                          <template v-for="(image,index) in item.images">
                            <th v-if="index == 1 || index == 2">
                                <img class="img-fluid" :src="image.source" alt="" style="width:374px; height: 300px;">
                            </th>
                          </template>
                      </tr>
                    </tbody>

                    <tbody class="container" v-if="item.images.length > 3">
                      <tr>
                        <th colspan="4">
                          <img class="img-fluid" :src="item.images[0].source" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                      <tr>
                          <th colspan="2">
                              <img class="img-fluid" :src="item.images[1].source" alt="" style="width:374px; height: 300px; position: relative;">
                          </th>
                          <th colspan="2">
                              <img class="img-fluid" :src="item.images[2].source" alt="" style="width:374px; height: 300px;     filter: brightness(50%);">
                              <h1 style="position: absolute; top: 72%; left: 72%; color: rgb(255, 255, 255);">+{{ item.images.length - 3 }}</h1>
                          </th>
                      </tr>
                    </tbody>
                  </table>
                  <!-- image show end -->

                  <!-- video show start -->
                  <table class="table mb-0">
                    <tbody v-if="item.video">
                      <tr>
                        <embed :src="item.video" width="100%" style="max-height: 50rem; min-height: 20rem"/>
                      </tr>
                    </tbody>
                  </table>
                  <!-- video show end -->

                  <!-- document show start -->
                  <table class="table mb-0">
                    <tbody v-if="item.document">
                      <tr>
                        <embed :src="item.document+'#toolbar=0'" width="100%" style="max-height: 50rem; min-height: 20rem"/>
                      </tr>
                    </tbody>
                  </table>
                  <!-- document show end -->
                </div>

                <div class="pt-2 pb-2 pl-3 pr-3 border-bottom osahan-post-footer">
                  <span class="mr-3 text-secondary underline-on-hover">
                    <i class="fa-solid fa-thumbs-up text-primary"></i> 16
                  </span>
                  <span class="mr-3 text-secondary underline-on-hover">
                    <i class="fa-solid fa-comment text-success"></i> 8
                  </span>
                  <span class="mr-3 text-secondary underline-on-hover">
                    <i class="fa-solid fa-arrows-spin text-info"></i> 2
                  </span>
                </div>

                <div class="p-3 d-flex align-items-center">
                  <div class="mr-auto">
                    <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-2">
                      <span class="text-muted">
                        <i class="fa-solid fa-thumbs-up mr-2" aria-hidden="true"></i>Like
                      </span>
                    </button>
                  </div>

                  <div class="mr-auto">
                    <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-2">
                      <span class="text-muted">
                        <i class="fa-solid fa-comment mr-2" aria-hidden="true"></i>Comment
                      </span>
                    </button>
                  </div>

                  <div class="mr-auto">
                    <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-2">
                      <span class="text-muted">
                        <i class="fa-solid fa-arrows-spin mr-2" aria-hidden="true"></i>Repost
                      </span>
                    </button>
                  </div>

                  <div class="mr-auto">
                    <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-2">
                      <span class="text-muted">
                        <i class="fa-solid fa-paper-plane mr-2" aria-hidden="true"></i>Send
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- My activity part end -->
          </div>

          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="p-3 w-100">
                <h6>All posts</h6>
              </div>
          </div>
          
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div class="p-3 w-100">
                <h6>All Articles</h6>
              </div>
          </div>
          <div class="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
              <div class="p-3 w-100">
                <h6>All Documents</h6>
              </div>
          </div>
        </div>
      </main>

      <!-- Post Modal -->
      <div class="modal fade" id="editPostModal" tabindex="-1" role="dialog" aria-labelledby="editPostModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <form @submit.prevent="update()">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="editPostModalLabel">Update post</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
                  <div class="d-flex align-items-center osahan-post-header people-list">
                    <div class="mr-3">
                        <img class="border rounded-circle invitation-dropdown-list-image" :src="profile_image_url" :alt="alumni.id">
                    </div>

                    <div class="font-weight-bold mr-2">
                        <div class="text-truncate">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</div>
                        
                        <div class="input-group border rounded-pill">
                          <div class="input-group-text form-control-sm rounded-0" style="height: 25px;"><i class="fa-solid fa-eye"></i></div>
                          <select v-model="form.visibility" id="view_type_sorting" class="form-control form-control-sm" style="height: 25px;">
                            <option value="anyone">&#xf0ac; Anyone</option>
                            <option value="connections">&#xf500; Connections</option>
                            <option value="only_me">&#xf235; Only Me</option>
                          </select>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <textarea v-model="form.body" class="form-control" rows="4" cols="50" placeholder="What do you want to talk about?" style="border: none; overflow: auto; outline: none; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; resize: none; "></textarea>
                </div>

                <!-- image preview start -->
                <div v-if="newsFeedImagePreview.length" class="form-group text-center border rounded">
                  <div class="d-flex">
                    <button type="button" class="btn btn-dark ml-auto mb-auto rounded-circle" style="position: absolute; z-index: 1;right: 17px;" @click="imageCancel">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <table>
                    <tbody v-if="newsFeedImagePreview.length == 1">
                      <tr>
                        <th colspan="4">
                          <img class="img-fluid" :src="newsFeedImagePreview[0]" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                    </tbody>

                    <tbody v-if="newsFeedImagePreview.length == 2">
                      <tr>
                        <th colspan="2" v-for="(item,index) in newsFeedImagePreview">
                            <img class="img-fluid" :src="item" alt="" style="width:374px; height: 300px;">
                        </th>
                      </tr>
                    </tbody>

                    <tbody v-if="newsFeedImagePreview.length == 3">
                      <tr>
                        <th colspan="4">
                          <img class="img-fluid" :src="newsFeedImagePreview[0]" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                      <tr>
                          <template v-for="(item,index) in newsFeedImagePreview">
                            <th colspan="2" v-if="index == 1 || index == 2">
                                <img class="img-fluid" :src="item" alt="" style="width:374px; height: 300px;">
                            </th>
                          </template>
                      </tr>
                    </tbody>

                    <tbody class="container" v-if="newsFeedImagePreview.length > 3">
                      <tr>
                        <th colspan="5">
                          <img class="img-fluid" :src="newsFeedImagePreview[0]" alt="" style="width:748px; height: 300px;">
                        </th>
                      </tr>
                      <tr>
                          <th colspan="2">
                              <img class="img-fluid" :src="newsFeedImagePreview[1]" alt="" style="width:374px; height: 300px; position: relative;">
                          </th>
                          <th colspan="2">
                              <img class="img-fluid" :src="newsFeedImagePreview[2]" alt="" style="width:374px; height: 300px;     filter: brightness(50%);">
                              <h1 style="position: absolute; top: 72%; left: 72%; color: rgb(255, 255, 255);">+{{ newsFeedImagePreview.length - 3 }}</h1>
                          </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- image preview end -->

                <!-- video preview start -->
                <div v-if="newsFeedVideoPreview" class="form-group text-center border rounded">
                  <div class="d-flex">
                    <button type="button" class="btn btn-dark ml-auto mb-auto rounded-circle" style="position: absolute; z-index: 1;right: 17px;" @click="videoCancel">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <table class="table mb-0">
                    <tbody v-if="newsFeedVideoPreview">
                      <tr>
                        <embed :src="newsFeedVideoPreview" width="100%" style="max-height: 50rem; min-height: 20rem"/>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- video preview end -->

                <!-- document preview start -->
                <div v-if="newsFeedDocumentPreview" class="form-group text-center border rounded">
                  <div class="d-flex">
                    <button type="button" class="btn btn-dark ml-auto mb-auto rounded-circle" style="position: absolute; z-index: 1;right: 17px;" @click="documentCancel">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <table class="table mb-0">
                    <tbody v-if="newsFeedDocumentPreview">
                      <tr>
                        <embed :src="newsFeedDocumentPreview" width="100%" style="max-height: 50rem; min-height: 20rem"/>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- document preview end -->
              </div>

              <div class="modal-footer">
                <div class="d-flex align-items-center osahan-post-header people-list mr-auto">
                    <div class="font-weight-bold">
                      <label class="btn btn-sm rounded-circle button-hover hideButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Add a photo">
                        <i class="fa-regular fa-image fa-1x text-secondary"></i>
                        <input :disabled="disabled" accept="image/*" type="file" multiple class="form-control news-feed-file-input" id="image-input" @change="onNewsFeedImageChange">
                      </label>
                    </div>

                    <div class="font-weight-bold">
                      <label class="btn btn-sm rounded-circle button-hover hideButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Add a video">
                        <i class="fa-brands fa-youtube fa-1x text-secondary"></i>
                        <input :disabled="disabled" accept="video/mp4,video/x-m4v,video/*" type="file" class="form-control news-feed-file-input" id="video-input" @change="onNewsFeedVideoChange" >
                      </label>
                    </div>

                    <div class="font-weight-bold">
                      <label class="btn btn-sm rounded-circle button-hover hideButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Add a document">
                        <i class="fa-solid fa-file fa-1x text-secondary"></i>
                        <input :disabled="disabled" type="file" class="form-control news-feed-file-input" accept=".xls,.xlsx, application/*" id="document-input" @change="onNewsFeedDocumentChange">
                      </label>
                    </div>

                    <div class="font-weight-bold mr-2">
                      <button :disabled="disabled" type="button" class="btn btn-sm rounded-circle button-hover" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to your post">
                        <i class="fa-solid fa-ellipsis fa-1x text-secondary"></i>
                      </button>
                    </div>

                    <div class="font-weight-bold reduceWidth">
                        <div class="input-group border rounded-pill">
                          <div class="input-group-text form-control-sm rounded-0" style="height: 25px;"><i class="fa-solid fa-comment"></i></div>
                          <select v-model="form.comment_permission" id="view_type_sorting" class="form-control form-control-sm" style="height: 25px;">
                            <option value="anyone">&#xf0ac; Anyone</option>
                            <option value="connections">&#xf500; Connections</option>
                            <option value="only_me">&#xf235; Only Me</option>
                          </select>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center osahan-post-header people-list">
                    <div class="font-weight-bold">
                        <button type="submit" class="btn btn-sm btn-secondary rounded-circle float-right" data-bs-toggle="tooltip" data-bs-placement="top" title="Post">
                          <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>






      <!-- <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
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
      </main> -->

      <!-- left side -->
      <aside class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
        <div class="box mb-3 shadow-sm rounded bg-white profile-box text-center">
          <div class="py-4 px-3 border-bottom">
            <router-link :to="{ name: 'profile'}" class="font-weight-bold d-block">
              <img :src="profile_image_url" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 100px; height: 100px;" />
              <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</h5>
              <p class="mb-0 text-muted">{{ alumni.designation_department }} at {{ alumni.organization }}</p>
            </router-link>
          </div>
        </div>
      </aside>

      <!-- left right -->
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

      <vue-progress-bar></vue-progress-bar>
      <notifications />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";

export default {
  name: "Activity",
  components: {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
  },

  data() {
    return {
      backendUrl: this.$store.state.backendUrl,
      auth_id: `${localStorage.getItem('auth_id')}`,
      page_name: "profile",
      alumni: '',
      profile_image_url: '',

      newsFeeds: [],
      readMore: {},

      newsFeedImagePreview: [],
      newsFeedVideoPreview: '',
      newsFeedDocumentPreview: '',
      disabled: false,
      form: new Form({
        id: '',
        alumni_id: `${localStorage.getItem('auth_id')}`,
        title: '',
        body: '',
        posted_at: '',
        visibility: 'anyone',
        comment_permission: 'anyone',
        image: [],
        video: '',
        document: '',
      }),
    };
  },

  mounted() {
    console.log("Component mounted.");
    this.getData();

    // tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  },

  methods: {
    showMore(id) {
        this.readMore[id] = true;
    },
    showLess(id) {
        this.readMore[id] = false;
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

      axios.get(`${this.backendUrl}/news-feed`, {
          params: {
            auth_id: this.auth_id,
            page_name: this.page_name,
          },
        })
        .then((response) => {
          this.newsFeeds = response.data.data
          // console.log(this.newsFeeds);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editPostModalShow(item) {
      this.form.fill(item);
      this.form.document = '';
      this.form.image = [];
      this.newsFeedImagePreview = [];
      item.images.forEach((value, index) => {
        this.newsFeedImagePreview[index] = value.source;
      });

      this.newsFeedDocumentPreview = item.document;

      $("#editPostModal").modal("show");
    },

    onNewsFeedImageChange(e) {
      let files = e.target.files;
      // console.log(files);
      this.form.image = [];
      this.newsFeedImagePreview = [];
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.newsFeedImagePreview[i] = reader.result;
          this.form.image[i] = reader.result;
        };
        reader.readAsDataURL(files[i]);
      }

      if (files) {
        this.disabled = true;
      }
    },

    imageCancel() {
      $('#image-input').val("");
      this.newsFeedImagePreview = [];
      this.disabled = false;
    },

    onNewsFeedDocumentChange(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = (e) => {
        this.newsFeedDocumentPreview = reader.result;
        this.form.document = reader.result;
      }
      reader.readAsDataURL(file);
        
      if (file) {
        this.disabled = true;
      }
    },

    documentCancel() {
      $('#document-input').val("");
      this.newsFeedDocumentPreview = '';
      this.disabled = false;
    },

    update() {
      this.$Progress.start();
      this.form.busy = true;
      this.form.put(`${this.backendUrl}/news-feed/`+ this.form.id)
        .then((response) => {
          this.getData();
          $("#editPostModal").modal("hide");
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({ type: "success", title: "Success", text: response.data.message });
            this.form.reset()
            this.disabled = false
            // $('#file').val('')
            this.newsFeedImagePreview = ''
            this.newsFeedVideoPreview = ''
            this.newsFeedDocumentPreview = ''
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

  },
};
</script>

<style>
  
</style>
