<template>
  <div class="topsellers">
    <h1 class="tabtitle">Top Sellers</h1>
    <button :class="{active : isActive1}" class="toppicksbtn" @click="activeTab = 'TopPicks', topPicks()">Top Picks</button>
    <button :class="{active : isActive2}" class="clothingbtn" @click="activeTab = 'WomenClothing', clothing()">Clothing</button>

    <span @click="scrollRight1" class="material-symbols-rounded right">arrow_forward</span>
    <span @click="scrollLeft1" class="material-symbols-rounded left">arrow_back</span>
    <component :is="activeTab"/>
  </div>
</template>

<script>
import TopPicks from '@/components/TopPicks.vue'
import WomenClothing from '@/components/WomenClothing.vue'
import scrollMixin1 from '@/mixins/scroll'
export default {
    name: 'TopSellers',
    mixins: [scrollMixin1],
    components:{
        TopPicks,
        WomenClothing
    },
    data(){
        return{
            activeTab: 'TopPicks',
            isActive1: true,
            isActive2: false
        }
    },
    methods:{
        topPicks(){
            this.isActive2 = false
            this.isActive1 = true
        },
        clothing(){
            this.isActive2 = true
            this.isActive1 = false
        }
    }
}
</script>

<style>

</style>