<template>
  <div>
    <Header/>

    <div class="md:flex min-h-screen">
      <SideNav/>
      <div class="md:w-10/12 md:ml-auto">
        <div class="sectionOne">
        <transition appear
        @before-enter="beforeEnter"
        @enter="enter">
          <div class="text-center">
            <h1 class="title">Discover Our Latest Products</h1>
            <p class="font-medium md:text-base text-sm mb-4">Shopper is your #1 online shopping mall for everything you need. Start shopping now</p>
            <a href="#" class="btn">Shop Now</a>
          </div>
        </transition>
        </div>

        <TopSellers/>
        <TrendingProducts/>
        <Footer/>
      </div>
    </div> 
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideNav from '@/components/SideNav.vue'
import TopSellers from '@/components/TopSellers.vue'
import TrendingProducts from '@/components/TrendingProducts.vue'
import Footer from '@/components/Footer.vue'
import {mapGetters, mapActions} from 'vuex'
import gsap from 'gsap'

export default {
  name: 'HomeView',
  components: {
    Header,
    SideNav,
    TopSellers,
    TrendingProducts,
    Footer
  },
  computed:{
      ...mapGetters(["allProducts"])
    },
    methods:{
      ...mapActions(['fetchProducts']),
    },
    created(){
      this.fetchProducts();
    },

    setup(){
      const beforeEnter = (el) => {
        el.style.transform = 'translateY(-200px)'
        el.style.opacity = 0
      }
      const enter = (el) => {
        gsap.to(el, {
          duration: 3,
          y: 0,
          opacity: 1,
          ease: 'bounce.out'
        }) 
      }

      return {beforeEnter, enter}
    }
}
</script>
