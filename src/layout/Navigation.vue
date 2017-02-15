<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item" href="https://github.com/QuackQuackQuack/Quack">
          <span class="icon">
          <i class="fa fa-github"></i>
          </span>
        </a>
      </div>
      <button class="nav-toggle" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-right nav-menu" :class="{active: isActive}">
        <router-link to="/" class="nav-item" exact>Home</router-link>
        <router-link to="/users/10" class="nav-item">Users 10</router-link>
        <router-link to="/users/12" class="nav-item">Users 12</router-link>
        <router-link to="/storeExample" class="nav-item">StoreExample</router-link>
        <router-link to="/message" class="nav-item">Message</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      isActive: false,
      message: '메세지를 입력해주세요'
    }
  },
  methods: {
    openMenu(e) {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.nav-toggle {border:0px;background-color:transparent;box-shadow:none}
.nav-toggle:hover {background-color:transparent}
.is-active {color:#00d1b2 !important}
.active {display:block;}
</style>
