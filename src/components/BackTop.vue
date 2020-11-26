<template>
  <div class="to-top" @click="handleClick" v-show="show">
      <i class="el-icon-arrow-up"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import _ from 'lodash';

@Component({
  props: {
    top: {
      type: Number,
      default: 0,
    },
  },
})
export default class BackTop extends Vue {
  show: boolean = false;
  mounted() {
    // 监听滚动
    window.addEventListener('scroll', _.throttle(this.onscroll, 200));
  }
  beforeDestroy() {
    window.removeEventListener('scroll', this.onscroll);
  }
  handleClick() {
    document.documentElement.scrollTo({
      top: this.$props.top,
      behavior: 'smooth',
    });
  }
  onscroll() {
    const ws = window.scrollY; // 当前滚动条位置
    if (ws > (window.innerHeight - 150)) {
      if (!this.show) {
        this.show = true;
      }
    } else if (this.show) {
      this.show = false;
    }
  }
}
</script>

<style scoped lang="scss">
.to-top {
    position: fixed;
    right: 0;
    top: 90%;
    transform: translate(-90%, -100px);
    z-index: 1000;
    cursor: pointer;
    i {
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        width: 30px;
        color: $color-white;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        &.el-icon-arrow-up {
        background-color: $color-main;
        color: $color-white;
        }
    }
}
</style>
