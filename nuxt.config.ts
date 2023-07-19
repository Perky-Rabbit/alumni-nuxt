// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  app: {
    head: {
      // meta: [
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // ],

      script: [
        { src: 'js/jquery.min.js', body:true },
        { src: 'js/bootstrap.bundle.min.js', body:true },
        { src: 'js/jquery.meanmenu.js', body:true },
        { src: 'js/owl.carousel.min.js', body:true },
        { src: 'js/carousel-thumbs.min.js', body:true },
        { src: 'js/jquery.magnific-popup.js', body:true },
        { src: 'js/aos.js', body:true },
        { src: 'js/odometer.min.js', body:true },
        { src: 'js/appear.min.js', body:true },
        { src: 'js/form-validator.min.js', body:true },
        { src: 'js/contact-form-script.js', body:true },
        { src: 'js/ajaxchimp.min.js', body:true },
        { src: 'js/custom.js', body:true },
      ],

      link: [
        { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'css/meanmenu.css' },
        { rel: 'stylesheet', href: 'css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: 'css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: 'css/magnific-popup.css' },
        { rel: 'stylesheet', href: 'css/flaticon.css' },
        { rel: 'stylesheet', href: 'css/remixicon.css' },
        { rel: 'stylesheet', href: 'css/odometer.min.css' },
        { rel: 'stylesheet', href: 'css/aos.css' },
        { rel: 'stylesheet', href: 'css/style.css' },
        { rel: 'stylesheet', href: 'css/dark.css' },
        { rel: 'stylesheet', href: 'css/responsive.css' },
      ],
    }
  }
  
})
