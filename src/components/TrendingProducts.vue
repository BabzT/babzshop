<template>
  <div class="topsellers">
    <h1 class="tabtitle">Trending Products</h1>
    <button :class="{active : isActive1}" class="electronicsbtn" @click="activeTab = 'Electronics', electronics()">Electronics</button>
    <button :class="{active : isActive2}" class="menclothingbtn" @click="activeTab = 'MenClothing', clothing()">Men Clothing</button>

    <span @click="scrollRight2" class="material-symbols-rounded right">arrow_forward</span>
    <span @click="scrollLeft2" class="material-symbols-rounded left">arrow_back</span>
    <component :is="activeTab"/>
  </div>
</template>

<script>
import Electronics from '@/components/Electronics.vue'
import MenClothing from '@/components/MenClothing.vue'
import scrollMixin2 from '@/mixins/scroll'
export default {
    name: 'TrendingProducts',
    mixins: [scrollMixin2],
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