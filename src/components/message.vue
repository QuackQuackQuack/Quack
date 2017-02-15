<template>
  <div>
    <h1 class="title">Message Input Example</h1>
    <hr>
    <label class="label">Input Test</label>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
    <p>{{message}}</p>
  </div>
</template>

<script>
import Input from './input.vue';
export default {
  data(){
    return {
      message: '메세지를 입력해주세요'
    }
  },
  components: {
    'app-input': Input
  }
}
</script>
