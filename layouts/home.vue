<template>
    <div>
        <Header />

        <slot />

        <Footer />
    </div>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Footer from '../components/Home/Footer.vue';
export default {
    name: 'default',
    components: {
        Header,
        Footer,
    }
}
</script>