<template>
  <ul class="steps-wrap text-center">
    <li v-for="(step, index) in stepList" :key="index" :class="{'is-finish': activeId >= index }">
      <v-icon size="large" class="mb-5" v-if="step.icon"
      :icon="step.icon + (activeId >= index ? '-active' : '')" /><br>
      <i class="el-icon-success"></i>
      <p>{{step.value}}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VIcon from '@/components/Icon.vue';

@Component({
  name: 'Step',
  props: {
    activeId: {
      type: Number,
      default: 0,
    },
    stepList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VIcon,
  },
})
export default class Step extends Vue {}
</script>

<style lang="scss" scoped>
.steps-wrap {
  display: flex;
  justify-content: space-around;
  font-size: $size-14;
  li {
    position: relative;
    flex: 1;
    &::before {
      position: absolute;
      display: block;
      content: '';
      bottom: 37px;
      right: calc(50% + 11px);
      width: calc(100% - 22px);
      height: 2px;
      background-color: #ccc;
    }
    &:first-child::before {
      display: none;
    }
    &.is-finish {
      i, p {
        color: $color-main;
      }
      &::before {
        background-color: $color-main;
      }
    }
    i {
      font-size: 24px;
      color: #ccc;
    }
    p {
      margin: 5px 0;
    }
  }
}
</style>
