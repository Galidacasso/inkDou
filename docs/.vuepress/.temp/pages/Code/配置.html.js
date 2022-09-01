export const data = JSON.parse("{\"key\":\"v-b7f69e82\",\"path\":\"/Code/%E9%85%8D%E7%BD%AE.html\",\"title\":\"inkDou配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"开发与打包\",\"slug\":\"开发与打包\",\"children\":[{\"level\":3,\"title\":\"开发模式\",\"slug\":\"开发模式\",\"children\":[]},{\"level\":3,\"title\":\"打包为静态页面\",\"slug\":\"打包为静态页面\",\"children\":[]}]},{\"level\":2,\"title\":\"插件\",\"slug\":\"插件\",\"children\":[{\"level\":3,\"title\":\"shiki\",\"slug\":\"shiki\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"Code/配置.md\"}")

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
