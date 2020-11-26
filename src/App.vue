<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="store-body"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Cookie from 'js-cookie';
import Vue from 'vue';
import Component from 'vue-class-component';
import commonMixin from '@/mixins/common';
import { UserInfo } from '@/store/interface';
import HelloWorld from './components/HelloWorld.vue';
// import $httpUser from '@/api/user';

@Component({
  name: 'app',
  components: {
    HelloWorld,
  },
  mixins: [commonMixin],
})
export default class App extends Vue {
  dealError: (response: any) => {};

  get isLogin(): boolean {
    return this.$store.state.isLogin;
  }

  get userInfo(): UserInfo {
    return this.$store.state.userInfo;
  }

  mounted() {
    // this.isLogin && this.$store.dispatch('getUserInfo', this.userInfo.memberId)
    //   .then(() => {})
    //   .catch((response = {}) => {
    //     this.dealError(response);
    //   });
  }
}
</script>

<style lang="scss">
@import 'scss/common.scss';

#app {
  font-family: $fontStyle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
