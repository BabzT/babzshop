<template>
    <Header/>
    <div class="productdetail">
        <div class="detailimg"> 
            <img :src="product.image" alt="">
        </div>
        <div class="productinfo mb-16 w-11/12 text-center">
            <p><span class="text-base">{{product.title}}</span></p>
            <p>Category: <span class="text-sm capitalize">{{product.category}}</span></p>
            <p>Price: <span class="text-sm text-rose-600">${{product.price}}</span></p>
            <p>Description: <span class="text-xs capitalize">{{product.description}}</span></p>
        </div>
    </div>
    <div class="adddiv">
        <button :class="{disabled : isDisabled}" :disabled="isDisabled" @click="addToCart" class="addbtn">Add Item</button>
    </div>
 
</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';

export default {
    name:'ProductDetails',
    components:{
        Header,
    },
    data(){
        return{
            id:this.$route.params.id,
            product:{},
            isDisabled: false
        }
    },
    methods:{
       addToCart(){
        this.$store.dispatch('addToCart',this.product);
        this.isDisabled = true;
       },
    },
    async created(){
        const response = await axios.get(`https://fakestoreapi.com/products/` + this.id);
        this.product = response.data; 

        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        console.log(cartItems)
        if(cartItems.length > 0){
            let item = this.product;
            let inCart = cartItems.some(i => i.id === item.id)
            console.log(inCart)
            if(inCart){
                this.isDisabled = true;
            }
        }
    },
    
}
</script>

<style>

</style>
