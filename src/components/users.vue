<template>
  <div>
    <h1>Users</h1>
    <p>TeamId : {{ $route.params.teamId}}</p>
    <button @click="goHome">go home</button>
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
