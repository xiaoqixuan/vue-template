<template>
  <Dropdown
    :current="lang"
    :options="options"
    @changeVal="changeLanguage">
    <div slot="link">
      <span class="el-dropdown-link">
        <v-link icon="info">{{ $tc('locales.' + lang) }}</v-link>
      </span>
    </div>
  </Dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import Cookie from 'js-cookie';
import Component from 'vue-class-component';
import Dropdown from '@/components/Dropdown.vue';
import VLink from '@/components/Link.vue';

@Component({
  name: 'Language',
  components: {
    Dropdown,
    VLink,
  },
})
export default class Language extends Vue {
  get lang(): string {
    return this.$store.state.lang;
  }

  get options(): Array<any> {
    return [
      { value: 'en-US', label: this.$tc('locales.en-US') },
      // { value: 'zh-CN', label: this.$tc('locales.zh-CN') },
      { value: 'pt-BR', label: this.$tc('locales.pt-BR') },
    ];
  }

  changeLanguage(lang: string) {
    if (this.lang === lang) {
      return;
    }

    Cookie.set('lang', lang);
    location.reload();
  }
}
</script>
