<template>
  <p class="control">
    <input class="input" type="text" :value="msg" @input="changeMessage" placeholder="input text">
  </p>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit('messageChanged', this.message);
    }
  }
}
</script>
