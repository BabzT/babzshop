<template>
  <div class="topsellers">
    <h1 class="tabtitle">Trending Products</h1>
    <button :class="{active : isActive1}" class="electronicsbtn" @click="activeTab = 'Electronics', electronics()">Electronics</button>
    <button :class="{active : isActive2}" class="menclothingbtn" @click="activeTab = 'MenClothing', clothing()">Men Clothing</button>

    <span class="material-symbols-outlined right">chevron_right</span>
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
            isActive1: true,
            isActive2: false
        }
    },
    methods:{
        electronics(){
            this.isActive1 = true
            this.isActive2 = false
        },
        clothing(){
            this.isActive1 = false
            this.isActive2 = true
        }
    }
}
</script>