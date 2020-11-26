<template>
  <footer class="page-footer">
    <div class="page-content">
      <ul class="footer-column">
        <li>
          <div class="icon">
            <v-icon size="large" icon="house" />
            <span>{{$tc('footer.title1')}}</span>
          </div>
          <div class="info-wrap">
            <span>{{$tc('footer.company')}}</span>
            <p><el-link type="info" href="/txtInfo/about">{{$tc('txtInfo.aboutUs.title')}}</el-link></p>
            <p><el-link type="info" href="/txtInfo/provacy">{{$tc('txtInfo.privacy.title')}}</el-link></p>
            <p><el-link type="info" href="/txtInfo/terms">{{$tc('txtInfo.termsCond.title')}}</el-link></p>
            <p><el-link type="info" href="/txtInfo/contact">{{$tc('order.table.contactUs')}}</el-link></p>
          </div>
        </li>
        <li>
          <div class="icon">
            <v-icon size="large" icon="dollar" />
            <span>{{$tc('footer.title2')}}</span>
          </div>
          <div class="info-wrap">
            <span>{{$tc('footer.customerService')}}</span>
            <p><el-link type="info" href="/txtInfo/delivery">{{$tc('footer.shippingInformation')}}</el-link></p>
            <p><el-link type="info" href="/induce">{{$tc('footer.myFavorites')}}</el-link></p>
            <p><el-link type="info" href="/txtInfo/returnPolicy">{{$tc('footer.returnPolicy')}}</el-link></p>
            <p>{{$tc('footer.faqSupport')}}</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <v-icon size="large" icon="car" />
            <span>{{$tc('footer.title3')}}</span>
          </div>
          <div class="info-wrap">
            <span class="mb-10">{{$tc('footer.payMethod')}}</span>
            <p class="mb-20">
              <v-icon size="large" icon="ebank" />
            </p>
            <span class="mb-10">{{$tc('footer.stayConnected')}}</span>
            <p>
              <v-icon size="medium" icon="camera" />
              <v-icon size="medium" icon="douyin" />
              <v-icon size="medium" icon="facebook2" />
            </p>
          </div>
        </li>
        <li>
          <div class="icon">
            <v-icon size="large" icon="msg" />
            <span>{{$tc('footer.title4')}}</span>
          </div>
          <div class="info-wrap">
            <span>{{$tc('induce.download')}}</span>
            <div class="download-info">
              <p>
                <a :href="downloadInfo.iosUrl" target="_blank"><v-icon size="medium" icon="apple-m" /></a><br>
                <a :href="downloadInfo.androidUrl" target="_blank"><v-icon size="medium" icon="android-m" class="mt-5" /></a>
              </p>
              <div id="qrcode-footer" ref="qrcode"></div>
            </div>
          </div>
        </li>
      </ul>

      <div class="card-wrap mt-15">
        <router-link to="/">
          <img src="../assets/logo.png" alt="logo">
        </router-link>

        <v-icon size="large" icon="card1" />
        <v-icon size="large" icon="card2" />
        <v-icon size="large" icon="card3" />
      </div>

      <copy-right />
    </div>
  </footer>
</template>

<script lang="ts">
import QRCode from 'qrcodejs2';
import Vue from 'vue';
import Component from 'vue-class-component';
import VLink from '@/components/Link.vue';
import VIcon from '@/components/Icon.vue';
import CopyRight from '@/components/CopyRight.vue';
import commonMixin from '@/mixins/common';

@Component({
  name: 'Footer',
  components: {
    VLink,
    VIcon,
    CopyRight,
  },
  mixins: [commonMixin],
})
export default class Footer extends Vue {
  dealError: (response: any) => {};
  get downloadInfo(): any {
    return {
      iosUrl: '',
      androidUrl: '',
    };
  }

  mounted() {
    const url = this.downloadInfo.qrCode;
    if (!url) {
      this.getAppDownloadInfo();
      return;
    }
    this.getQrcode(this.downloadInfo.qrCode);
  }

  getAppDownloadInfo() {
    this.getQrcode('');
    // this.$store.dispatch('user/getAppDownloadInfo')
    //   .then(({ data }) => {
    //     this.getQrcode(data.data.qrCode);
    //   })
    //   .catch((response = {}) => {
    //     this.dealError(response);
    //   });
  }

  getQrcode(url: string) {
    this.$refs.qrcode = new QRCode('qrcode-footer', {
      width: 70, // 设置宽度，单位像素
      height: 70, // 设置高度，单位像素
      text: url, // 设置二维码内容或跳转地址
    });
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding: 80px 0 30px;
  .router-link-active {
    width: 210px;
    img {
      width: inherit;
    }
  }
  .footer-column {
    display: flex;
    justify-content: space-between;
    li {
      .icon {
        margin-bottom: 30px;
        .shop-icon {
          margin-right: 10px;
          vertical-align: middle;
        }
        span {
          font-size: $size-18;
          font-weight: bold;
          color: $color-3;
        }
      }
      .info-wrap {
        span {
          display: inline-block;
          margin-bottom: 15px;
          font-weight: bold;
          color: $color-3;
        }
        p {
          margin-bottom: 7px;
          font-size: $size-12;
          color: $color-9;
          .el-link {
            font-size: $size-12;
            color: $color-9;
          }
        }
      }
      .download-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 180px;
        margin-top: 10px;
      }
    }
  }
  .card-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
