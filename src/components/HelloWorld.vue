<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'HelloWorld', // 组件名称
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
})
export default class HelloWorld extends Vue {
  msg: string;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
