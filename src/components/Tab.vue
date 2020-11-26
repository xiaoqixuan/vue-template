<template>
  <div class="tas-wrap">
    <ul :class="`nav-tabs ${className}`">
      <li :class="`nav-item ${isActive(tabItem.id) ? 'active' : ''}`"
        v-for="(tabItem, index) in tabItemList.list"
        @click="changeActive(tabItem.id)" :key="index">
        <a href="javascript:;">{{ tabItem.label }}</a>
      </li>
    </ul>
    <el-divider v-if="className !== 'login-tabs'"></el-divider>
    <div class="tabs-content">
      <!-- <div v-for="(tabItem, index) in tabItemList.list" :key="index"> -->
        <slot :name="tabItemList.activeId" class="tab-pane"></slot>
      <!-- </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    tabItemList: {
      type: Object,
      default: () => ({}),
    },
    className: {
      type: String,
      default: '',
    },
  },
})
export default class Tab extends Vue {
  tabItemList: {
    activeId: String;
    list: Array<any>;
  };

  isActive(tabItemId: string): boolean {
    return this.tabItemList.activeId === tabItemId;
  }

  changeActive(tabItemId: string) {
    this.tabItemList.activeId = tabItemId;
    this.$emit('changeActive', tabItemId);
  }
}
</script>

<style lang="scss" scoped>
.tas-wrap {
  // width: 400px;
  background-color: #fff;
  border-radius: $radius;
  font-size: $size-14;
  .nav-tabs {
    display: flex;
    height: 35px;
    line-height: 35px;
    color: #909399;
    .nav-item {
      padding: 0 20px;
      text-align: center;
      list-style: none;
      &.active {
        color: #fff;
        background-color: $color-main;
        border-radius: $radius;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  .login-tabs.nav-tabs {
    height: 40px;
    line-height: 40px;
    background-color: #f5f7fa;
    .nav-item {
      flex: 1;
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      &.active {
        color: #129F84;
        background-color: #fff;
        border-bottom-color: #fff;
      }
      &:last-child {
        border-right: none;
      }
    }
    &+.tabs-content {
      padding: 25px 20px;
    }
  }
  >.el-divider--horizontal {
    margin: 15px 0;
  }
}
</style>
