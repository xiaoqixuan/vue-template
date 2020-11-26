<template>
  <div v-show="showEmpty" class="empty-wrap">
    <p class="empty-msg">
      <i class="el-icon-info"></i>
      {{ $tc('common.noData') }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'EmptyMsg',
  props: {
    showEmpty: {
      type: Boolean,
      default: false,
    },
  },
})
export default class EmptyMsg extends Vue {}
</script>

<style scoped lang="scss">
  .empty-wrap {
    position: relative;
    background-color: transparent;
    padding: 50px 0;
    .empty-msg {
      text-align: center;
      top: calc(50% - 25px)!important;
    }
  }
</style>
