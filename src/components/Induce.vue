<template>
  <el-dialog
    :visible.sync="showModal"
    width="400px" center
    @close="closeModal"
    @opened="getQrcode">
    <div class="text-center indecu-content">
      <h2>{{$t('induce.desc', { feature: title })}}</h2>

      <div class="mt-15">
        <div id="qrcode" ref="qrcode"></div>
        <div class="mt-15">
          <a :href="downloadInfo.iosUrl" target="_blank"><v-icon size="medium" class="mr-10" icon="apple-m" /></a>
          <a :href="downloadInfo.androidUrl" target="_blank"><v-icon size="medium" icon="android-m" /></a>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import QRCode from 'qrcodejs2';
import Vue from 'vue';
import Component from 'vue-class-component';
import VIcon from '@/components/Icon.vue';

@Component({
  name: 'Induce',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  components: { VIcon },
})
export default class Induce extends Vue {
  show: boolean;
  qrcode: any = null;

  get showModal(): boolean {
    return this.show;
  }

  set showModal(status: boolean) {
    this.$emit('update:show', status);
  }

  get downloadInfo(): any {
    return this.$store.state.user.downloadInfo;
  }

  getQrcode(url: string = this.downloadInfo.qrCode) {
    if (this.qrcode) return;
    this.qrcode = new QRCode('qrcode', {
      width: 180, // 设置宽度，单位像素
      height: 180, // 设置高度，单位像素
      text: url, // 设置二维码内容或跳转地址
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
</script>

<style lang="scss" scoped>
.indecu-content {
  font-size: $size-14;
}
#qrcode {
  display: inline-block;
}
</style>
