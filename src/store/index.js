import { createStore } from 'vuex'
import axios from 'axios'

function updateLocalStorage(cartItems,cartItemCount){
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  localStorage.setItem('cartItemCount', JSON.stringify(cartItemCount))
}

export default createStore({
  state: {
    products:[],
    jewelries: [],
    womenclothing: [],
    electronics: [],
    menclothing:[],
    cartItemCount:0,
    cartItems: [],
  },

  getters: {
    allProducts: state => {
      return state.products
    },
    allJewelries: state => {
      return state.jewelries
    },
    allWomenClothing: state => {
      return state.womenclothing
    },
    allElectronics: state => {
      return state.electronics
    },
    allMenClothing: state => {
      return state.menclothing
    },
  },

  mutations: {
    setProducts(state, products){
      return state.products = products
    },
    setJewelries(state, jewelries) {
      return state.jewelries = jewelries
    },
    setWomenClothing(state,womenclothing){
      return state.womenclothing = womenclothing
    },
    setElectronics(state, electronics){
      return state.electronics = electronics
    },
    setMenClothing(state,menclothing){
      return state.menclothing = menclothing
    },
    addToCart(state,payload){
      let item = payload;
      item = {...item, quantity: 1}
      if(state.cartItems.length > 0){
        let myItem = state.cartItems.some(i => i.id == item.id)
        if(!myItem){
          state.cartItems.push(item)
          state.cartItemCount++
        }  
      } else{
        state.cartItems.push(item)
        state.cartItemCount++
      }
      
      updateLocalStorage(state.cartItems, state.cartItemCount)
    },
    addItem(state,payload){
      let item = payload;
      item = {...item, quantity:1}
      let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
      if(state.cartItems[itemIndex]['quantity'] < 10){
        state.cartItems[itemIndex]['quantity'] += 1;
        state.cartItemCount++
      }

      updateLocalStorage(state.cartItems, state.cartItemCount)
    },
    removeItem(state,payload){
      if(state.cartItems.length > 0){
          let index = state.cartItems.findIndex(el => el.id === payload.id)
          if(state.cartItems[index]["quantity"] > 1){
            state.cartItems[index]["quantity"] -= 1
            state.cartItemCount--
          }
      }

      updateLocalStorage(state.cartItems,state.cartItemCount)
    },
    deleteItem(state, payload){
      let index = state.cartItems.findIndex(el => el.id === payload.id);

      state.cartItemCount -= state.cartItems[index]['quantity'];
      state.cartItems.splice(index,1);

      updateLocalStorage(state.cartItems,state.cartItemCount)
    },
    clearCart(state){
      state.cartItems = [];
      state.cartItemCount = 0;

      updateLocalStorage(state.cartItems,state.cartItemCount)
    },
    updateCartFromStorage(state){
      const cartItems = localStorage.getItem('cartItems');
      const cartItemCount = localStorage.getItem('cartItemCount');

      state.cartItemCount = JSON.parse(cartItemCount)
      if(cartItems){
        state.cartItems = JSON.parse(cartItems)
      }
    }
  },

  actions: {
    async fetchJewelries(context){
      const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
      context.commit('setJewelries',response.data)
    },
    async fetchWomenClothing(context){
      const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
      context.commit('setWomenClothing',response.data)
    },
    async fetchElectronics(context){
      const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
      context.commit('setElectronics', response.data)
    },
    async fetchMenClothing(context){
      const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
      context.commit('setMenClothing',response.data)
    },
    async fetchProducts(context){
      const response = await axios.get("https://fakestoreapi.com/products");
      context.commit('setProducts',response.data)
    },
    addToCart:(context, payload) => {
      context.commit('addToCart', payload)
    },
    addItem:(context, payload) => {
      context.commit('addItem', payload)
    },
    removeItem:(context, payload) => {
      context.commit('removeItem', payload)
    },
    deleteItem:(context,id) => {
      context.commit('deleteItem', id)
    },
    clearCart:(context) => {
      context.commit('clearCart')
    },
    updateCartFromStorage:(context) => {
      context.commit('updateCartFromStorage')
    }
  },

})
