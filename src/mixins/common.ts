import Cookie from 'js-cookie';
import { getTimeZone } from '@/utils/index';
import { PAYMENT_CURRENCY } from '@/constants';

export default {
  data() {
    return {
      status: {
        isFetching: false,
        isSending: false,
        isStopRefresh: false,
      },
      timeZoneLabel: `(UTC${getTimeZone()})`,
      currency: PAYMENT_CURRENCY,
    };
  },
  methods: {
    dealError({ response }) {
      const { msg = '' } = response && response.data || {};
      if (response.data.code === 401) {
        this.$store.commit('CHANGE_LOGIN_STATE', false);
        Cookie.remove('user');
        // this.$router.push('/login');
        window.location.reload();
        return;
      }

      this.$alert(
        msg || this.$tc('error.errorMessage'),
        this.$tc('error.errorTitle'),
        {
          confirmButtonText: this.$tc('actions.ok'),
          center: true,
          dangerouslyUseHTMLString: true,
        },
      );
    },
  },
};
