<template>
  <div class="relative">
    <span class="material-symbols-outlined right">chevron_right</span>

    <Preloader v-show="allJewelries.length < 3"/>

    <div class="toppicks">
      <div v-for="product in allJewelries" :key="product.id" class="product">
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
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'TopPicks',
  components:{
    Preloader
  },
  computed:{
    ...mapGetters(["allJewelries"])
  },
  methods:{
    ...mapActions(['fetchJewelries']),
  },
  created(){
    this.fetchJewelries();
  }
}
</script>

<style>

</style>