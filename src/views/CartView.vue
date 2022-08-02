<template>
  <div>
    <Header/>
    <div>

    </div>
    <EmptyCart/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EmptyCart from '@/components/EmptyCart.vue'
export default {
    name:'CartView',
    components:{
        Header,
        EmptyCart
    }

}
</script>

<style>

</style>