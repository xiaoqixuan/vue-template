<template>
  <div class="sale-num" v-if="data.groupNeed">
    <p class="desc">{{$t(lang==='pt-BR'&&remainNum!==1?"product.proLefts":"product.proLeft",{remainNum})}}</p>
    <el-progress :percentage="percentage" :color="customColors" :stroke-width="8"></el-progress>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { LANGUAGE } from '@/constants';

@Component({
  props: {
    data: Object,
  },
  data() {
    const { groupMember = 0, groupNeed = 0 } = this.$props.data || {};
    return {
      lang: LANGUAGE,
      percentage: Math.floor((groupMember * 100) / groupNeed),
      remainNum: groupNeed - groupMember,
      customColor: '#F8C333',
      customColors: [
        { color: '#F8C333', percentage: 20 },
        { color: '#F8C333', percentage: 100 },
      ],
    };
  },
})
export default class SaleNum extends Vue {}
</script>

<style scoped lang="scss">
// 余量展示区 SaleNum
.sale-num {
  .desc {
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    color: gray;
    position: relative;
    top: 3px;
    text-align: left;
  }
}
</style>
<style lang="scss">
.sale-num {
  .el-progress {
    text-align: left;
    .el-progress-bar {
    }
    .el-progress__text {
      font-size: 14px !important;
    }
  }
}
</style>
