<template>
  <div id="my-network">
    <!-- Invitations -->
    <div class="box shadow-sm border rounded bg-white mb-3">
        <div v-if="invitationFriendRequests.length" class="d-flex box-title border-bottom p-3">
            <h5 class="m-0">Invitations</h5>
            <router-link :to="{name: 'invitation'}" v-if="invitationFriendRequests.length > 1" type="button" class="see-all btn btn-sm ml-auto mb-auto font-weight-bold">
                See all
            </router-link>
        </div>
        <div v-else class="d-flex box-title p-3">
            <h5 class="m-0">No pending invitations</h5>
        </div>

        <div class="box-body border-bottom p-3" v-for="(item,index) in invitationFriendRequests" v-show="index < 1">
            <div class="d-flex align-items-center osahan-post-header people-list">
                <div class="mr-3">
                    <img class="rounded-circle invitation-dropdown-list-image" :src="item.profile_image" :alt="item.id">
                </div>
                <div class="font-weight-bold mr-2">
                    <div class="text-truncate">{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</div>
                    <div class="small text-gray-500" v-for="education in item.education">
                        <div v-if="education.is_current == 'Yes'">
                            {{ education.school }}
                        </div>
                    </div>
                    <div class="font-weight-bold small text-primary"><i class="fa fa-globe"></i> 4 mutual connections</div>
                </div>
                <span class="ml-auto">
                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mr-1" @click="denyFriendRequest(item)">Deny</button>
                    <button type="button" class="btn btn-light btn-sm rounded-pill" @click="acceptFriendRequest(item)">Accept</button>
                </span>
            </div>
        </div>
    </div>

    <!-- suggestions -->
    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
        <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">More suggestions for you</h5>
        <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">People</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Groups</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Pages</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Hashtags</a>
        </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="p-3">
                    <div class="row">
                        <!-- <template v-for="(alumni) in alumnis">
                            <div class="col-md-3" v-if="alumni.id != auth_id"> -->
                                <h5 v-if="alumnis.length == 0">
                                    No data found
                                </h5>

                                <div class="col-md-3" v-for="(alumni,index) in alumnis">
                                    <div class="box mb-3 shadow-sm rounded bg-white profile-box text-center">
                                        <!-- <router-link :to="{ path: '/another-profile/' + alumni.username +'/'+ alumni.id}"> -->
                                        <router-link :to="{ path: 'another-profile', query: { username: alumni.username, id: alumni.id } }">
                                            <div v-if="alumni.background_image" class="border-bottom rounded-top" style="height:4rem;" :style="{ backgroundImage: 'url(' + alumni.background_image + ')' }">
                                                <img :src="alumni.profile_image" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 6rem; height: 6rem;">
                                            </div>

                                            <div v-else class="border-bottom rounded-top" style="height:4rem;" :style="{ backgroundImage: 'url(' + $store.state.backgroud_image + ')' }">
                                                <img :src="alumni.profile_image" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 6rem; height: 6rem;">
                                            </div>

                                            <div class="mt-5 mb-4" style="min-height: 67px;">
                                                <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</h5>
                                                <p class="mb-0 text-muted">
                                                    {{ alumni.designation_department }} at {{ alumni.organization }}
                                                </p>
                                            </div>
                                        </router-link>
        
                                        <!-- <span class="font-weight-bold small text-primary mt-4">4 mutual connections</span> -->
                                        
                                        <div class="network-item-footer py-3 d-flex text-center">
                                            <div class="col-12 pl-3 pr-3">
                                                <button type="button" class="btn btn-primary btn-sm btn-block" @click="sendFriendRequest(alumni)">
                                                    Connect
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- </div>
                        </template> -->
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="p-3 w-100">
                    <h6>Groups</h6>
                </div>
            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="p-3 w-100">
                    <h6>Pages</h6>
                </div>
            </div>

            <div class="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                <div class="p-3 w-100">
                    <h6>Hashtags</h6>
                </div>
            </div>
        </div>
    </div>

    <!-- following -->
    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
        <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">More suggestions following for you</h5>
        <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="follow-people-tab" data-toggle="tab" href="#follow-people" role="tab" aria-controls="follow-people" aria-selected="true">People</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="group-tab" data-toggle="tab" href="#group" role="tab" aria-controls="group" aria-selected="false">Groups</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="follow-people" role="tabpanel" aria-labelledby="follow-people-tab">
                <div class="p-3">
                    <div class="row">
                        <h5 v-if="followingAlumnis.length == 0">
                            No data found
                        </h5>

                        <div class="col-md-3" v-for="(alumni,index) in followingAlumnis">
                            <div class="box mb-3 shadow-sm rounded bg-white profile-box text-center">
                                <router-link :to="{ path: 'another-profile', query: { username: alumni.username, id: alumni.id } }">
                                    <div v-if="alumni.background_image" class="border-bottom rounded-top" style="height:4rem;" :style="{ backgroundImage: 'url(' + alumni.background_image + ')' }">
                                        <img :src="alumni.profile_image" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 6rem; height: 6rem;">
                                    </div>

                                    <div v-else class="border-bottom rounded-top" style="height:4rem;" :style="{ backgroundImage: 'url(' + $store.state.backgroud_image + ')' }">
                                        <img :src="alumni.profile_image" class="img-fluid mt-2 rounded-circle" :alt="alumni.id" style="width: 6rem; height: 6rem;">
                                    </div>

                                    <div class="mt-5 mb-4" style="min-height: 67px;">
                                        <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</h5>
                                        <p class="mb-0 text-muted">
                                            {{ alumni.designation_department }} at {{ alumni.organization }}
                                        </p>
                                    </div>
                                </router-link>

                                <!-- <span class="font-weight-bold small text-primary mt-4">4 mutual connections</span> -->
                                
                                <div class="network-item-footer py-3 d-flex text-center">
                                    <div class="col-12 pl-3 pr-3">
                                        <button type="button" class="btn btn-secondary btn-sm btn-block" @click="follow(alumni)">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="group" role="tabpanel" aria-labelledby="group-tab">
                <div class="p-3 w-100">
                    <h6>following group</h6>
                </div>
            </div>
        </div>
    </div>

    <vue-progress-bar></vue-progress-bar>
    <notifications />
  </div>
</template>

<script>
import axios from "axios";
import emitter from "../../../emitter/index.js";

export default {
  name: "MyNetwork",

  data() {
    return {
        backendUrl: this.$store.state.backendUrl,
        auth_id : `${localStorage.getItem('auth_id')}`,
        alumnis: [],
        invitationFriendRequests: [],
        followingAlumnis: [],
    };
  },

  mounted() {
      this.getSuggestionAlumnis();
      this.getSuggestionFollowingAlumnis();
      this.getInvitationFriendRequests();
  },

    methods: {
        sendFriendRequest(alumni) {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/send-friend-request/` + alumni.id, {auth_id: this.auth_id})
            .then((response) => {
                this.getSuggestionAlumnis();
                emitter.emit("toggle-sidebar");
                this.$Progress.finish();
                this.$notify({
                    type: "success",
                    title: "Success",
                    text: response.data.message,
                });
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        acceptFriendRequest(alumni) {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/accept-friend-request/` + alumni.id, {auth_id: this.auth_id})
            .then((response) => {
                this.getInvitationFriendRequests();
                emitter.emit("toggle-sidebar");
                this.$Progress.finish();
                this.$notify({
                    type: "success",
                    title: "Success",
                    text: response.data.message,
                });
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        denyFriendRequest(alumni) {
            this.$swal
            .fire({
                title: "Are you sure?",
                text: "Do you want to deny the request?",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "NO",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${this.backendUrl}/deny-friend-request/` + alumni.id, {auth_id: this.auth_id})
                    .then((response) => {
                        this.$swal.fire("Success", response.data.message, "success");
                        this.getInvitationFriendRequests();
                        emitter.emit("toggle-sidebar");
                    });
                }
            });
        },

        getInvitationFriendRequests() {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/get-invitation-friend-requests`, { auth_id: this.auth_id })
            .then((response) => {
                this.$Progress.finish();
                this.invitationFriendRequests = response.data.data
                // console.log(this.invitationFriendRequests);
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        getSuggestionAlumnis() {
            axios.get(`${this.backendUrl}/get-suggestion-alumnis`,
                {
                    params: {auth_id:this.auth_id}
                })
            .then((response) => {
                this.alumnis = response.data.data;
                // console.log(this.alumnis);
            })
            .catch((e) => {
                this.$Progress.fail();
            });
        },

        getSuggestionFollowingAlumnis() {
            axios.get(`${this.backendUrl}/get-suggestion-following-alumnis`,
                {
                    params: {auth_id:this.auth_id}
                })
            .then((response) => {
                this.followingAlumnis = response.data.data;
                // console.log(this.followingAlumnis);
            })
            .catch((e) => {
                this.$Progress.fail();
            });
        },

        follow(alumni) {
            this.$swal
            .fire({
                title: "Are you sure?",
                text: `Are you sure you want to follow ${ alumni.first_name } ${ alumni.middle_name } ${ alumni.last_name }.`,
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "NO",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${this.backendUrl}/follow/` + alumni.id, {auth_id: this.auth_id})
                    .then((response) => {
                        this.$swal.fire("Success", response.data.message, "success");
                        this.getSuggestionFollowingAlumnis();
                    });
                }
            });
        },
    },
};
</script>

<style>
    .invitation-dropdown-list {
        height: 4rem;
        width: 5rem;
    }
    .invitation-dropdown-list-image {
        height: 5rem;
        width: 5rem;
    }

    .see-all:hover {
      background-color: #c5c6c8;
      transition: 0.7s;
    }
</style>