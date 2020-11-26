<template>
  <div class="pro-btn-wrapper cart" v-if="btnTye==='cart'">
    <el-button type="primary">Buy now</el-button>
    <el-button type="primary" icon="el-icon-shopping-cart-full">Add to cart</el-button>
  </div>
  <div class="pro-btn-wrapper group" v-else-if="btnTye==='group'">
    <el-button type="primary" icon="el-icon-shopping-cart-full">Join group</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    data: Object, // 商品信息
  },
  data() {
    return {
      btnTye: this.$props.data.btnType,
    };
  },
})
export default class ProButton extends Vue {}
</script>
<style scoped lang="scss">
// 底部按钮区域 ProButton
.pro-btn-wrapper {
    width: 100%;
    height: 24px;
    line-height: 24px;
    display: flex;

    .el-button--primary {
        border-radius: 0;
        // font-size: 12px;
        padding: 0;
        flex: 1;
    }

    .el-button+.el-button {
        margin-left: 0;
    }

    &.cart {

        .el-button--primary {
            &:first-child {
                background-color: $bottom-btn-color1;
                border-color: $bottom-btn-color1;
            }

            &:last-child {
                background-color: $bottom-btn-color2;
                border-color: $bottom-btn-color2;
            }
        }
    }

    &.group {
        .el-button--primary {
            background-color: $bottom-btn-color1;
            border-color: $bottom-btn-color1;
        }
    }
}
</style>
