<template>
      <div class="img-wrapper">
      <image-onerror :src="data.pic" alt="Product Box" />
      <div class="discount" v-if="data.discount&&layout==='v'&&data.discount!==100">
        <p>{{$t("product.discount", {discount:100 - data.discount})}}</p>
        <p>{{$tc("product.discountUnit")}}</p>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ImageOnerror from '@/components/ImageOnerror.vue';

@Component({
  props: {
    data: Object, // 商品信息
    layout: String, // 布局
  },
  components: {
    ImageOnerror,
  },
})
export default class ImagePlugin extends Vue {}
</script>
<style scoped lang="scss">
// 图片区域 Image
.img-wrapper {
    background-color: $color-white;

    img {
        width: 100%;
        height: 100%;
    }

    position: relative;

    .discount {
        width: 48px;
        height: 48px;
        background-color: $main-red;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 48px;
        text-align: center;
        vertical-align: middle;
        color: $color-white;
        font-size: $size-12;
        font-weight: bolder;
        z-index: 1;
        // display: flex;
        align-items: center;
        p {
          padding:0;
          margin:0;
          font-weight: 450;
          &:first-child {
            padding-top: 6px;
            font-size:15px;
          }
        }

        &::after {
            content: "";
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 24px solid $pro-main-color;
            border-left: 24px solid transparent;
            position: absolute;
            top: 0;
            right: 0px;
            z-index: -1;
        }
    }
}
</style>
