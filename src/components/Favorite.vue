<template>
  <el-dropdown placement="bottom-start">
    <span class="el-dropdown-link">
      <v-link icon="star-off">{{ $tc('header.favorite.title') }}</v-link>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>{{ $tc('header.favorite.favorites') }}</el-dropdown-item>
      <el-dropdown-item><router-link to="/about">{{ $tc('header.favorite.favoriteStore') }}</router-link></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VLink from '@/components/Link.vue';

@Component({
  name: 'Favorite',
  components: {
    VLink,
  },
})
export default class Favorite extends Vue {}
</script>

<style scoped lang="scss"></style>
