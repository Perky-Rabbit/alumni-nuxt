<template>
  <div id="index">
    <div class="row">
      <!-- Main Content -->
      <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="p-3 d-flex align-items-center w-100" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="w-100">
                  <button type="button" class="btn btn-outline-secondary btn-lg btn-block rounded-pill text-left" @click="startPostModalShow()">
                      Start a post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2 d-flex align-items-center">
            <div class="mr-auto">
              <label class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-3">
                <span class="fa-stack">
                  <i class="fa-regular fa-image fa-2x text-primary" aria-hidden="true"></i>
                </span>
                Photo
                <input :disabled="disabled" accept="image/*" type="file" multiple class="form-control news-feed-file-input" id="image-input" @click="startPostModalShow()" @change="onNewsFeedImageChange">
              </label>
            </div>

            <div class="mr-auto">
              <label class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-3">
                <span class="fa-stack">
                  <i class="fa-brands fa-youtube fa-2x text-success" aria-hidden="true"></i>
                </span>
                Video
                <input :disabled="disabled" accept="video/mp4,video/x-m4v,video/*" type="file" class="form-control news-feed-file-input" id="video-input" @click="startPostModalShow()" @change="onNewsFeedVideoChange">
              </label>
            </div>

            <div class="mr-auto">
              <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-3">
                <span class="fa-stack">
                  <i class="fa-solid fa-calendar-days fa-2x text-info" aria-hidden="true"></i>
                </span>
                Event
              </button>
            </div>

            <div class="mr-auto">
              <button type="button" class="button-hover btn btn-lg btn-outline-none font-weight-bold text-muted py-3">
                <span class="fa-stack">
                  <i class="fa-solid fa-newspaper fa-2x text-warning" aria-hidden="true"></i>
                </span>
                Write Article
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
          <ul class="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                aria-selected="true"><i class="feather-edit"></i> Share an update</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                aria-selected="false"><i class="feather-image"></i> Upload a photo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                aria-selected="false"><i class="feather-clipboard"></i> Write an article</a>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="p-3 d-flex align-items-center w-100" href="#">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="w-100">
                  <textarea placeholder="Write your thoughts..." class="form-control border-0 p-0 shadow-none"
                    rows="1"></textarea>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="p-3 w-100">
                <textarea placeholder="Write your thoughts..." class="form-control border-0 p-0 shadow-none"
                  rows="3"></textarea>
              </div>
            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div class="p-3 w-100">
                <textarea placeholder="Write an article..." class="form-control border-0 p-0 shadow-none"
                  rows="3"></textarea>
              </div>
            </div>

          </div>

          <div class="border-top p-3 d-flex align-items-center">
            <div class="mr-auto">
              <a href="#" class="text-link small"><i class="feather-map-pin"></i> Add Location</a>
            </div>
            <div class="flex-shrink-1">
              <button type="button" class="btn btn-light btn-sm">
                Preview
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                Post Status
              </button>
            </div>
          </div>
        </div> -->

        <div v-for="(item,index) in newsFeeds" class="box shadow-sm border rounded bg-white mb-3 osahan-post">
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
              <button type="button" class="btn btn-sm rounded-circle button-hover" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to your post">
                <i class="fa-solid fa-ellipsis fa-1x text-secondary"></i>
              </button>
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










        <!-- <div class="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
          <div class="osahan-slider">
            <div class="osahan-slider-item">
              <a href="job-profile.html">
                <div class="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
                  <div class="d-flex align-items-center p-3 job-item-header">
                    <div class="overflow-hidden mr-2">
                      <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                        UI/UX designer
                      </h6>
                      <div class="text-truncate text-primary">Envato</div>
                      <div class="small text-gray-500">
                        <i class="feather-map-pin"></i> India, Punjab
                      </div>
                    </div>
                    <img class="img-fluid ml-auto" src="assets/img/l1.png" alt="" />
                  </div>
                  <div class="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                    <div class="overlap-rounded-circle d-flex">
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p1.png" alt="" data-original-title="Sophia Lee" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p2.png" alt="" data-original-title="John Doe" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p3.png" alt="" data-original-title="Julia Cox" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p4.png" alt="" data-original-title="Robert Cook" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p5.png" alt="" data-original-title="Sophia Lee" />
                    </div>
                    <span class="font-weight-bold text-primary">18 connections</span>
                  </div>
                  <div class="p-3 job-item-footer">
                    <small class="text-gray-500"><i class="feather-clock"></i> Posted 3 Days ago</small>
                  </div>
                </div>
              </a>
            </div>
            <div class="osahan-slider-item">
              <a href="job-profile.html">
                <div class="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
                  <div class="d-flex align-items-center p-3 job-item-header">
                    <div class="overflow-hidden mr-2">
                      <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                        .NET Developer
                      </h6>
                      <div class="text-truncate text-primary">Invision</div>
                      <div class="small text-gray-500">
                        <i class="feather-map-pin"></i> London, UK
                      </div>
                    </div>
                    <img class="img-fluid ml-auto" src="assets/img/l4.png" alt="" />
                  </div>
                  <div class="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                    <div class="overlap-rounded-circle d-flex">
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p13.png" alt="" data-original-title="Sophia Lee" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p1.png" alt="" data-original-title="John Doe" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p2.png" alt="" data-original-title="Julia Cox" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p3.png" alt="" data-original-title="Robert Cook" />
                    </div>
                    <span class="font-weight-bold text-primary">18 connections</span>
                  </div>
                  <div class="p-3 job-item-footer">
                    <small class="text-gray-500"><i class="feather-clock"></i> Posted 3 Days ago</small>
                  </div>
                </div>
              </a>
            </div>
            <div class="osahan-slider-item">
              <a href="job-profile.html">
                <div class="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
                  <div class="d-flex align-items-center p-3 job-item-header">
                    <div class="overflow-hidden mr-2">
                      <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                        Channel Sales Director
                      </h6>
                      <div class="text-truncate text-primary">Slack Inc.</div>
                      <div class="small text-gray-500">
                        <i class="feather-map-pin"></i> London, UK
                      </div>
                    </div>
                    <img class="img-fluid ml-auto" src="assets/img/l7.png" alt="" />
                  </div>
                  <div class="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                    <div class="overlap-rounded-circle d-flex">
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p12.png" alt="" data-original-title="Sophia Lee" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p13.png" alt="" data-original-title="John Doe" />
                      <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                        src="assets/img/p2.png" alt="" data-original-title="Julia Cox" />
                    </div>
                    <span class="font-weight-bold text-primary">18 connections</span>
                  </div>
                  <div class="p-3 job-item-footer">
                    <small class="text-gray-500"><i class="feather-clock"></i> Posted 3 Days ago</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> -->

        <!-- <div class="box mb-3 shadow-sm border rounded bg-white osahan-post">
          <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
            <div class="dropdown-list-image mr-3">
              <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
              <div class="status-indicator bg-success"></div>
            </div>
            <div class="font-weight-bold">
              <div class="text-truncate">Shohel Rana</div>
              <div class="small text-gray-500">Web Developer Perky Rabbit</div>
            </div>
            <span class="ml-auto small">3 hours</span>
          </div>

          <div class="p-3 border-bottom osahan-post-body">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              <a href="#">Perky Rabbit.</a>
            </p>
            <img :src="$store.state.post" :alt="$store.state.alt" class="img-fluid" />
          </div>

          <div class="p-3 border-bottom osahan-post-footer">
            <a href="#" class="mr-3 text-secondary"><i class="feather-heart text-danger"></i> 16</a>
            <a href="#" class="mr-3 text-secondary"><i class="feather-message-square"></i> 8</a>
            <a href="#" class="mr-3 text-secondary"><i class="feather-share-2"></i> 2</a>
          </div>

          <div class="p-3 d-flex align-items-top border-bottom osahan-post-comment">
            <div class="dropdown-list-image mr-3">
              <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
              <div class="status-indicator bg-success"></div>
            </div>
            <div class="font-weight-bold">
              <div class="text-truncate">
                Shohel Rana <span class="float-right small">2 min</span>
              </div>
              <div class="small text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
            </div>
          </div>

          <div class="p-3">
            <textarea placeholder="Add Comment..." class="form-control border-0 p-0 shadow-none" rows="1"></textarea>
          </div>
        </div> -->
      </main>

      <!-- Post Modal -->
      <div class="modal fade" id="startPostModal" tabindex="-1" role="dialog" aria-labelledby="startPostModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <form @submit.prevent="store()">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="startPostModalLabel">Create a post</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
                  <div class="d-flex align-items-center osahan-post-header people-list">
                    <div class="mr-3">
                        <img class="border rounded-circle invitation-dropdown-list-image" :src="image_url" :alt="alumni.id">
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

                <!-- <video style="display:none; width:732px;" controls autoplay>
                  Your browser does not support the video tag.
                </video> -->

                <!-- <embed v-if="embedImageSrc" type="image/jpg" :src="embedImageSrc" width="300" height="200">
                <embed v-if="embedVideoSrc" type="video/webm" :src="embedVideoSrc" width="100%" style="max-height: 50rem; min-height: 20rem"/>
                <embed v-if="embedDocumentSrc" type="application/pdf" :src="embedDocumentSrc" width="100%" style="max-height: 50rem; min-height: 20rem"/> -->

                <!-- <embed v-if="newsFeedVideoPreview" :src="newsFeedVideoPreview" width="100%" style="max-height: 50rem; min-height: 20rem"/> -->
                <!-- <embed v-if="newsFeedDocumentPreview" :src="newsFeedDocumentPreview" width="100%" style="max-height: 50rem; min-height: 20rem"/> -->
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

      <!-- left side -->
      <aside class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
        <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
          <div class="py-4 px-3 border-bottom">
            <img :src="image_url" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 150px; height: 150px;" />
            <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</h5>
            <p class="mb-0 text-muted">{{ alumni.designation_department }}</p>
          </div>
          <div class="d-flex">
            <div class="col-6 border-right p-3">
              <h6 class="font-weight-bold text-dark mb-1">50</h6>
              <p class="mb-0 text-black-50 small">Connections</p>
            </div>
            <div class="col-6 p-3">
              <h6 class="font-weight-bold text-dark mb-1">100</h6>
              <p class="mb-0 text-black-50 small">Views</p>
            </div>
          </div>
          <div class="overflow-hidden border-top">
            <router-link :to="{ name: 'profile'}" class="font-weight-bold p-3 d-block" href="#">
              View my profile
            </router-link>
          </div>
        </div>

        <div class="box mb-3 shadow-sm rounded bg-white view-box overflow-hidden">
          <div class="box-title border-bottom p-3">
            <h6 class="m-0">Profile Views</h6>
          </div>
          <div class="d-flex text-center">
            <div class="col-6 border-right py-4 px-2">
              <h5 class="font-weight-bold text-info mb-1">
                08 <i class="feather-bar-chart-2"></i>
              </h5>
              <p class="mb-0 text-black-50 small">last 5 days</p>
            </div>
            <div class="col-6 py-4 px-2">
              <h5 class="font-weight-bold text-success mb-1">
                + 43% <i class="feather-bar-chart"></i>
              </h5>
              <p class="mb-0 text-black-50 small">Since last week</p>
            </div>
          </div>
          <!-- <div class="overflow-hidden border-top text-center">
            <img src="assets/img/chart.png" class="img-fluid" alt="Responsive image" />
          </div> -->
        </div>

        <!-- <div class="box shadow-sm mb-3 rounded bg-white ads-box text-center">
          <img src="assets/img/job1.png" class="img-fluid" alt="Responsive image" />
          <div class="p-3 border-bottom">
            <h6 class="font-weight-bold text-dark">Osahan Solutions</h6>
            <p class="mb-0 text-muted">Looking for talent?</p>
          </div>
          <div class="p-3">
            <button type="button" class="btn btn-outline-primary pl-4 pr-4">
              POST A JOB
            </button>
          </div>
        </div> -->
      </aside>

      <!-- right side -->
      <aside class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3">
            <h6 class="m-0">Add to yoru feed</h6>
          </div>
          <div class="box-body p-3">
            <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
              <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                <div class="status-indicator bg-success"></div>
              </div>
              <div class="font-weight-bold mr-2">
                <div class="text-truncate">Shohel Rana</div>
                <div class="small text-gray-500">Student at EWU</div>
              </div>
              <span class="ml-auto">
                <button type="button" class="btn btn-light btn-sm" data-toggle="tooltip" data-placement="bottom" title="follow">
                  <i class="feather-user-plus"></i>
                </button>
              </span>
            </div>

            <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
              <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                <div class="status-indicator bg-success"></div>
              </div>
              <div class="font-weight-bold mr-2">
                <div class="text-truncate">Shohel Rana</div>
                <div class="small text-gray-500">Student at EWU</div>
              </div>
              <span class="ml-auto">
                <button type="button" class="btn btn-light btn-sm" data-toggle="tooltip" data-placement="bottom" title="follow">
                  <i class="feather-user-plus"></i>
                </button>
              </span>
            </div>

            <div class="d-flex align-items-center osahan-post-header mb-3 people-list">
              <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                <div class="status-indicator bg-success"></div>
              </div>
              <div class="font-weight-bold mr-2">
                <div class="text-truncate">Shohel Rana</div>
                <div class="small text-gray-500">Student at EWU</div>
              </div>
              <span class="ml-auto">
                <button type="button" class="btn btn-light btn-sm" data-toggle="tooltip" data-placement="bottom" title="follow">
                  <i class="feather-user-plus"></i>
                </button>
              </span>
            </div>

          </div>
        </div>

        <!-- <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3 d-flex align-items-center">
            <h6 class="m-0">Photos</h6>
            <a class="ml-auto" href="#">See All <i class="feather-chevron-right"></i></a>
          </div>
          <div class="box-body p-3">
            <div class="gallery-box-main">
              <div class="gallery-box">
                <img class="img-fluid" src="assets/img/p4.png" alt="" />
                <img class="img-fluid" src="assets/img/p5.png" alt="" />
                <img class="img-fluid" src="assets/img/p6.png" alt="" />
              </div>
              <div class="gallery-box">
                <img class="img-fluid" src="assets/img/p7.png" alt="" />
                <img class="img-fluid" src="assets/img/p8.png" alt="" />
                <img class="img-fluid" src="assets/img/p9.png" alt="" />
              </div>
              <div class="gallery-box">
                <img class="img-fluid" src="assets/img/p10.png" alt="" />
                <img class="img-fluid" src="assets/img/p11.png" alt="" />
                <img class="img-fluid" src="assets/img/p12.png" alt="" />
              </div>
            </div>
          </div>
        </div> -->

        <div class="box shadow-sm border rounded bg-white mb-3">
          <div class="box-title border-bottom p-3">
            <h6 class="m-0">Jobs</h6>
          </div>

          <div class="box-body p-3">
            <a href="job-profile.html">
              <div class="shadow-sm border rounded bg-white job-item mb-3">
                <div class="d-flex align-items-center p-3 job-item-header">
                  <div class="overflow-hidden mr-2">
                    <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                      Product Director
                    </h6>
                    <div class="text-truncate text-primary">Perky Rabbit Corporation Ltd.</div>
                    <div class="small text-gray-500">
                      <i class="feather-map-pin"></i> BD, Dhaka
                    </div>
                  </div>
                  <img class="img-fluid ml-auto" :src="image_url" :alt="alumni.id" />
                </div>
                <div class="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                  <div class="overlap-rounded-circle">
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Sophia Lee" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="John Doe" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Julia Cox" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Robert Cook" />
                  </div>
                  <span class="font-weight-bold text-muted">18 connections</span>
                </div>
                <div class="p-3 job-item-footer">
                  <small class="text-gray-500"><i class="feather-clock"></i> Posted 3 Days ago</small>
                </div>
              </div>
            </a>

            <a href="job-profile.html">
              <div class="shadow-sm border rounded bg-white job-item mb-3">
                <div class="d-flex align-items-center p-3 job-item-header">
                  <div class="overflow-hidden mr-2">
                    <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                      Product Director
                    </h6>
                    <div class="text-truncate text-primary">Perky Rabbit Corporation Ltd.</div>
                    <div class="small text-gray-500">
                      <i class="feather-map-pin"></i> BD, Dhaka
                    </div>
                  </div>
                  <img class="img-fluid ml-auto" :src="image_url" :alt="alumni.id" />
                </div>
                <div class="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                  <div class="overlap-rounded-circle">
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Sophia Lee" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="John Doe" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Julia Cox" />
                    <img class="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title=""
                      :src="image_url" :alt="alumni.id" data-original-title="Robert Cook" />
                  </div>
                  <span class="font-weight-bold text-muted">18 connections</span>
                </div>
                <div class="p-3 job-item-footer">
                  <small class="text-gray-500"><i class="feather-clock"></i> Posted 3 Days ago</small>
                </div>
              </div>
            </a>

          </div>
        </div>
      </aside>

    </div>
    <vue-progress-bar></vue-progress-bar>
    <notifications />
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";

