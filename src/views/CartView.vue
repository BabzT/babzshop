<template>
  <Header/>
  <div class="pt-16 min-h-screen px-2 md:w-2/4 md:mx-auto">
    <div v-if="totalPrice !== 0" class="cartitems">
      <h1 class="text-2xl font-bold mb-2">Your Cart</h1>

      <div  v-for="items in cartItems" :key="items.id" class="flex items-center my-2 justify-between">
        <img class="h-16 w-14 md:h-20 md:w-20" :src="items.image" alt="">

        <div class="text-xs w-7/12 font-bold text-left">
          <p>{{items.title}}</p>
          <div class="flex items-center justify-between pr-4">
            <p class="text-amber-500 text-sm">${{items.price}}</p>
          <button @click="deleteItem(items)"><span class="material-symbols-outlined text-lg text-red-600">delete</span></button>
          </div>
        </div>
        <div class="additems">
          <button @click="removeItem(items)">-</button>
          <span>{{items.quantity}}</span>
          <button @click="addItem(items)">+</button>
        </div>
      </div>
      <p class="font-bold text-lg my-2">Your Total: <span>${{totalPrice.toFixed(2)}}</span></p>
      <button @click="checkOut" class="bg-green-600 text-white mr-3 font-bold p-2 rounded-md">CHECKOUT</button>
      <button @click="clearCart" class="bg-purple-500 text-white font-bold p-2 rounded-md">CLEAR CART</button>
    </div>
    <EmptyCart v-else/>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import EmptyCart from '@/components/EmptyCart.vue'
import Footer from '@/components/Footer.vue'
import {mapState, mapActions} from "vuex"
import  swal from 'sweetalert'
export default {
    name:'CartView',
    components:{
        Header,
        EmptyCart,
        Footer
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
      ...mapActions(['clearCart']),
      addItem(items){
        this.$store.dispatch('addItem',items)
      },
      removeItem(items){
        this.$store.dispatch('removeItem',items)
      },
      deleteItem(items){
        this.$store.dispatch('deleteItem', items)

      },
      checkOut(){
        swal("Good Job!", "Your order is placed successfully!", "success").then(
          value => {
            window.location.href = "/cart";
            this.clearCart()
          }
        )
      },
    }
}
</script>

<style>

</style>