# This is a  template for [Next.js](https://nextjs.org/learn).
## pages 路由目录说明
```
pages
├── _app.js  //一般情况，不需要改动
├── _document.js  //一般情况，不需要改动
├── cmsid  //统一文稿路径
│   └── [id].js  //文稿id，文稿类型组件内部解决（分类型渲染相应组件）
├── index.js  //根路径访问显示页面
└── m  //二级首页（栏目首页）
    └── [channelCode].js  //栏目编码或者栏目id，（编码语义化更好）
```
## 其它目录说明

### api目录（按功能模块划分）
```
api
├── README.md
└── cms.js
```

### styles 目录
```
styles
├── READM.md
├── common  //公共样式
│   ├── border.scss
│   ├── index.scss
│   ├── mixin.scss
│   └── reset.scss
└── pages  //按pages下的文件夹区分（采用css-module的模式，也可以在组件内部采用css-in-js）
    └── cmsid.module.scss
```

### hooks 目录
封装一些通用的hook
