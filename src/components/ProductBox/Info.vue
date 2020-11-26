<template>
  <div class="info-wrapper">
    <p class="text">{{data.description||data.name}}</p>
    <div class="content">
      <div class="info">
        <div class="price-wrapper">
          <p class="promotion-price">{{$tc('product.priceUnit')}}{{data.promotionPrice | setThousandth}}</p>
          <p v-if="data.promotionPrice!==data.price" class="price">{{$tc('product.priceUnit')}}{{data.price | setThousandth}}</p>
        </div>
        <p class="sem" v-if="data.sem">
          {{$t('product.semInfo',
          {num:data.sem.num,perPayment:data.sem.perPayment,semJuros:getSemJuros})}}
        </p>
      </div>
      <i :class="cls" v-if="data.promotionType" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import commonMixin from '@/mixins/common';

@Component({
  props: {
    data: Object,
  },
  mixins: [commonMixin],
})
export default class Info extends Vue {
  get cls() {
    const { promotionType } = this.$props.data;
    let iconNm = '';
    switch (promotionType) {
      case 'FLASH_DEAL':
        iconNm = 'icon-flash';
        break;
      case 'GROUP_DEAL':
        iconNm = 'icon-group';
        break;
      default:
    }
    return `${iconNm} iconfont`;
  }
  get getSemJuros() {
    const { sem } = this.$props.data;
    if (sem.semJuros) {
      return this.$tc('product.semJuros');
    }
    return this.$tc('product.noSemJuros');
  }
}
</script>
<style scoped lang="scss">
// 信息展示区 Info
.info-wrapper {
  font-size: $size-14;
  .text {
    // font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    font-size: $size-14;
    font-size: 13px;
    color: $color-3;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    margin-bottom: 6px;
    .info {
      margin-right: 5px;
      .price-wrapper {
        padding: 2px 0;
        display: flex;
        align-items: center;
        p {
          &.promotion-price{
            font-size: $size-22;
            color: $pro-main-color;
            font-weight: 450;
          }

          &.price {
            font-size: $size-12;
            color: $font-color-disabled-base;
            flex: 1;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }
      }
      .sem {
        margin-top: 4px;
        font-size: $size-12;
        color: $color-9;
        text-align: left;
      }
    }
    .iconfont {
      width: 22px;
      text-align: center;
      height: 22px;
      line-height: 22px;
      border-radius: 22px;
      color: $color-white;

      &.icon-flash {
        background-color: $flash-icon-bg;
      }

      &.icon-group {
        background-color: $group-icon-bg;
      }
    }
  }
}
</style>
