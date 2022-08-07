<template>
  <div class="font-nunito min-h-screen">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('updateCartFromStorage')
  }
}
</script>