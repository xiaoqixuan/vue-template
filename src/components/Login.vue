<template>
  <el-dialog
    :title="$tc('login.signin')"
    :visible.sync="showModal"
    width="400px" center
    @close="closeLogin">
    <div class="content">
      <ValidationObserver ref="form">
        <form @submit.prevent="onSubmit">
          <ValidationProvider :name="$tc('login.placeholder.email')" rules="required|email" v-slot="{ classes, errors }">
            <div class="valid-control" :class="classes">
              <el-input v-model.trim="user.email" type="text" :placeholder="$tc('login.placeholder.email')"></el-input>
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider :name="$tc('login.placeholder.psd')" rules="areaLength:6,12" v-slot="{ classes, errors }">
            <div class="valid-control  mt-25" :class="classes">
              <el-input type="password"
                :placeholder="$tc('login.placeholder.psd')"
                v-model.trim="user.psd"></el-input>
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <div class="verify-wrap mt-25">
            <ValidationProvider :name="$tc('login.placeholder.verify')" rules="fixedLength:4" v-slot="{ classes, errors }">
              <div class="valid-control" :class="classes">
                <el-input type="text" class="mr-10"
                  :placeholder="$tc('login.placeholder.verify')"
                   :disabled="!startTimer" v-model.trim="user.verify"></el-input>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="option-btn">
              <el-button type="primary" v-if="!startTimer" @click="sendCode"> {{ $tc('login.getVerifyCode') }}</el-button>
              <el-button v-else> {{ time }} s</el-button>
            </div>
          </div>

          <div class="password-operate mt-25">
            <el-checkbox v-model="isRemember">{{ $tc('login.savePsd') }}</el-checkbox>
            <v-link>{{ $tc('login.forgetPsd') }}</v-link>
          </div>

          <el-button type="primary" class="mt-25" @click="onSubmit">{{ $tc('login.submit') }}</el-button>
          <el-divider>{{ $tc('login.signWith') }}</el-divider>
          <div class="sign-with-wrap text-center">
            <i class="sign-icon mr-10"><img src="../assets/facebook.jpg" alt=""></i>
            <i class="sign-icon"><img src="../assets/google.jpg" alt=""></i>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </el-dialog>
</template>

<script lang="ts">
// import Cookie from 'js-cookie';
import Vue from 'vue';
import Component from 'vue-class-component';
import { encrypt } from '@/utils/crypto';
import VLink from '@/components/Link.vue';

@Component({
  name: 'Login',
  components: {
    VLink,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    time(val: number) {
      val === 0 && this.clearTimer();
    },
  },
})
export default class Login extends Vue {
  show: boolean;
  user: {
    email: string;
    psd: string;
    verify: string;
  } = {
    email: '',
    psd: '',
    verify: '',
  };
  time: number = 60;
  startTimer: NodeJS.Timer = null;
  isRemember: boolean = true;

  get showModal(): boolean {
    return this.show;
  }

  set showModal(status: boolean) {
    this.$emit('update:show', status);
  }

  sendCode() {
    this.startTimer = setInterval(
      () => {
        --this.time;
      },
      1000,
    );
  }

  onSubmit() {
    const formEL: any = this.$refs.form;
    formEL.validate().then((success) => {
      if (!success) {
        return;
      }

      const { email, psd, verify } = this.user;
      this.$store.dispatch('login', {
        email,
        password: encrypt(psd),
        verifyCode: verify,
      }).then(() => {
        // if (this.isRemember) {
        //   Cookie.set('user', `email=${email};psd=${psd}`);
        // } else {
        //   Cookie.remove('user');
        // }
        this.closeLogin();
      });
    });
  }

  clearTimer() {
    if (!this.startTimer) {
      return;
    }

    this.time = 60;
    clearInterval(this.startTimer);
    this.startTimer = null;
  }

  closeLogin() {
    this.showModal = false;
    // clear interval
    this.clearTimer();
    // Resetting Values
    this.user = {
      email: '',
      psd: '',
      verify: '',
    };

    // Wait until the models are updated in the UI
    const formEL: any = this.$refs.form;
    this.$nextTick(() => {
      formEL.reset();
    });
  }
}
</script>

<style scoped lang="scss">
  .verify-wrap, .password-operate {
    display: flex;
    justify-content: space-between;
  }
  .verify-wrap {
    .option-btn {
      width: 110px;
    }
  }
  .valid-control {
    position: relative;
    span {
      position: absolute;
      margin-top: 5px;
    }
  }
  .el-button {
    width: 100%;
  }

  .sign-with-wrap {
    .sign-icon {
      display: inline-block;
      width: 30px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
