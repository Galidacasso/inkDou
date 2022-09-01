const { defaultTheme } = require('@vuepress/theme-default');
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
const { containerPlugin } = require('@vuepress/plugin-container');
const { nprogressPlugin } = require('@vuepress/plugin-nprogress');
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon');
// const { prismjsPlugin } = require('@vuepress/plugin-prismjs');
const { searchPlugin } = require('@vuepress/plugin-search');
const { shikiPlugin } = require('@vuepress/plugin-shiki');


module.exports = {
  lang: 'zh-CN',
  // 我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。
  title: '墨斗',
  description: '我有一张琴，一弦藏在腹，莫笑墨如鸦，正尽人间曲。',
  theme: defaultTheme({
    // 导航栏logo
    logo: '/images/logo/logo_2dd.png',
    // 导航栏
    navbar: [
      // 首页
      {
        text: '首页',
        link: '/',
      },

      {
        text: 'JavaScript',
        children: [
          {
            text: 'Js基础',
            children: [
              { text: '基础', link: '/Code/JS/README.md' },
              { text: '流程控制', link: '/Code/JS/ProcessControl.md' },
            ]
          },
          {
            text: 'Js引用数据类型',
            children: [
              { text: '函数', link: '/Code/JS/Function.md' },
              { text: '对象', link: '/Code/JS/Object.md' },
              { text: '数组', link: '/Code/JS/Array.md' },
            ],
          },
          {
            text: 'Js对象类型',
            children: [
              { text: '字符串 Srting', link: '/Code/JS/String.md' },
              { text: '数值 Number', link: '/Code/JS/Number.md' },
              { text: '日期时间 DateTime', link: '/Code/JS/DateTime.md' },
              { text: '布尔 Boolean', link: '/Code/JS/Boolean.md' },
              { text: '错误 Error', link: '/Code/JS/Error.md' },
            ],
          },

          { text: 'ES6新特性', link: '/Code/JS/ES6Features.md' },
        ],
      },

      {
        text: 'NodeJS',
        children: [
          { text: '简述', link: '/Code/NODEJS/README.md' },
          { text: '包管理工具', link: '/Code/NODEJS/NodePackageManager.md' },
          {
            text: '全局函数',
            children: [
              { text: '定时器', link: '/Code/NODEJS/Timer.md' },
            ],
          },
          {
            text: '模块系统',
            children: [
              { text: '模块', link: '/Code/NODEJS/ModSystem.md' },
              { text: '内置模块', link: '/Code/NODEJS/BuiltMod.md' },
              { text: 'HTTP模块', link: '/Code/NODEJS/HTTPMod.md' },
            ],
          },
          {
            text: 'Express框架',
            children: [
              { text: 'Express框架', link: '/Code/NODEJS/express.md' },
              { text: '中间件', link: '/Code/NODEJS/Middleware.md' },
              { text: 'Mysql模块', link: '/Code/NODEJS/MysqlMod.md' },
              { text: 'RestFul接口规范', link: '/Code/NODEJS/RestFul.md' },
            ],
          },
        ],
      },

      {
        text: 'HTML',
        children: [
          { text: '文本', link: '/Code/HTML/README.md' },
          { text: '图像、超链接、表格', link: '/Code/HTML/html_1.md' },
          { text: '分区元素、列表', link: '/Code/HTML/html_2.md' },
          { text: '表单', link: '/Code/HTML/html_3.md' },
        ],
      },
      {
        text: 'CSS',
        children: [
          { text: '简述', link: '/Code/CSS/README.md' },
          { text: '特性', link: '/Code/CSS/CSSFeatures.md' },
          { text: '背景', link: '/Code/CSS/bgc.md' },
          { text: '渐变', link: '/Code/CSS/Gradient.md' },
          { text: '文本格式化', link: '/Code/CSS/Text.md' },
          { text: '尺寸及边框', link: '/Code/CSS/Size&Border.md' },
          { text: '盒模型', link: '/Code/CSS/BoxMod.md' },
          { text: '表格', link: '/Code/CSS/Table.md' },
          {
            text: '选择器',
            children: [
              { text: '基础选择器', link: '/Code/CSS/Selector.md' },
              { text: '复杂选择器', link: '/Code/CSS/ComplexSelector.md' },
            ]
          },
          {
            text: '定位及布局',
            children: [
              { text: '普通流定位', link: '/Code/CSS/PositionBase.md' },
              { text: '浮动定位', link: '/Code/CSS/Float.md' },
              { text: '定位Position', link: '/Code/CSS/Position.md' },
              { text: '堆叠顺序', link: '/Code/CSS/Zindex.md' },
              { text: '弹性布局', link: '/Code/CSS/Flex.md' },
            ]
          },
          {
            text: '效果器',
            children: [
              { text: '转换', link: '/Code/CSS/Translate.md' },
              { text: '过渡', link: '/Code/CSS/Transition.md' },
              { text: '动画', link: '/Code/CSS/Animate.md' },
            ]
          },
          {
            text: '项目应用',
            children: [
              { text: '优化及重置', link: '/Code/CSS/O&R.md' },
            ]
          },
        ],
      },
      {
        text: 'AJAX',
        children: [
          { text: '简述', link: '/Code/AJAX/README.md' },
          { text: '请求传参', link: '/Code/AJAX/Request.md' },
          { text: '项目模板', link: '/Code/AJAX/ProjectTemplate.md' },
          {
            text: '其他',
            children: [
              { text: 'Js事件', link: '/Code/AJAX/JSEent.md' },
              { text: '项目排错', link: '/Code/AJAX/Techniques.md' },
            ],
          },
        ],
      },
      {
        text: '项目演练',
        children: [
          { text: '前言', link: '/Code/PROJECT/README.md' },
          {
            text: '学子商城',
            children: [
              { text: '数据库文档', link: '/Code/PROJECT/Codeboy.md' },
              { text: '接口文档', link: '/Code/PROJECT/InterfaceDocument.md' },
              { text: '代码', link: '/Code/PROJECT/xznodejs.md' },
            ],
          },
        ],
      },
      {
        text: '其他',
        children: [
          { text: 'MySQL', link: '/Code/DATA/' },
          { text: 'JSON', link: '/Code/Other/JSON.md' },
          { text: 'git', link: '/Code/Other/git.md' },
          { text: '简易DOM', link: '/Code/BOM&DOM/README.md' },
          { text: '面试题', link: '/Code/INTERVIEW/README.md' },
        ],
      },
      {
        text: 'BootStrap',
        children: [
          { text: 'TEST', link: '/Code/BS/' },
        ],
      },
    ],

    // 最后更新时间


  }),
  plugins: [
    // containerPlugin({
    //   type: 'tip',
    //   locales: {
    //     '/': {
    //       defaultInfo: '提示',
    //     },
    //     '/zh/': {
    //       defaultInfo: '提示',
    //     },
    //   },
    // }),

    // 外部链接小图标
    externalLinkIconPlugin({
      locales: {
        '/': {
          openInNewWindow: '在新窗口打开',
        },
        '/zh/': {
          openInNewWindow: '在新窗口打开',
        },
      },
    }),

    // Shiki 代码高亮配置不成功
    shikiPlugin({
      // 配置项
      theme: 'material-darker',
    }),

    // prismjs 代码高亮
    // prismjsPlugin({
    //   preloadLanguages: ['markdown', 'jsdoc', 'yaml', 'mermaid'],
    // }),

    // 页面加载进度条
    nprogressPlugin(),

    // 返回顶部
    backToTopPlugin(),

    // 搜索
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),

    // demo container
    'demo-container',

  ],
}
