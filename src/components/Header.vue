<template>
<header class="header">
    <div class="mobile">
        <div class="flex items-center">
            <div class="flex items-center">
                <span @click="toggleSideNav" v-if="!sideNav" class="material-symbols-outlined text-3xl mr-1">menu</span>
                <span @click="toggleSideNav" v-if="sideNav" class="material-symbols-outlined text-3xl mr-1">close</span>
            </div>
            <h1 class="logo" @click="goTo('home')">Shop<span class="text-black">per</span></h1>
        </div>
        <div class="flex items-center">
            <a class="cart" @click="goTo('cart')">
                <span class="counter">{{cartItemCount}}</span>
                <span class="material-symbols-outlined text-green-500">shopping_bag</span>
            </a>
            <a class="login-icon">
                <span class="material-symbols-outlined text-white">account_circle</span>
            </a>
        </div>
    </div>
</header>

<transition name="side-nav">
    <div v-if="sideNav" class="sidenav">
        <p>Live Help</p>
        <hr>
        <h1>MY SHOPPER ACCOUNT</h1>
        <p>Orders</p>
        <p>Pending Reviews</p>
        <p>Shopper Coupon</p>
        <hr>

        <h1>OUR CATEGORIES</h1>
        <p>Jewelries</p>
        <p>Electronics</p>
        <p>Women Fashion</p>
        <p>Men Fashion</p>
    </div>
</transition>
</template>

<script>
import {mapState} from 'vuex'
export default {
 name: 'Header',
 data(){
    return{
        sideNav: null,
    }
 },
 computed:{
    ...mapState(['cartItemCount'])
 },
 methods:{
    toggleSideNav(){
        this.sideNav = !this.sideNav
    },
    goTo(page){
        page === "home" ? this.$router.push({name:'home'}) : this.$router.push({name:'cart'})
    }
 }
}
</script>

