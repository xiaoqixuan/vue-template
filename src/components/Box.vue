<template>
  <div class="box">
    <div class="box-header">
      <b>{{ header }}</b>
      <slot name="toolbar"></slot>
      <slot name="headerBtn"></slot>
    </div>
    <div class="box-body">
      <slot name="content"></slot>
      <slot name="cover"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: ['header'],
})

export default class Box extends Vue {}
</script>

<style scoped lang="scss">
  .box {
    margin-bottom: 15px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: $radius;
    .box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      .toolbar {
        position: absolute;
        top: 10px;
        right: 20px;
      }
    }
    .box-body {
      position: relative;
    }
  }
</style>
