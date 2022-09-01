export const data = JSON.parse("{\"key\":\"v-12a72069\",\"path\":\"/Code/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":null,\"heroText\":\"Code目录\",\"tagline\":null},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"Code/README.md\"}")

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
