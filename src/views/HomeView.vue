<template>
  <div>
    <Header/>

    <div class="sectionOne">
      <div class="text-center">
        <h1 class="title">Discover Our Latest Products</h1>
        <p class="font-medium text-sm mb-4">Shopper is your #1 online shopping mall for everything you need. Start shopping now</p>
        <a href="#" class="btn">Shop Now</a>
      </div>
    </div>

    <TopSellers/>
    <TrendingProducts/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TopSellers from '@/components/TopSellers.vue'
import TrendingProducts from '@/components/TrendingProducts.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    TopSellers,
    TrendingProducts
  },
}
</script>
