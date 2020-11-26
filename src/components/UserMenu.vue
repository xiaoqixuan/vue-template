<template>
  <div :class="`user-menu ${small && 'user-menu-small'}`">
    <div class="avatar-wrap">
      <el-avatar shape="square" :size="small ? 50 : 70"
        :src="userInfo.logo"></el-avatar>
      <div class="ml-10">
        <span>LV.{{ userInfo.level || 0 }}</span><br>
        <router-link to="/userInfo"><v-link icon="edit">{{ $tc('userMenu.modify') }}</v-link></router-link>
      </div>
    </div>
    <el-menu
      router class="mt-25 text-center"
      :default-active="current">
      <el-menu-item
        v-for="(route, index) in routerList"
        :key="route.key + index" :index="route.key">
        <p>
          <v-badge :value="route.badge" :max="99" class="badge-item" slot="title">
            <span>{{ route.label }}</span>
            <i v-if="route.icon" :class="route.icon"></i>
          </v-badge>
        </p>
      </el-menu-item>
      <el-menu-item v-show="small" @click="logout"><span slot="title">{{ $tc('header.logout') }}</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Cookie from 'js-cookie';
import Vue from 'vue';
import Component from 'vue-class-component';
import { UserInfo } from '@/store/interface';
import VLink from '@/components/Link.vue';
import VBadge from '@/components/Badge.vue';

@Component({
  name: 'UserMenu',
  props: {
    current: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VLink,
    VBadge,
  },
})
export default class UserMenu extends Vue {
  get userInfo(): UserInfo {
    return this.$store.state.userInfo;
  }

  get routerList(): Array<any> {
    const { messageCnt = 0, sysMessageCnt = 0 } = this.userInfo;
    return [
      { key: '/userInfo', label: this.$tc('userInfo.link') },
      { key: '/myOrder', label: this.$tc('order.link') },
      { key: '/msgList/systemMsg', label: this.$tc('systemMsg.link'), badge: sysMessageCnt },
      { key: '/msgList/myMsg', label: this.$tc('userMenu.mymsg'), badge: messageCnt },
      { key: '/induce', label: this.$tc('userMenu.favorite'), icon: 'el-icon-mobile-phone' },
      { key: '/viewed', label: this.$tc('userMenu.viewed') },
    ];
  }

  logout() {
    const user = JSON.parse(Cookie.get('user'));
    this.$store.dispatch('logout', {
      token: user.token,
    }).then(({ data }) => {
      this.$router.push('/index');
    });
  }
}
</script>

<style scoped lang="scss">
.user-menu {
  .avatar-wrap {
    display: flex;
    align-items: center;
  }
  .el-menu {
    border-right: none;
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      border-radius: 30px;
      &.is-active {
        color: #fff;
        background-color: $color-main;
      }
      &:hover, :focus {
        color: $color-main;
        background-color: $color-hover;
      }
    }
  }
}
.user-menu-small {
  .el-menu .el-menu-item {
    height: 30px;
    line-height: 30px;
  }
}
</style>
