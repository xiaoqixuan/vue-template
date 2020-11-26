const Test = () => import(/* webpackChunkName: "test" */ '@/views/TestView.vue');

export default [
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];
