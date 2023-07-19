<template>
    <div id="header">
        <nav class="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
            <div class="container">
                <a class="navbar-brand mr-2" href="index.html"><img :src="$store.state.dashboardLogo" :alt="$store.state.alt" />
                </a>
                <form class="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <input type="text" class="form-control shadow-none border-0"
                            placeholder="Search people, jobs & more..." aria-label="Search"
                            aria-describedby="basic-addon2" v-model="globalSearch"/>
                        <div class="input-group-append">
                            <button class="btn" type="button">
                                <i class="feather-search"></i>
                            </button>
                        </div>
                    </div>

                    <div v-show="alumnus.length" class="dropdown-list dropdown-menu dropdown-menu-left shadow-sm show">
                        <h6 class="dropdown-header">Members</h6>

                        <router-link v-for="(item,index) in alumnus" class="dropdown-item d-flex align-items-center" :to="{ path: 'another-profile', query: { username: item.username, id: item.id } }">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" :src="item.alumni.source" :alt="item.id">
                            </div>
                            <div class="font-weight-bold overflow-hidden">
                                <div class="text-truncate"> {{item.first_name}} {{item.middle_name}} {{item.last_name}} </div>
                                <div class="small text-gray-500">{{item.department.title}}</div>
                            </div>
                        </router-link>

                        <!--<router-link :to="{path: 'member'}" class="dropdown-item text-center small font-weight-bold p-3 d-block text-primary">
                            See all Members
                        </router-link>-->
                        <label class="dropdown-item text-center small font-weight-bold p-3 d-block text-primary" @click="memberPageLoad" role="button">See all Members</label>
<!--                        <a class="dropdown-item text-center small font-weight-bold p-3 d-block text-primary" href="#">  </a>-->
                    </div>
                </form>
                <ul class="navbar-nav ml-auto d-flex align-items-center">
                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="feather-search mr-2"></i>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in"
                             aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control border-0 shadow-none"
                                           placeholder="Search people, jobs and more..." aria-label="Search"
                                           aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn" type="button">
                                            <i class="feather-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{name: 'dashboard'}" class="nav-link" href="#"><i class="feather-briefcase mr-2"></i><span
                                class="d-none d-lg-inline">Home</span></router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{name: 'MyNetwork'}" class="nav-link">
                            <i class="feather-users mr-2"></i>
                            <span class="d-none d-lg-inline">My Network</span>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="feather-briefcase mr-2"></i><span
                                class="d-none d-lg-inline">Jobs</span></a>
                    </li>

                    <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="feather-message-square"></i>
                            <!-- Counter - Alerts -->
                            <span class="badge badge-danger badge-counter">2</span>
                        </a>

                        <!-- Dropdown - Alerts -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                            <h6 class="dropdown-header">Message Center</h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" :src="$store.state.alumniHeaderImage" :alt="$store.state.alt" />
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold overflow-hidden">
                                    <div class="text-truncate">
                                        It is a long established fact that a reader will be distracted by the readable.
                                    </div>
                                    <div class="small text-gray-500">Shohel Rana · 58m</div>
                                </div>
                            </a>

                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" :src="$store.state.alumniHeaderImage" :alt="$store.state.alt" />
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold overflow-hidden">
                                    <div class="text-truncate">
                                        It is a long established fact that a reader will be distracted by the readable.
                                    </div>
                                    <div class="small text-gray-500">Shohel Rana · 58m</div>
                                </div>
                            </a>

                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="feather-bell"></i>
                            <!-- Counter - Alerts -->
                            <span class="badge badge-info badge-counter">2</span>
                        </a>

                        <!-- Dropdown - Alerts -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                            <h6 class="dropdown-header">Notifications Center</h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="feather-download-cloud text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2022</div>
                                    <span class="font-weight-bold">It is a long established fact that a reader will be distracted by the readable.</span>
                                </div>
                            </a>

                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="feather-folder text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2022</div>
                                    It is a long established fact that a reader will be distracted by the readable.
                                </div>
                            </a>

                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
                        <a class="nav-link dropdown-toggle pr-0" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <img class="img-profile rounded-circle" :src="image_url" :alt="alumni.id" />
                        </a>

                        <!-- Dropdown - User Information -->
                        <div class="dropdown-menu dropdown-menu-right shadow-sm">
                            <div class="p-3 d-flex align-items-center">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" :src="image_url" :alt="alumni.id" />
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">{{ alumni.first_name }} {{ alumni.middle_name }} {{ alumni.last_name }}</div>
                                    <div class="small text-gray-500">{{ alumni.designation_department }}</div>
                                </div>
                            </div>

                            <div class="pl-3 pr-3 d-flex align-items-center">
                                <router-link :to="{ name: 'profile'}" type="button" class="btn btn-outline-primary btn-sm btn-block rounded-pill">
                                    View Profile
                                </router-link>
                            </div>

                            <div class="dropdown-divider"></div>

                            <div class="borderless ml-3">
                    <li><b>Account</b></li>
                    <router-link :to="{name: 'account_preferences'}" class="dropdown-item"><i class="feather-edit mr-1"></i> Settings & Privacy</router-link>
                    <a class="dropdown-item" href="#"><i class="feather-user mr-1"></i> Help</a>
            </div>

            <div class="dropdown-divider"></div>

            <div class="borderless ml-3">
                <li><b>Manage</b></li>
                <a class="dropdown-item" href="#"><i class="feather-edit mr-1"></i> Posts & Activity</a>
                <a class="dropdown-item" href="#"><i class="feather-user mr-1"></i> Job Posting</a>
            </div>

            <div class="dropdown-divider"></div>

            <!-- <a class="dropdown-item" href="#" @click="logout"><i class="feather-log-out mr-1"></i> Sign Out</a> -->
            <button class="dropdown-item">
                <i class="feather-log-out mr-1"></i>
                <span key="t-logout" @click="logout">Sign Out</span>
            </button>
    </div>
    </li>
    </ul>
    </div>
    </nav>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Header",

        data() {
            return {
                backendUrl: this.$store.state.backendUrl,
                searchMode: false,
                alumni: '',
                alumnus: [],
                image_url: '',
                globalSearch: '',
            };
        },

        watch: {
            globalSearch: function () {
                this.getAlumnus();
            },
        },

        mounted() {
            this.getData();
        },

        methods: {
            getData() {
                axios.get(`${this.backendUrl}/alumni/${localStorage.getItem('auth_id')}`)
                    .then((response) => {
                        // console.log(response);
                        this.alumni = response.data.alumni;
                        this.image_url = response.data.image_url;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },

            logout() {
                if (localStorage.getItem('alumniLoggedInToken') && localStorage.getItem('auth_id')){
                    // console.log(localStorage.getItem('alumniLoggedInToken'))
                    localStorage.removeItem('alumniLoggedInToken')
                    localStorage.removeItem('auth_id')
                    if(!(localStorage.removeItem('alumniLoggedInToken'))){
                        this.$router.push({name: 'login'})
                    }else{
                        this.$router.push({name: 'dashboard'})
                    }
                }
            },

            getAlumnus() {
                axios.get(`${this.backendUrl}/alumni/search`,{
                        params: {
                            globalSearch: this.globalSearch
                        },
                    })
                    .then((response) => {
                        this.alumnus = response.data.data.slice(Math.max(response.data.data.length - 10, 0));
                        this.$store.state.members = response.data.data
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },

            memberPageLoad(){
                this.$router.push({name: 'member'})
            },
        }
    };
    $(document).on('click', function(event) {
        this.searchMode = false;
        // console.log(this.searchMode)
    });
</script>

<style>

</style>
