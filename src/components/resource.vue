<template>
  <div>
    <h1 class="title">Vue Resources Example</h1>
    <hr>
    <label>Name</label>
    <label class="flot-right">Phone Number</label>
    <ul>
      <li v-for="item in items">
        <p class="red"> {{ item.name}} </p>
        <p> {{ item.phone}} </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Input from './input.vue';
export default {
  data(){
    return {
      items: []
    }
  },
  beforeCreate() {
    var HostUrl = 'http://jsonplaceholder.typicode.com/users';
    this.$http.get(HostUrl )
      .then(function(response) {
        this.items = response.data;
      }, function(error) {
        console.log('error in .js:');
        console.log(error);
      }
    );
  }
}
</script>

<style scoped>
.flot-right {float:right;}
li {overflow:hidden;line-height:40px;margin-bottom:5px;border-bottom:1px solid #e0e0e0;vertical-align:middle;}
li:last-child {margin-bottom:0px;}
li p {float:right;}
.red {float:left;color:#ff6262;}
</style>
