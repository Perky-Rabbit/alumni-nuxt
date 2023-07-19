<template>
    <div id="header">
        <header>
            <!--Strat Top Header Area-->
            <div class="top-header-area">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="header-right-content">
                                <div class="list">
                                    <ul>
                                        <li>
                                            <NuxtLink to="/register">SIGN UP</NuxtLink>
                                        </li>
                                        <li>
                                            <!-- <NuxtLink :to="{ name: 'login' }">SIGN IN</NuxtLink> -->
                                        </li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Top Header Area-->

            <!-- Start Navbar Area -->
            <div class="navbar-area nav-bg-1">
                <div class="mobile-responsive-nav">
                    <div class="container">
                        <div class="mobile-responsive-menu">
                            <div class="logo">
                                <a href="index.html">
                                    <!-- <img :src="$store.state.cccLogo" :alt="$store.state.alt" class="main-logo"> -->
                                    <!-- <img :src="$store.state.cccLogo" :alt="$store.state.alt" class="white-logo"> -->
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="desktop-nav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <!-- <img :src="$store.state.cccLogo" :alt="$store.state.alt"> -->
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">MEMBER BENEFITS</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">MEMBER LIST</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">ALUMNI ADMISSIONS</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">NOTICE</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">ALUMNI QUESTIONNAIRE</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="others-option-for-responsive">
                    <div class="container">
                        <div class="dot-menu">
                            <div class="inner">
                                <div class="icon">
                                    <i class="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Navbar Area -->
        </header>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>