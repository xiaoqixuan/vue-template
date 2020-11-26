<template>
  <header class="page-header">
    <div class="page-content">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
      </router-link>

      <search-bar />

      <div class="header-operate">
        <header-user class="mr-10"></header-user>
        <header-cart class="mr-10"></header-cart>
        <v-link sprite size="small"
          :icon="`${isLogin && userInfo.hasFavorite ? 'favorite-hover' : 'favorite'}`"
          :class="`mr-10 color-3 ${isLogin && userInfo.hasFavorite ? 'is-active' : ''}`">
          <router-link :to="isLogin ? '/induce' : ''">{{ $tc('header.favorite.title') }}</router-link>
        </v-link>
        <v-language></v-language>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { UserInfo } from '@/store/interface';
import SearchBar from '@/components/Header/SearchBar.vue';
import HeaderUser from '@/components/Header/HeaderUser.vue';
import HeaderCart from '@/components/Header/HeaderCart.vue';
import VLink from '@/components/Link.vue';
import VLanguage from '@/components/Language.vue';
import VLogin from '@/components/Login.vue';

@Component({
  name: 'Header',
  components: {
    SearchBar,
    HeaderUser,
    HeaderCart,
    VLink,
    VLanguage,
    VLogin,
  },
})
export default class Header extends Vue {
  get isLogin(): boolean {
    return this.$store.state.isLogin;
  }

  get userInfo(): UserInfo {
    return this.$store.state.userInfo;
  }
}
</script>

<style lang="scss">
  .page-header {
    .page-content {
      display: flex;
      padding: 25px 0 8px;
      justify-content: space-between;
      align-items: center;
      .router-link-active {
        width: 210px;
        img {
          width: inherit;
        }
      }
      .shop-icon-link {
        &:hover {
          .shop-icon-favorite {
            background-position: -605px 0;
          }
        }
      }
    }
  }
</style>
