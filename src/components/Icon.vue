<template>
  <i :class="{
      'shop-icon': true,
      [`shop-icon-${icon}`]: true,
      'mini': !size || size === 'mini',
      'small': size === 'small',
      'medium': size === 'medium',
      'large': size === 'large',
    }"></i>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
})
export default class Icon extends Vue {}
</script>

<style scoped lang="scss"></style>
