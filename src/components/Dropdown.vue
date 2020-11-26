<template>
  <el-dropdown
    :trigger="trigger || 'hover'"
    placement="bottom-start"
    @command="handleCommand">
    <slot name="link"></slot>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="lang in options"
        :key="lang.value"
        :command="lang.value"
        :class="{ 'is-active': lang.value === current }">
        {{ lang.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Dropdown', // 组件名称
  props: {
    trigger: {
      type: String,
      default: '',
    },
    current: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
})
export default class Dropdown extends Vue {
  handleCommand(command) {
    this.$emit('changeVal', command);
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-menu .is-active {
  color: $color-main;
}
</style>
