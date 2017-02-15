<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <span class="icon">
          <i class="fa fa-github"></i>
          </span>
        </a>
        <router-link to="/" class="nav-item is-tab is-hidden-mobile" exact>Home</router-link>
        <router-link to="/users/10" class="nav-item is-tab is-hidden-mobile">Users 10</router-link>
        <router-link to="/users/12" class="nav-item is-tab is-hidden-mobile">Users 12</router-link>
        <router-link to="/storeExample" class="nav-item is-tab is-hidden-mobile">storeExample</router-link>
        <router-link to="/message" class="nav-item is-tab is-hidden-mobile">message</router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link to="/" class="nav-item is-tab is-hidden-tablet" exact>Home</router-link>
        <router-link to="/users/10" class="nav-item is-tab is-hidden-tablet">Users 10</router-link>
        <router-link to="/users/12" class="nav-item is-tab is-hidden-tablet">Users 12</router-link>
        <router-link to="/storeExample" class="nav-item is-tab is-hidden-tablet">storeExample</router-link>
        <router-link to="/message" class="nav-item is-tab is-hidden-tablet">message</router-link>
      </div>
    </div>
  </nav>
</template>
