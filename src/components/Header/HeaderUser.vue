<template>
  <v-link sprite size="small"
  icon="user" class="mr-10 color-3" v-if="!isLogin"><router-link to="/login">{{ $tc('header.login') }}</router-link></v-link>
  <el-popover v-else class="header-user"
    placement="bottom-start"
    trigger="hover">
    <user-menu small></user-menu>
    <v-link sprite size="small" class="color-3"
    icon="user" slot="reference"><router-link to="/userInfo">{{ userInfo.accountName }}</router-link></v-link>
  </el-popover>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VLink from '@/components/Link.vue';
import VIcon from '@/components/Icon.vue';
import { UserInfo } from '@/store/interface';
import UserMenu from '@/components/UserMenu.vue';

@Component({
  name: 'HeaderUser',
  components: {
    VLink,
    VIcon,
    UserMenu,
  },
})
export default class HeaderUser extends Vue {
  show: boolean = false;

  get isLogin(): boolean {
    return this.$store.state.isLogin;
  }

  get userInfo(): UserInfo {
    return this.$store.state.userInfo;
  }
}
</script>

<style lang="scss">
.shop-icon-link {
  &:hover {
    color: $color-main;
    .shop-icon-user {
      background-position: -667px 0 !important;
    }
  }
}
</style>
