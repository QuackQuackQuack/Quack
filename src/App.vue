<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="section">
      <router-view class="container"></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation
  }

}
</script>
