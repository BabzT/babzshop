<template>
  <div>

    <Preloader v-show="allMenClothing.length < 3"/>

    <div class="electronics">
      <div v-for="product in allMenClothing" :key="product.id" class="product">
        <router-link :to="'/productdetails/' + product.id" class="h-full">
        <img :src="product.image" alt="" class="productimg">
        <div class="details">
          <p>{{product.title.slice(0,11)}}...</p>
          <h1>Review: {{product.rating.count}}</h1>
          <p>${{product.price}}</p>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '@/components/Preloader.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'MenClothing',
    components:{
      Preloader
    },
    computed:{
        ...mapGetters(['allMenClothing'])
    },
    methods:{
        ...mapActions(['fetchMenClothing']),
    },
    created(){
        this.fetchMenClothing();
    }
}
</script>

<style>

</style>