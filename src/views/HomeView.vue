<template>
  <div>
    <Header/>

    <div class="md:flex">
      <SideNav/>
      <div class="md:w-10/12 md:ml-auto">
        <div class="sectionOne">
        <div class="text-center">
          <h1 class="title">Discover Our Latest Products</h1>
          <p class="font-medium md:text-base text-sm mb-4">Shopper is your #1 online shopping mall for everything you need. Start shopping now</p>
          <a href="#" class="btn">Shop Now</a>
        </div>
        </div>

        <TopSellers/>
        <TrendingProducts/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideNav from '@/components/SideNav.vue'
import TopSellers from '@/components/TopSellers.vue'
import TrendingProducts from '@/components/TrendingProducts.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Header,
    SideNav,
    TopSellers,
    TrendingProducts
  },
  computed:{
      ...mapGetters(["allProducts"])
    },
    methods:{
      ...mapActions(['fetchProducts']),
    },
    created(){
      this.fetchProducts();
    }
}
</script>
