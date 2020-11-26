<template>
<div class="search-bar">
  <div class="search-wrap" v-clickoutside="closeHistory">
    <el-input
      v-model="keywords"
      :placeholder="$tc('product.searchPlaceholder')"
      @focus="showHistory = true;"
      @keyup.enter.native="handleSearch(keywords)"></el-input>
    <div class="search-more" v-show="showHistory">
      <ul class="search-history" v-show="keywordList.length">
        <p>
          <span>{{$tc('header.search.recent')}}</span>
          <span class="clear-history" @click="clearHistory">{{$tc('actions.clear')}}</span>
        </p>
        <li v-for="(word, index) in keywordList"
          :key="`history-${index}`"
          @click="handleSearch(word)">
          <span>{{word}}</span>
          <!-- <el-button type="text" @click.stop="deleteHistory(word)">{{$tc('actions.delete')}}</el-button> -->
          <i class="el-icon-close" @click.stop="deleteHistory(word)"></i>
        </li>
      </ul>
      <ul class="search-hot">
        <p>{{$tc('header.search.popular')}}</p>
        <li v-for="hot in hotwordList"
          :key="`hot-${hot.id}`"
          @click="handleSearch(hot.searchKey)">{{hot.searchKey}}</li>
      </ul>
    </div>
  </div>
  <i class="el-icon-search" @click="handleSearch(keywords)"></i>
</div>
</template>

<script lang="ts">
import Cookie from 'js-cookie';
import Vue from 'vue';
import Component from 'vue-class-component';
import $httpHome from '@/api/home';
import commonMixin from '@/mixins/common';

@Component({
  name: 'SearchBar',
  mixins: [commonMixin],
})
export default class SearchBar extends Vue {
  dealError: (response: any) => {};
  keywords: string = '';
  showHistory: boolean = false;
  keywordList: string[] = [];
  hotwordList: Array<any> = [];

  getKeywordList() {
    const listJson = Cookie.get('keywordList') || '';
    this.keywordList = listJson && JSON.parse(listJson) || [];
  }

  setKeywordList(list?: string[]) {
    const len = (list || []).length;
    this.keywordList = len > 5 ? list.reverse().slice(0, 5).reverse() : (list || []);

    if (list) {
      Cookie.set('keywordList', this.keywordList);
      return;
    }
    Cookie.remove('keywordList');
  }

  mounted() {
    const { searchKey } = this.$route.params;
    this.keywords = searchKey || '';
    this.getKeywordList();
    this.getSearchHotHistory();
  }

  closeHistory() {
    this.showHistory = false;
  }

  getSearchHotHistory() {
    $httpHome.getSearchHotHistory()
      .then(({ data }) => {
        this.hotwordList = data.data || [];
      })
      .catch((response = {}) => {
        this.dealError(response);
      });
  }

  handleSearch(word?: string) {
    this.showHistory = false;
    word && (this.keywords = word);
    const value = this.keywords.replace(/(^\s*)|(\s*$)/g, '');
    if (value) {
      if (this.keywordList.indexOf(value) < 0) {
        this.setKeywordList(this.keywordList.concat(value));
      }
      this.$router.push(`/search/${encodeURIComponent(value)}`);
    }
  }

  clearHistory() {
    this.setKeywordList();
  }

  deleteHistory(word) {
    this.keywordList = this.keywordList.filter(it => it !== word);
  }
}
</script>

<style lang="scss">
  .search-bar {
    position: relative;
    display: flex;
    flex: 0 0 45%;
    align-items: center;
    padding: 4px;
    background-color: $color-main;
    i {
      padding: 0 15px;
      cursor: pointer;
      color: $color-white;
      font-size: 18px;
      font-weight: bolder;
    }
    .search-wrap {
      width: 100%;
      .el-input {
        .el-input__inner {
          border-radius: 0 !important;
        }
      }
      .search-more {
        position: absolute;
        width: 100%;
        left: 0;
        margin-top: 10px;
        background-color: #fff;
        border: 1px solid #EBEEF5;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        ul {
          &.search-history {
            .clear-history {
              cursor: pointer;
            }
            p {
              display: flex;
              justify-content: space-between;
            }
            // p, li {
            //   display: flex;
            //   justify-content: space-between;
            // }
            li {
              align-items: center;
              .el-button {
                display: none;
              }
              &:hover .el-button {
                display: inline-block;
              }
              i {
                color: #aaa;
                padding: 0;
                margin-left: 5px;
                font-size: 16px;
              }
              &:hover i {
                color: $color-main;
              }
            }
          }
          p {
            color: $color-main;
            padding: 10px;
          }
          li {
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            display: inline-block;
            margin: 0 8px 10px;
            color: #999;
            border: 1px solid $color-hover;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
              color: $color-main;
              border-color: $color-main;
              background-color: $color-hover;
            }
          }
        }
      }
    }
  }
</style>
