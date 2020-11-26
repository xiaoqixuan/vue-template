<template>
  <div class="badge-wrap">
    <slot></slot>
    <span v-if="value" class="is-fixed">{{ value > max ? `${max}+` : value }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Badge',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 99,
    },
  },
})
export default class Badge extends Vue {}
</script>

<style scoped lang="scss">
.badge-wrap {
    position: relative;
    display: inline-block;
    .is-fixed {
      position: absolute;
      bottom: 50%;
      margin-left: 3px;
      padding: 0 3px;
      height: 14px;
      line-height: 14px;
      background-color: red;
      color: #fff;
      border-radius: 10px;
      font-size: $size-12;
    }
}
</style>
