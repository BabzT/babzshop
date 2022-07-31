<template>
  <div class="topsellers">
    <h1 class="tabtitle">Top Sellers</h1>
    <button class="toppicksbtn active" @click="activeTab = 'TopPicks', topPicks()">Top Picks</button>
    <button class="clothingbtn" @click="activeTab = 'WomenClothing', clothing()">Clothing</button>

    <component :is="activeTab"/>
  </div>
</template>

<script>
import TopPicks from '@/components/TopPicks.vue'
import WomenClothing from '@/components/WomenClothing.vue'
export default {
    name: 'TopSellers',
    components:{
        TopPicks,
        WomenClothing
    },
    data(){
        return{
            activeTab: 'TopPicks',
        }
    },
    methods:{
        topPicks(){
            document.querySelector('.toppicksbtn').classList.add('active')
            document.querySelector('.clothingbtn').classList.remove('active')
        },
        clothing(){
            document.querySelector('.clothingbtn').classList.add('active')
            document.querySelector('.toppicksbtn').classList.remove('active')
        }
    }
}
</script>

<style>

</style>