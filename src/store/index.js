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
    cartItem: [],
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
    setProductDetail(state, productdetail){
      return state.productdetail = productdetail
    }
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
    async getProductDetail(context,id){
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(response.data)
      context.commit('setProductDetail',response.data)
      localStorage.setItem("setProductDetail",JSON.stringify(response.data))
    },
  },

})
