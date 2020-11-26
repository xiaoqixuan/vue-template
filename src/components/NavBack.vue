<template>
  <div class="nav-back-content">
    <span><slot name="title">{{ title }}</slot></span>
    <!-- <span>{{ title }}</span> -->
    <v-link icon="d-arrow-left" @click="$router.go(-1)">{{$tc("common.back")}}</v-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VLink from '@/components/Link.vue';

@Component({
  name: 'NavBack',
  props: {
    title: {
      type: String || Element,
      default: '',
    },
  },
  components: {
    VLink,
  },
})
export default class NavBack extends Vue {}
</script>

<style lang="scss" scoped>
  .nav-back-content {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: $size-16;
    span {
      // font-weight: bolder;
      font-size: $size-20;
      color: $color-6;
    }
    .el-link {
      font-size: inherit;
    }
  }
</style>
