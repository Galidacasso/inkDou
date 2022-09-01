export const data = {
  "key": "v-6234fc2f",
  "path": "/%E9%85%8D%E7%BD%AE.html",
  "title": "inkDou配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "开发模式运行",
      "slug": "开发模式运行",
      "children": []
    },
    {
      "level": 2,
      "title": "打包静态页面",
      "slug": "打包静态页面",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "配置.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
