<template>
    <div id="index">
        <!--Start Banner Area-->
        <div class="banner-area">
            <div class="hero-slider2 owl-carousel owl-theme">
                <div class="slider-item banner-bg-1">
                    <div class="container-fluid">
                        <div class="slider-content">
                            <h1>Start Your Beautiful & Bright Future From Here</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                                tellus luctus nec ullamcorper mattis pulvinar dapibus dolor sit
                                amet consec
                            </p>
                            <a href="courses.html" class="default-btn btn">Start a Journey <i
                                    class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div class="slider-item banner-bg-2">
                    <div class="container-fluid">
                        <div class="slider-content">
                            <h1>Explore Your Potential & Talents In Sanu</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                                tellus luctus nec ullamcorper mattis pulvinar dapibus dolor sit
                                amet consec
                            </p>
                            <a href="courses.html" class="default-btn btn">Start a Journey <i
                                    class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div class="slider-item banner-bg-3">
                    <div class="container-fluid">
                        <div class="slider-content">
                            <h1>Explore Your Potential & Talents In Sanu</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                                tellus luctus nec ullamcorper mattis pulvinar dapibus dolor sit
                                amet consec
                            </p>
                            <a href="courses.html" class="default-btn btn">Start a Journey <i
                                    class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Banner Area-->

        <div class="campus-life-area ptb-50">
            <div class="container">
                <div class="section-title">
                    <h2>Career Counseling Center News</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit
                        tellus luctus nec ullamcorper mattis Lorem ipsum dolor sit amet
                        consectetur adipiscing elit ut elit tellus luctus nec ullamcorper
                        mattis luctus nec ullamcorper mattis
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-for="(item, index) in cccnews" class="col-lg-4 col-md-6" data-aos="fade-up"
                        data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                        <div class="single-campus-card">
                            <div class="img">
                                <a href="#">
                                    <img width="420" :src="item.image" :alt="item.id">
                                </a>
                            </div>
                            <div class="campus-content">
                                <span v-for="(categoryItem, index) in item.categories">{{ categoryItem.name }},</span>
                                <a href="#">
                                    <h3>{{ item.title }}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-campus text-center">
                    <p>
                        View From Hundreds of Career Counseling News.
                        <a href="#" class="read-more-btn active">More on Career Counseling Center News <i
                                class="flaticon-next"></i></a>
                    </p>
                </div>
            </div>
        </div>
        <!--Career counseling center news part end-->
    </div>
</template>

<script>
export default {
    name: "Index",
    layout: 'home',

    created() {
        useHead({
            title: 'Home | EWU',
            meta: [
                {name: 'keywords', content: 'Nuxt 3'},
                {name: 'description', content: 'Nuxt 3'}
            ],
        })
    },
}
</script>

<style>

</style>