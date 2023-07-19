<template>
    <div class="row">
        <aside class="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
            <div class="box mb-3 shadow-sm border rounded bg-white list-sidebar">
                <div class="box-title p-3">
                    <h6 class="m-0">Manage my network</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <router-link :to="{name: 'connection'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-users mr-2 text-dark"></i> Connections <span class="ml-auto font-weight-bold">{{ totalFriends }}</span></li>
                    </router-link>

                    <router-link :to="{name: 'pendingFriendRrequest'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-users mr-2 text-dark"></i> Pending Request <span class="ml-auto font-weight-bold">{{ totalPendingFriendRequest }}</span></li>
                    </router-link>

                    <router-link :to="{name: 'invitation'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-users mr-2 text-dark"></i> Invitation <span class="ml-auto font-weight-bold">{{ totalInvitation }}</span></li>
                    </router-link>

                    <router-link :to="{name: 'blockList'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-users mr-2 text-dark"></i> Block List <span class="ml-auto font-weight-bold">{{ totalBlockList }}</span></li>
                    </router-link>

                    <!-- <a href="#">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-book mr-2 text-dark"></i> Contacts <span class="ml-auto font-weight-bold">0</span></li>
                    </a> -->

                    <router-link :to="{name: 'followingFollowers'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-user-check mr-2 text-dark"></i> Following & Followers</li>
                    </router-link>

                    <router-link :to="{name: 'group'}">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-user-check mr-2 text-dark"></i>Groups</li>
                    </router-link>

                    <a href="#">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-clipboard mr-2 text-dark"></i> Page <span class="ml-auto font-weight-bold">0</span></li>
                    </a>
                    
                    <!-- <a href="#">
                        <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-tag mr-2 text-dark"></i> Hashtag <span class="ml-auto font-weight-bold">0</span></li>
                    </a> -->
                </ul>
            </div>
        </aside>
        
        <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import axios from "axios";
import emitter from "../../../emitter/index.js";

export default {
    name: "Layout",

    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            auth_id: `${localStorage.getItem('auth_id')}`,
            totalFriends: '',
            totalPendingFriendRequest: '',
            totalInvitation: '',
            totalBlockList: '',
        };
    },

    mounted() {
        this.countTotal();
        emitter.on("toggle-sidebar", () => {
            // console.log('ok');
            this.countTotal();
        });
    },

    // created() {
    //     emitter.on("toggle-sidebar", () => {
    //         this.countTotal();
    //     });
    // },

    methods: {
        countTotal() {
            axios.get(`${this.backendUrl}/total-friends-count`,
            {
                params: {auth_id:this.auth_id}
            })
            .then((response) => {
                this.totalFriends = response.data.data;
                // console.log(response.data.data);
            })
            .catch((e) => {
                this.$Progress.fail();
            });

            axios.get(`${this.backendUrl}/total-pending-friend-request-count`,
            {
                params: {auth_id:this.auth_id}
            })
            .then((response) => {
                this.totalPendingFriendRequest = response.data.data;
                // console.log(response.data.data);
            })
            .catch((e) => {
                this.$Progress.fail();
            });

            axios.get(`${this.backendUrl}/total-invitation-count`,
            {
                params: {auth_id:this.auth_id}
            })
            .then((response) => {
                this.totalInvitation = response.data.data;
                // console.log(response.data.data);
            })
            .catch((e) => {
                this.$Progress.fail();
            });

            axios.get(`${this.backendUrl}/total-block-list-count`,
            {
                params: {auth_id:this.auth_id}
            })
            .then((response) => {
                this.totalBlockList = response.data.data;
                // console.log(response.data.data);
            })
            .catch((e) => {
                this.$Progress.fail();
            });
        },
    },
};
</script>

<style>

</style>