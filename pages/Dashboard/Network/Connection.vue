<template>
  <div id="connection">
    <div class="box shadow-sm border rounded bg-white mb-3">
        <div v-if="connectionFriends.length" class="d-flex box-title border-bottom p-3">
            <h5 class="m-0">All Connections</h5>
        </div>
        <div v-else class="d-flex box-title p-3">
            <h5 class="m-0">No Connections</h5>
        </div>

        <div class="box-body border-bottom p-3" v-for="(item,index) in connectionFriends">
            <div class="d-flex align-items-center osahan-post-header people-list">
                <router-link :to="{ path: 'another-profile', query: { username: item.username, id: item.id } }">
                    <div class="mr-3">
                        <img class="rounded-circle invitation-dropdown-list-image" :src="item.profile_image" :alt="item.id">
                    </div>
                </router-link>

                <div class="font-weight-bold mr-2">
                    <router-link :to="{ path: 'another-profile', query: { username: item.username, id: item.id } }">
                        <div class="text-truncate">{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }}</div>
                    </router-link>
                    
                    <div class="small text-gray-500">
                        {{ item.designation_department }} at {{ item.organization }}
                    </div>
                </div>
                
                <span class="ml-auto">
                    <button type="button" class="btn btn-light btn-sm rounded-pill mr-1">Message</button>
                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill" @click="unfriend(item)">Remove Connection</button>
                </span>
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
  name: "Connection",
  data() {
    return {
        backendUrl: this.$store.state.backendUrl,
        auth_id : `${localStorage.getItem('auth_id')}`,
        connectionFriends: [],
    };
  },

  mounted() {
      this.getConnectionFriends();
  },

    methods: {
        getConnectionFriends() {
            this.$Progress.start();
            axios.post(`${this.backendUrl}/get-connection-friends`, { auth_id: this.auth_id })
            .then((response) => {
                this.$Progress.finish();
                this.connectionFriends = response.data.data
                // console.log(this.connectionFriends);
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },

        unfriend(alumni) {
            this.$swal
            .fire({
                title: "Are you sure?",
                text: `Are you sure you want to remove ${ alumni.first_name } ${ alumni.middle_name } ${ alumni.last_name } ✪ as a connection? Don’t worry, ${ alumni.first_name } ${ alumni.middle_name } ${ alumni.last_name } won’t be notified by Alumni Portal.`,
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                cancelButtonText: "NO",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${this.backendUrl}/unfriend/` + alumni.id, {auth_id: this.auth_id})
                    .then((response) => {
                        this.$swal.fire("Success", response.data.message, "success");
                        this.getConnectionFriends();
                        emitter.emit("toggle-sidebar");
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