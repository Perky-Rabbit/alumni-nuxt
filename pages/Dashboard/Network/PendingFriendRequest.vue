<template>
  <div id="pending-friend-request">
    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
        <h5 v-if="pendingFriendRequests.length" class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">All Pending Requests</h5>
        <h5 v-else class="pl-3 pt-3 pr-3 mb-0">No Pending Requests</h5>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="p-3">
                    <div class="row">
                        <div class="col-md-3" v-for="(alumni) in pendingFriendRequests">
                            <!-- <a href="profile.html"> -->
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
                                            <button type="button" class="btn btn-outline-danger btn-sm btn-block" @click="cancelFriendRequest(alumni)">
                                                Cancel Request
                                            </button>
                                        </div>
                                        <!-- <div class="col-6 pr-3 pl-1">
                                            <button type="button" class="btn btn-success btn-sm btn-block">
                                                Follow
                                            </button>
                                        </div> -->
                                    </div>
                                </div>
                            <!-- </a> -->
                        </div>
                    </div>
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
  name: "PendingFriendRequest",

  data() {
    return {
        backendUrl: this.$store.state.backendUrl,
        auth_id : `${localStorage.getItem('auth_id')}`,
        pendingFriendRequests: [],
    };
  },

  mounted() {
      this.getPendingFriendRequests();
  },

    methods: {
        getPendingFriendRequests() {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/get-pending-friend-requests`, { auth_id: this.auth_id })
            .then((response) => {
                this.$Progress.finish();
                this.pendingFriendRequests = response.data.data
                // console.log(this.pendingFriendRequests);
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        cancelFriendRequest(alumni) {
            this.$swal
            .fire({
                title: "Are you sure?",
                text: "Do you want to cancel the request?",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "NO",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${this.backendUrl}/cancel-friend-request/` + alumni.id, {auth_id: this.auth_id})
                    .then((response) => {
                        this.$swal.fire("Success", response.data.message, "success");
                        this.getPendingFriendRequests();
                        emitter.emit("toggle-sidebar");
                    });
                }
            });
        },
    },
};
</script>

<style>
    
</style>