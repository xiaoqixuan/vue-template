<template>
  <el-link v-if="sprite" :underline="false"
    class="shop-icon-link" @click="$emit('click')">
    <v-icon :size="size" class="mr-5" :icon="icon" />
    <span><slot></slot></span>
  </el-link>

  <el-link v-else :icon="`el-icon-${ icon }`" :underline="false" @click="$emit('click')">
    <slot></slot>
  </el-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VIcon from '@/components/Icon.vue';

@Component({
  name: 'Link',
  props: {
    icon: {
      type: String,
      default: '',
    },
    sprite: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
  components: {
    VIcon,
  },
})
export default class Link extends Vue {}
</script>

<style scoped lang="scss"></style>
