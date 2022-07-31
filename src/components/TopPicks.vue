<template>
  <div class="relative">
    <span class="material-symbols-outlined right">chevron_right</span>
    <div class="toppicks">
      <div v-for="product in allJewelries" :key="product.id" class="product">
        <img :src="product.image" alt="">
        <div class="details">
          <p>{{product.title.slice(0,11)}}...</p>
          <h1>Review: {{product.rating.count}}</h1>
          <p>${{product.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'TopPicks',
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