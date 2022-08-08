<template>
  <div class="relative">
    <span class="material-symbols-outlined right">chevron_right</span>

    <div v-show="allMenClothing.length < 3" class="toppicks bg-gray-200 flex items-center justify-center font-bold">
      <p>LOADING PRODUCTS...</p>
    </div>
    <div class="toppicks">
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
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'MenClothing',
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