<template>
  <layout class="user">
    <template slot="body">
      <el-row class="ph-30">
        <el-col :span="4"><user-menu :current="current"></user-menu></el-col>
        <el-col :span="20">
          <div class="user-info ml-40">
            <slot name="right"></slot>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UserMenu from '@/components/UserMenu.vue';
import Layout from './Layout.vue';

@Component({
  name: 'UserLayout',
  props: {
    current: {
      type: String,
      default: '',
    },
  },
  components: {
    Layout,
    UserMenu,
  },
})
export default class UserLayout extends Vue {}
</script>
