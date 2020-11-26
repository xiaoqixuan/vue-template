<template>
  <div>
    <v-header />
    <div class="page-body">
      <div class="page-content" v-if="!nocontent">
        <slot name="body"></slot>
      </div>
      <slot name="body-extend"></slot>
    </div>
    <back-top v-if="!nobacktop"/>
    <v-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VHeader from '@/components/Header/Header.vue';
import VFooter from '@/components/Footer.vue';
import BackTop from '@/components/BackTop.vue';

@Component({
  components: {
    VHeader,
    VFooter,
    BackTop,
  },
  props: {
    nocontent: Boolean,
    nobacktop: Boolean,
  },
})

export default class Layout extends Vue {
  tip:string = '主布局文件，子路由套用即可享有布局文件的布局效果';
}
</script>

<style lang="scss" scoped></style>
