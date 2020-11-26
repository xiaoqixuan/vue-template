<template>
<v-link sprite size="small"
  icon="cart" class="mr-10"
  v-if="!isLogin || hideCartList">
  <router-link v-if="hideCartList" :to="{ name: 'CartView' }" class="color-3">{{$tc('header.cart')}}</router-link>
  <span  v-else class="color-3">{{$tc('header.cart')}}</span>
</v-link>

<el-popover v-else class="header-cart"
  placement="bottom-start"
  trigger="hover">
  <cart-list small></cart-list>
  <v-link sprite size="small" v-if="!cartLen" class="color-3"
    icon="cart" slot="reference">{{$tc('header.cart')}}</v-link>
  <el-link class="shop-icon-link color-3"
    v-else :underline="false"
    slot="reference">
    <v-badge :value="cartLen" :max="10" class="badge-item">
      <v-icon size="small" icon="cart" />
    </v-badge>
    {{$tc('header.cart')}}</el-link>
</el-popover>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VIcon from '@/components/Icon.vue';
import VLink from '@/components/Link.vue';
import CartList from '@/components/Header/CartList.vue';
import VBadge from '@/components/Badge.vue';

@Component({
  name: 'HeaderCart',
  components: {
    VIcon,
    VLink,
    VBadge,
    CartList,
  },
})
export default class HeaderCart extends Vue {
  show: boolean = false;

  get isLogin(): boolean {
    return this.$store.state.isLogin;
  }

  get cartList(): Array<any> {
    return [];
  }

  get hideCartList(): boolean {
    return this.isLogin && !(this.cartList || []).length;
  }

  get cartLen(): number {
    return (this.cartList || []).length;
  }
}
</script>

<style lang="scss">
.header-cart {
  .badge-wrap {
    margin-right: 5px;
    .is-fixed {
      left: 50%;
    }
  }
}
.shop-icon-link {
  &:hover {
    .shop-icon-cart {
      background-position: -734px 0;
    }
  }
}
</style>
