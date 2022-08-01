import { createStore } from 'vuex'
import axios from 'axios'

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
        let bool = state.cartItems.some(i => i.id == item.id)
        if(bool){
          let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[itemIndex]["quantity"] += 1;
        } else{
          state.cartItems.push(item)
        }
      } else{
        state.cartItems.push(item)
      }
      state.cartItemCount++
    },
    removeItem(state,payload){
      if(state.cartItems.length > 0){
        let bool = state.cartItems.some(i => i.id === payload.id)
        if(bool){
          let index = state.cartItems.findIndex(el => el.id === payload.id)
          if(state.cartItems[index]["quantity"] !== 0){
            state.cartItems[index]["quantity"] -= 1
            state.cartItemCount--
          }
          if(state.cartItems[index]["quantity"] == 0){
            state.cartItems.splice(index,1)
          }
        }
      }
    },
      
  },

  actions: {
    async fetchJewelries(context){
      const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
      // console.log(response.data)
      context.commit('setJewelries',response.data)
    },
    async fetchWomenClothing(context){
      const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
      // console.log(response.data)
      context.commit('setWomenClothing',response.data)
    },
    async fetchElectronics(context){
      const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
      // console.log(response.data)
      context.commit('setElectronics', response.data)
    },
    async fetchMenClothing(context){
      const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
      // console.log(response.data)
      context.commit('setMenClothing',response.data)
    },
    async fetchProducts(context){
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data)
      context.commit('setProducts',response.data)
      localStorage.setItem("products",JSON.stringify(response.data))
    },
    addToCart:(context, payload) => {
      context.commit('addToCart', payload)
    },
    removeItem:(context, payload) => {
      context.commit('removeItem', payload)
    },
  },

})
