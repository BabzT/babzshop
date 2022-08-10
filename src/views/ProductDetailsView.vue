<template>
    <Header/>
    <div class="productdetail">
        <transition name="options-anim">
        <div v-if="toast" id="toast-success" class="flex fixed top-14 items-center px-4 py-3 mb-4 w-full max-w-fit text-gray-600 bg-white rounded-lg shadow" role="alert">
            <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Check icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">Item added successfully.</div>
            <button @click="this.toast = false" type="button" class="ml-2 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        </transition>

        <div class="detailimg"> 
            <img :src="product.image" alt="">
        </div>
        <div class="productinfo mb-16 w-11/12 text-center">
            <p><span class="text-base">{{product.title}}</span></p>
            <p>Category: <span class="text-sm capitalize">{{product.category}}</span></p>
            <p>Price: <span class="text-sm text-rose-600">${{product.price}}</span></p>
            <p>Description: <span class="text-xs capitalize">{{product.description}}</span></p>
        </div>
        <div class="adddiv">
            <button :class="{disabled : isDisabled}" :disabled="isDisabled" @click="addToCart" class="addbtn">Add Item</button>
        </div>
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
            isDisabled: false,
            toast: false,
        }
    },
    methods:{
       addToCart(){
        this.$store.dispatch('addToCart',this.product);
        this.isDisabled = true;
        this.toast = true
        setTimeout(() => this.toast = false, 4000)
       },
    },
    async created(){
        const response = await axios.get(`https://fakestoreapi.com/products/` + this.id);
        this.product = response.data; 

        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        console.log(cartItems)
        if(cartItems){
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
