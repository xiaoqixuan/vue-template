// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';

// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 本地环境是否需要使用cdn
const devNeedCdn = false;

const path = require('path');

// cdn链接
const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
    axios: 'axios',
  },
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
    'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
    'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
  ],
};

const pathRewrite = {};
pathRewrite['/api'] = '/';

const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/scss/variable.scss'),
      ],
    });
};

module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        pathRewrite,
        target: 'http://42.192.95.108:8888',
        // target: 'http://mock.studyinghome.com/mock/5e6a535e8f77ec19c7ddca8c/vueStore',
        // ws: true,
        // changeOrigin: true,
      },
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    // ============注入cdn start============
    config.plugin('html').tap((args) => {
      // 生产环境或本地需要cdn时，才注入cdn
      if (isProduction || devNeedCdn) args[0].cdn = cdn;
      return args;
    });
    // ============注入cdn end============

    // ============压缩图片 start============
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end();
    // ============压缩图片 end============

    // ============自动化导入文件 start============
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
    // ============自动化导入文件 end============
  },
  configureWebpack: (config) => {
    config.entry.app = ['babel-polyfill', './src/main.ts'];
    // 用cdn方式引入，则构建时要忽略相关资源
    if (isProduction || devNeedCdn) config.externals = cdn.externals;

    // 生产环境相关配置
    if (isProduction) {
      // gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css'];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false, // 删除原文件
        }),
      );

      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log'],
            },
          },
          sourceMap: false,
          parallel: true,
        }),
      );
    }

    // 公共代码抽离
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60,
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true,
          },
          runtimeChunk: {
            name: 'manifest',
          },
        },
      },
    };
  },
};
