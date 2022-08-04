<template>
  <Header/>
  <div class="pt-16 px-2">
    <div v-if="totalPrice !== 0" class="cartitems">
      <h1 class="text-2xl font-bold mb-2">Your Cart</h1>

      <div  v-for="items in cartItems" :key="items.id" class="flex items-center my-2 justify-between">
        <img class="h-14 w-14" :src="items.image" alt="">

        <div class="text-xs w-7/12 font-bold text-left">
          <p>{{items.title}}</p>
          <p>${{items.price}}</p>
          <button class=""><span class="material-symbols-outlined text-lg text-red-600">delete</span></button>
        </div>
        <div class="additems">
          <button @click="removeItem(items)">-</button>
          <span>{{items.quantity}}</span>
          <button @click="addItem(items)">+</button>
        </div>
      </div>
      <p class="font-bold text-lg my-2">Your Total: <span>${{totalPrice}}</span></p>
      <button @click="checkOut" class="bg-green-600 text-white mr-3 font-bold p-2 rounded-md">CHECKOUT</button>
      <button class="bg-purple-500 text-white font-bold p-2 rounded-md">CLEAR CART</button>
    </div>
    <EmptyCart v-else/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EmptyCart from '@/components/EmptyCart.vue'
import {mapState} from "vuex"
import  swal from 'sweetalert'
export default {
    name:'CartView',
    components:{
        Header,
        EmptyCart
    },
    data(){
      return{
        
      }
    },
    computed:{
      ...mapState(['cartItems']),
      totalPrice(){
        let price= 0;
        this.$store.state.cartItems.map(el => {
          price += el['quantity'] * el['price']
        });
        return price;
      }
    },
    methods:{
      addItem(items){
        this.$store.dispatch('addToCart',items)
      },
      removeItem(items){
        this.$store.dispatch('removeItem',items)
      },
      checkOut(){
        swal("Good Job!", "Your order is placed successfully!", "success").then(
          value => {
            window.location.href = "/cart";
          }
        )
      },
    }
}
</script>

<style>

</style>