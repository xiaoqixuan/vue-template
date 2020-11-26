<template>
    <!-- <el-image :src="src" :lazy="lazy">
      <div slot="placeholder" class="image-slot">
        <img
          class="defalut-image"
          :src="defalut?require(`../assets/imgDefaluts/${defalut}`):require('../assets/imgDefaluts/defalut.png')"
        />
      </div>
      <div slot="error" class="image-slot">
        <img
          class="defalut-image"
          :src="defalut?require(`../assets/imgDefaluts/${defalut}`):require('../assets/imgDefaluts/defalut.png')"
        />
      </div>
    </el-image> -->
    <img v-lazy="lazyObj">
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    src: {
      type: String,
      default: '',
    },
    defalut: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
})
export default class ImageOnerror extends Vue {
  get lazyObj() {
    const defalutImg = this.$props.defalut ? require(`../assets/imgDefaluts/${this.$props.defalut}`) : require('../assets/imgDefaluts/defalut.png'); // eslint-disable-line
    return {
      src: decodeURI(encodeURI(this.$props.src)), // 因为有些图片对中文不支持，所以做一个先编码再解码的过程
      error: defalutImg, // 设置错误的图片
      loading: defalutImg, // 设置加载的图片
    };
  }
}
</script>

<style scoped lang="scss">
.defalut-image {
  width: 100%;
  height: 100%;
}
</style>
