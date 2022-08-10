<template>
<header class="header">
    <div class="mobile">
        <div class="flex items-center">
            <div class="flex items-center md:hidden">
                <span @click="toggleSideNav" v-if="!sideNav" class="material-symbols-outlined text-3xl mr-1">menu</span>
                <span @click="toggleSideNav" v-if="sideNav" class="material-symbols-outlined text-3xl mr-1">close</span>
            </div>
            <h1 class="logo" @click="goTo('home')">Shop<span class="text-black">per</span></h1>
        </div>
        <div class="flex items-center">
            <div class="cart" @click="goTo('cart')">
                <span class="counter">{{cartItemCount}}</span>
                <span class="material-symbols-outlined text-green-500">shopping_bag</span>
            </div>
            <div class="relative">
                <div @click="profileToggle" class="login-icon">
                    <span class="material-symbols-outlined text-white">account_circle</span>
                </div>
                <transition name="options-anim">
                    <div v-show="profile" class="options">
                        <router-link class="mt-1" v-if="signin" :to="{name:'login'}">Login</router-link>
                        <hr>
                        <router-link class="mt-1" v-if="signin" :to="{name:'signup'}">SignUp</router-link>
                        <div v-show="logout">
                            <p class="capitalize text-base mt-2 mb-3 text-green-600">{{username}}</p>
                            <hr>
                            <a @click="logOut" class="text-rose-500">LogOut</a>
                        </div>
                    </div>
                </transition>
            </div>
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
        username:'',
        sideNav: null,
        profile:false,
        logout: false,
        signin:true
    }
 },
 mounted(){
    const user = JSON.parse(localStorage.getItem('user'));
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
    if(userinfo){
        this.username = user.username
        this.logout = true;
        this.signin = false
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
    },
    profileToggle(){
        this.profile = !this.profile
    },
    logOut(){
        sessionStorage.clear();
        window.location.href = "/"
    }
 }
}
</script>

