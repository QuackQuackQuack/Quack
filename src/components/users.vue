<template>
  <div>
    <h1 class="title">Users</h1>
    <h2 class="subtitle po-rel">TeamId : {{ $route.params.teamId}}
      <button class="button" @click="goHome">go home</button>
    </h2>
    <hr>
  </div>
</template>
<script>
export default {
  watch: {
    '$route' (to, from) {
      //alert(to.params.teamId);
    }
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.button {position:absolute;top:0px;right:10px;}
.po-rel {position:relative;}
</style>
