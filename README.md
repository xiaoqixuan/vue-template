# shop-store

#### 介绍
PC商城简易版

#### 软件架构
> ### 基于Vue3.0+Typescript构建的空白项目，包括css样式的初始化，以及基本常用的axios,vue-router,模块化使用vuex，element-ui已经按需引入配置好，还有axios拦截器，路由组件懒加载，以及对于不同环境的基本Url封装，还附带了一些常用的方法，以及包括打包优化的cdn引入，代码压缩，图片压缩，关闭map等打包优化都已配置完成

### 文件目录结构如下
<pre>
├─ src    //主文件
│  ├─ api    //接口文件夹
|  |  |- create-api.js   // 存放axios的封装，请求头，具体接口根据需求修改
|  |  |- config.js       // 后端接口地址的配置,将测试、开发、生产环境分开
|  |  |- index.js        // api的调用
|  |  └─ user.js         // 单个页面的接口文件
│  ├─ assets             // 资源文件
│  ├─ components         // 公用组件
│  ├─ constants          // 公用常量
│  ├─ directive          // 自定义指令
│  ├─ dto                // 类型声明文件，对数据进行类型限制
|  ├─ filters            // 存放过滤器文件，自带了手机号加密，手机号格式化，时间日期处理
│  ├─ i18n               // 自定义国际化文件
|  ├─ layout             // 布局文件，通过子路由渲染方式实现，具体HTML布局根据需求修改
|  ├─ mixins             // 混入文件，配置了一个平滑滚动的方法
|  ├─ plugins            // 外部插件文件夹，配置了按需引入的element-ui
|  ├─ reg                // 存放正则以及校验的文件夹
|  |  |- reg.ts          // 存放正则表达式，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度校验正则
|  |  └─ validator.ts    // 存放element-ui自定义校验，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度自定义校验
|  ├─ router             // 路由文件
|  ├─ store              // vuex 全局变量文件
|  |  |- index.ts        // RootStore 主文件
|  |  |- getters.ts      // getters
|  |  |- interface.d.ts  // interface
|  |  |- mutations.ts    // mutations
|  |  └─ module          // store 模块文件夹
|  |  |  |- cart         // 购物车模块
|  |  |  |- confirmOrder // 确认订单模块
|  |  |  |- msgList      // 消息模块
|  |  |  |- order        // 我的订单模块
|  |  |  └─ user         // 用户相关模块
|  ├─ scss               // css预处理器文件夹
|  |  |- common.scss.scss// 公共样式
|  |  |- icon.scss       // 自定义icon样式
|  |  |- reset.scss      // 样式初始化文件,自带了非标准盒子，a标签清除下划线，清除内外边距，禁止图片拖拽等效果
|  |  └─ variable.scss   // 自定义变量文件
|  ├─ utils              // 公用方法文件夹
|  |  |- area.ts         // 存放省市区三级地区的数据
|  |  |- array.ts        // 存放数组相关的公用方法，自带了两个元素交换位置，元素前进后退一格，元素置顶或末尾，去重，删除指定元素操作
|  |  └─ object.ts       // 存放对象相关的公用方法，自带了对象清空所有值的方法
|  ├─ validate           // 存放vee-validate验证规则及文字提示
|  ├─ viewComponents     // 页面组件
|  ├─ views              // 页面文件夹
|  ├─ main.ts            // 主配置文件
|  ├─ eslinrc.json       // eslint 检查配置
|  ├─ babel.config.js    // babel配置文件，写入了element-ui按需加载的配置
|  ├─ package.json       // npm的包管理文件
|  ├─ tsconfig.json      // ts配置文件
|  ├─ vue.config.js      // vue配置文件
</pre>

## Project setup
```
npm install or yarn install
```

### Compiles and hot-reloads for development
```
npm run serve or yarn serve
```

### Compiles and minifies for production
```
npm run build or yarn build
```

### Lints and fixes files
```
npm run lint or yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## About develop branch

```
master        基准分支
develop       开发分支
release/date  发布分支
```
## Develop Process

### 1. New future
```
  1. 接收到需求，浏览并分析需求，拆分功能，新建issue/Epic。
  2. 创建仓库，初始化项目，并拉取develop分支
  3. 开始功能开发：
    1) 从develop分支拉取功能分支，命名： #issueID_Function_brief (#I1BIXH_newProject_addReadme)
    2) 更改issue状态为进行中

  4. 功能开发完成， 提交代码， 提交信息： #issueID Function brief， 推送至远端

  5. Issue 相关功能已实现后,新建Pull Request，并指定Reviewer
      Title :  #issueID Function brief
      Content: Future #issueID / Fix #issueID / Resolved #issueID
  4. PR review 通过后，功能开发分支代码已合到develop分支，将issue状态更改为已完成
```

### 2. Fixed bugs
```
  1. 开始Bug修改开发:
    1) 从develop分支拉取功能分支，命名： #issueID_Function_brief (#I1BIXH_newProject_addReadme)
    2) 更改issue状态为进行中
  2. 开发完成， 提交代码， 提交信息： #issueID Function brief， 推送至远端
  3. Issue 相关bug已修复后，新建Pull Request，并指定Reviewer
        issueID: #issueID
        Title :  #issueID Function brief
        Content: QA #issueID / QA-CN #issueID
  4. PR review 通过后，功能开发分支代码已合到develop分支，将Issue 状态修改/拖拽至 QA/QA-CN,将issue状态更改为已完成
```

### 2. Release
```
  1. 发布前拉取发布分支：eg:  release/20181225
  2. 发布过程中，修复的问题，直接提交到发布分支
  3. 发布完成后，分别提交Pull Request， 将release分支合并到master / develop
  4. 打上发布分支的tag，清理已发布的分支
```
