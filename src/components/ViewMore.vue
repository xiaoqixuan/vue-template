<template>
  <div class="view-more" @click="handleClick" v-if="pageInfo.totalPage&&pageInfo.totalPage>1">
    <span v-if="loading">
      {{$tc('product.loading')}}
      <i class="el-icon-loading" />
    </span>
    <span v-else-if="pageInfo.page===pageInfo.totalPage" class="no-more color-6">{{$tc('product.noMore')}}</span>
    <span v-else class="color-6">
      {{$tc('product.viewMore')}}
      <i class="el-icon-arrow-down" />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    pageInfo: Object,
  },
})
export default class ViewMore extends Vue {
  handleClick() {
    const { page, totalPage } = this.$props.pageInfo;
    if (page !== totalPage) {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="scss">
.view-more {
  margin: 20px auto;
  text-align: center;
  span {
    cursor: pointer;
    &.no-more {
      cursor: default;
    }
  }

  i {
    margin-left: 5px;
    color: $color-text;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #606266;
    text-align: center;
    font-size: 16px;
    &.el-icon-arrow-down {
      background-color: $group-icon-bg;
      border-radius: 20px;
      color: $color-white;
    }
  }
}
</style>
