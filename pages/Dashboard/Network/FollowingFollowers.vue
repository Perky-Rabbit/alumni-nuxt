<template>
  <div id="following-follower">
    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
        <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">following & followers</h5>
        <ul class="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Following</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Followers</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="p-3">
                    <!-- <h5 v-show="!followingFriends.length">
                        You are not following any people
                    </h5> -->

                    <div class="box-body border-bottom p-3" v-for="(item,index) in followingFriends">
                        <div class="d-flex align-items-center osahan-post-header people-list">
                            <div class="mr-3">
                                <img class="rounded-circle invitation-dropdown-list-image" :src="item.profile_image" :alt="item.id">
                            </div>
                            <div class="font-weight-bold mr-2">
                                <div class="text-truncate">{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</div>
                                <div class="small text-gray-500">
                                    {{ item.designation_department }} at {{ item.organization }}
                                </div>
                            </div>
                            <span class="ml-auto">
                                <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill mr-1" @click="unfollow(item)">Unfollow</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="p-3 w-100">
                    <!-- <h5 v-show="!followerFriends.length">
                        No one is following you
                    </h5> -->

                    <div class="box-body border-bottom p-3" v-for="(item,index) in followerFriends">
                        <div class="d-flex align-items-center osahan-post-header people-list">
                            <div class="mr-3">
                                <img class="rounded-circle invitation-dropdown-list-image" :src="item.profile_image" :alt="item.id">
                            </div>
                            <div class="font-weight-bold mr-2">
                                <div class="text-truncate">{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</div>
                                <div class="small text-gray-500">
                                    {{ item.designation_department }} at {{ item.organization }}
                                </div>
                            </div>
                            <!-- <span class="ml-auto">
                                <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill mr-1" @click="unfollow(item)">Unfollow</button>
                            </span> -->
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

export default {
  name: "MyNetwork",

  data() {
    return {
        backendUrl: this.$store.state.backendUrl,
        auth_id : `${localStorage.getItem('auth_id')}`,
        followingFriends: [],
        followerFriends: [],
    };
  },

  mounted() {
      this.getFollowingFriends();
      this.getFollowerFriends();
  },

    methods: {
        getFollowingFriends() {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/get-following-friends`, { auth_id: this.auth_id })
            .then((response) => {
                this.$Progress.finish();
                this.followingFriends = response.data.data
                // console.log(this.followingFriends);
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        getFollowerFriends() {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/get-follower-friends`, { auth_id: this.auth_id })
            .then((response) => {
                this.$Progress.finish();
                this.followerFriends = response.data.data
                // console.log(this.followerFriends);
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        unfollow(alumni) {
            this.$swal
            .fire({
                title: "Are you sure?",
                text: `Are you sure you want to unfollow ${ alumni.first_name } ${ alumni.middle_name } ${ alumni.last_name }.`,
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "NO",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${this.backendUrl}/unfollow/` + alumni.id, {auth_id: this.auth_id})
                    .then((response) => {
                        this.$swal.fire("Success", response.data.message, "success");
                        this.getFollowingFriends();
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
</style>