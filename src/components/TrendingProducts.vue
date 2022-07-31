<template>
  <div class="topsellers">
    <h1 class="tabtitle">Trending Products</h1>
    <button class="electronicsbtn active" @click="activeTab = 'Electronics', electronics()">Electronics</button>
    <button class="menclothingbtn" @click="activeTab = 'MenClothing', clothing()">Men Clothing</button>

    <component :is="activeTab"/>
  </div>
</template>

<script>
import Electronics from '@/components/Electronics.vue'
import MenClothing from '@/components/MenClothing.vue'
export default {
    name: 'TrendingProducts',
    components:{
        Electronics,
        MenClothing
    },
    data(){
        return{
            activeTab: 'Electronics',
        }
    },
    methods:{
        electronics(){
            document.querySelector('.electronicsbtn').classList.add('active')
            document.querySelector('.menclothingbtn').classList.remove('active')
        },
        clothing(){
            document.querySelector('.menclothingbtn').classList.add('active')
            document.querySelector('.electronicsbtn').classList.remove('active')
        }
    }
}
</script>