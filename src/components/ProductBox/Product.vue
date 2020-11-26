<template>
    <div @click="handleClick" :class="cls">
      <image-plugin :data="data" :layout="layout"/>
      <div class="infos-wrapper">
        <info :data="data" />
        <sale-num :data="data" />
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ImagePlugin from './Image.vue';
import Info from './Info.vue';
import SaleNum from './SaleNum.vue';
import ProButton from './ProButton.vue';

@Component({
  props: {
    data: Object, // 商品信息
    click: Function, // 商品的点击事件
    className: String, // 自己传入的classname
    layout: String, // 商品的位置；v|h 分别代表横和竖布局
  },
  components: {
    ImagePlugin,
    Info,
    SaleNum,
    ProButton,
  },
})
export default class Product extends Vue {
  get cls() {
    const { layout, className } = this.$props;
    const positionCls = layout === 'v' ? 'product-v' : 'product-h';
    const cls = className ? `${className} ${positionCls}` : positionCls;
    return `${cls} product-box-wrapper`;
  }

  handleClick() {
    this.$router.push(`/productDetail/${this.$props.data.id}`);
    this.$emit('click', this.$props.data.id);
  }
}
</script>
<style lang="scss">
// 时间区域
.time-wrapper {
  height: 22px;
  line-height: 22px;
  width: 100%;
  color: $color-white;
  background-color: $top-time-bg;
  text-align: center;
}

// 整体product
.product-box-wrapper {
  cursor: pointer;
  background-color: white;

  .infos-wrapper {
    padding: 15px 10px 25px 10px;
    position: relative;

    .price-wrapper {
      width: 100%;
    }
  }
}

.product-v {
    .img-wrapper {
     width: 100%;
     height: 0;
     padding-top: 100%;
     position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
}

.product-h {
    display: flex;
    height: 159px;
    .img-wrapper {
      img {
        width: 170px;
        height: 157px;
      }
    }
    .infos-wrapper {
      flex: 1;
    }
}
</style>
