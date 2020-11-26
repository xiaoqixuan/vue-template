import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import test from './test';

Vue.use(Router);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) { // 每次页面返回顶部
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
  // base: '',
  routes: [
    ...test,
    { path: '*', redirect: '/test' },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth && !store.state.isLogin) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
//     });
//     return;
//   }

//   if (store.state.isLogin && to.path === '/login') {
//     next({
//       path: from.path,
//     });
//     return;
//   }

//   next();
// });

export default router;
