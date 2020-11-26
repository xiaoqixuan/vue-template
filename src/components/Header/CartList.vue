<template>
<div class="header-cart">
  <div class="cart-list" v-loading="status.isSending">
    <div class="product-msg"
      v-for="(product, i) in cartList" :key="i">
      <router-link
        :to="{
          name: 'ProductDetail',
          params: { productId: product.productId },
        }"><image-onerror :src="product.productPic" /></router-link>
      <div>
        <p>
          <router-link
            :to="{
              name: 'ProductDetail',
              params: { productId: product.productId },
            }"><strong>{{ product.productName }}</strong></router-link>
        </p>
        <div class="product-attributes">
          <p v-for="(pro, index) in product.spList"
            :key="index">{{pro}}</p>
        </div>
        <div class="mt-10 product-operate">
          <p class="actual-payment">{{currency}}{{product.price | setThousandth}} * {{product.quantity}}</p>
          <el-button type="danger" size="mini" icon="el-icon-delete"
            @click="deleteProduct(product)">{{$tc('actions.delete')}}</el-button>
        </div>
      </div>
    </div>
  </div>
  <div class="view-my-cart">
    <el-button
      type="primary" size="small"
      @click="$router.push('/cart')">
      {{$tc('cart.viewMyCart')}}
    </el-button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import commonMixin from '@/mixins/common';
// import $httpCart from '@/api/cart';
import ImageOnerror from '@/components/ImageOnerror.vue';

@Component({
  name: 'CartList',
  components: {
    ImageOnerror,
  },
  mixins: [commonMixin],
})
export default class CartList extends Vue {
  status: Record<string, boolean>;
  dealError: (response: any) => {};

  get memberId(): string | number {
    return this.$store.state.userInfo.memberId;
  }

  get cartList(): Array<any> {
    return [];
  }

  deleteProduct(product) {
    this.status.isSending = true;
    const ids = [product.id];
    // $httpCart.deleteProduct(ids)
    //   .then(() => {
    //     this.status.isSending = false;
    //     this.refreshList();
    //   })
    //   .catch((response = {}) => {
    //     this.status.isSending = false;
    //     this.dealError(response);
    //   });
  }

  refreshList() {
    // this.$store.dispatch('cart/getCartList', {
    //   memberId: this.memberId,
    //   page: 1,
    //   size: 10,
    // });
  }
}
</script>

<style scoped lang="scss">
.header-cart {
  .cart-list {
    margin-bottom: 10px;
    max-height: 200px;
    overflow-y: auto;
    .product-msg {
      padding: 5px;
      display: flex;
      align-items: center;
      font-size: $size-12;
      img {
        margin-right: 10px;
        width: 70px;
        height: 70px;
        border: 1px solid #f2f2f2;
        border-radius: $radius;
      }
      p {
        width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .product-operate {
        position: relative;
        .el-button {
          position: absolute;
          right: 0;
          top: calc(50% - 14px);
        }
      }
    }
  }
  .view-my-cart {
    padding-top: 10px;
    text-align: center;
    border-top: 1px solid #ccc;
  }
}
</style>
