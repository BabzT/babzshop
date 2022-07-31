<template>
<header class="header">
    <div class="mobile">
        <div class="flex items-center">
            <div class="flex items-center">
                <span @click="toggleSideNav" v-if="!sideNav" class="material-symbols-outlined text-3xl mr-1">menu</span>
                <span @click="toggleSideNav" v-if="sideNav" class="material-symbols-outlined text-3xl mr-1">close</span>
            </div>
            <h1 class="logo">Shop<span class="text-black">per</span></h1>
        </div>
        <div class="flex items-center">
            <a class="cart">
                <span class="counter">0</span>
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
    </div>
</transition>
</template>

<script>
export default {
 name: 'Header',
 data(){
    return{
        sideNav: null,
    }
 },
 methods:{
    toggleSideNav(){
        this.sideNav = !this.sideNav
    }
 }
}
</script>