export default {
  name: "Index",
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
      page_name: "home",
      alumni: '',
      image_url: '',
      department: '',
      achievements: [],
      skills: [],

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
          // console.log(response);
          this.alumni = response.data.alumni;
          this.image_url = response.data.image_url
          this.department = response.data.department;
          this.achievements = response.data.achievements;
          this.skills = response.data.skills;
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
          console.log(this.newsFeeds);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    startPostModalShow() {
      $("#startPostModal").modal("show");
    },

    onNewsFeedImageChange(e) {
      let files = e.target.files;
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

    onNewsFeedVideoChange(e) {
      let file = e.target.files[0];
      this.form.video = file;
      this.newsFeedVideoPreview = URL.createObjectURL(file);

      if (file) {
        this.disabled = true;
      }

      // let blobURL = URL.createObjectURL(file);
      // document.querySelector("video").style.display = 'block';
      // document.querySelector("video").src = blobURL;
    },

    videoCancel() {
      $('#video-input').val("");
      this.newsFeedVideoPreview = '';
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

    store() {
      this.$Progress.start();
      this.form.busy = true;
      this.form.post(`${this.backendUrl}/news-feed`)
        .then((response) => {
          if (this.form.successful) {
            this.$Progress.finish();
            this.$notify({ type: "success", title: "Success", text: response.data.message });
            this.form.reset()
            this.disabled = false
            // $('#file').val('')
            this.newsFeedImagePreview = ''
            this.newsFeedVideoPreview = ''
            this.newsFeedDocumentPreview = ''
            $("#startPostModal").modal("hide");
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
  .underline-on-hover:hover {
    text-decoration: underline !important;
    color: blue !important; 
	}

  .news-feed-file-input {
    opacity:0;
    position: absolute;
    visibility: hidden;
  }

  .button-hover:hover{
    background-color: #eae7e7;
    transition: 0.7s;
  }

  label.button-hover {
    margin-bottom: 0px;
  }

  .invitation-dropdown-list-image {
    height: 3rem;
    width: 3rem;
  }

  #view_type_sorting{
    font-family: Arial, FontAwesome;
  }

  #view_type_sorting::before{
    vertical-align:middle;
  }

  .container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.container img {vertical-align: middle;}

.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

  /* @media screen and (max-width: 1000px) {
    .hideButton {
        display: none !important;
    }
  }
  @media screen and (max-width: 450px) {
    .reduceWidth {
        width: 170px;
    }
  }
  @media screen and (max-width: 385px) {
    .reduceWidth {
        width: 130px;
    }
  } */

  @media screen and (max-width: 400px) {
    .reduceWidth {
        width: 130px;
    }
  }
</style>

