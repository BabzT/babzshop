<template>
    <Header/>
    <div class="flex flex-col items-center pt-16">
        <div class="detailimg"> 
            <img :src="product.image" alt="">
        </div>
        <div class="productinfo mb-16 w-11/12 text-center">
            <p><span class="text-base">{{product.title}}</span></p>
            <p>Category: <span class="text-sm capitalize">{{product.category}}</span></p>
            <p>Price: <span class="text-xs text-rose-600">${{product.price}}</span></p>
            <p>Description: <span class="text-xs capitalize">{{product.description}}</span></p>
            <!-- <p>Reviews:{{product.rating.count}}</p> -->
        </div>
        
    </div>
    <div class="adddiv">
        <button @click="addToCart" class="addbtn">Add Item</button>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
    name:'ProductDetails',
    components:{
        Header
    },
    data(){
        return{
            id:this.$route.params.id,
            product:{},
        }
    },
    methods:{
       addToCart(){
        this.$store.dispatch('addToCart',this.product)
       },
       removeItem(){
        this.$store.dispatch('removeItem',this.product)
       },
    },
    async created(){
        const response = await axios.get(`https://fakestoreapi.com/products/` + this.id);
        this.product = response.data;
        console.log(response.data)
    },
}
</script>

<style>

</style>
