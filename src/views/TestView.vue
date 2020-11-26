<template>
  <layout class="test">
    <template slot="body">
      <img alt="Vue logo" src="../assets/vue.png" />
      <el-button @click="testFunction">testAPi</el-button>
      <router-link to="/userInfo">UserInfo</router-link>

      <p>{{ $t('date.yearMonth', { year: 2020, month: $t(`months.${4}`) }) }}</p>

      <ValidationProvider
        name="initScriptName"
        rules="required|ipAddress"
        v-slot="{ classes, errors }"
      >
        <div class="valid-control" :class="classes">
          <el-input v-model.trim="initScriptName" type="text" placeholder="请输入内容" class="w-150"></el-input>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <HelloWorld msg="bb" />

    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import commonMixin from '@/mixins/common';
import Layout from '@/layout/Layout.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Product from '@/components/ProductBox/Product.vue';

@Component({
  name: 'TestView',
  components: {
    Layout,
    HelloWorld,
    Product,
  },
  mixins: [commonMixin],
})
export default class TestView extends Vue {
  status: Record<string, boolean>;
  dealError: (response: any) => {};
  // data
  bb: string = 'ddddddd';
  lang: string = 'pt-BR';
  initScriptName: string = '';

  get username() {
    return this.$store.state.user.username;
  }

  // methods
  testFunction() {
    console.log('test Api');
  }
}
</script>

<style scoped lang="scss">
.home {
  margin: 0 auto;
}
</style>
