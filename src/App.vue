<template>
  <div class="font-nunito">
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