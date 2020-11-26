import { apiCreator } from './index';
import { Header } from 'CommonTypes';
import { LANGUAGE } from '@/constants';

const languageMap = {
  'en-US': 'ENGLISH',
  'pt-BR': 'PORTUGUESE',
};

export default {
  // 首页
  getHomeBanner(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/banner', { params });
  },
  getHomeFlash(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/flash', { params });
  },
  getHomeGroup(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/group', { params });
  },
  getHomeBrand(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/brand', { params });
  },
  getHomeMayLike(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/mayLike', { params });
  },
  getHomeBrands(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/brands', { params });
  },
  getHomeBrandBanner(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/brandBanner', { params });
  },
  getHomeBrandProducts(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/brandProducts', { params });
  },
  getGroupGroupProducts(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/groupProducts', { params });
  },
  getTags(par: any, reHeader?: Header) {
    const params = {
      ...par,
      langType: languageMap[LANGUAGE] || languageMap['pt-BR'],
    };
    return apiCreator(reHeader).get('/web/home/tags', { params });
  },
  postSearch(params: any, reHeader?: Header) {
    return apiCreator(reHeader).post('/web/home/search', params);
  },
  postSearchBrands(params: any, reHeader?: Header) {
    return apiCreator(reHeader).post('/web/home/searchBrands', params);
  },
  getActivities(params?: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/activities', { params });
  },
  getActivitiesProduct(params?: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/activity/products', { params });
  },
  // 商品相关
  getProduct(params: any, reHeader?: Header) {
    if (params.memberId) {
      return apiCreator(reHeader).get(`/web/product/${params.productId}`, { params });
    }
    return apiCreator(reHeader).get(`/web/product/${params.productId}`);
  },
  getProductComment(params?: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/productComment', { params });
  },
  getProductCommentById(id: any, reHeader?: Header) {
    return apiCreator(reHeader).get(`/web/productComment/detail/${id}`);
  },
  postAttentionPro(params: any, reHeader?: Header) {
    return apiCreator(reHeader).post('/web/attention/product', params);
  },
  deleteAttentionPro(params: any, reHeader?: Header) {
    return apiCreator(reHeader).delete('/web/attention/product', { params });
  },
  // 分类
  getCategory(reHeader?: Header) {
    return apiCreator(reHeader).get('/web/category');
  },
  getCategoryProducts(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/category/products', { params });
  },
  getCategoryBrands(params: any, reHeader?: Header) {
    return apiCreator(reHeader).get('/web/category/brands', { params });
  },
  // 热搜
  getSearchHotHistory(reHeader?: Header) {
    return apiCreator(reHeader).get('/web/home/getSearchHotHistory');
  },
};
