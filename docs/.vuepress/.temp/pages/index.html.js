export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo/logo_3d.png\",\"heroText\":\"莫笑墨如鸦，正尽人间曲\",\"tagline\":\"inkDou‘s 知识仓库\",\"actions\":[{\"text\":\"Code学习\",\"link\":\"/Code/\",\"type\":\"primary\"},{\"text\":\"个人简介\",\"link\":\"/PersonalProfile/\",\"type\":\"secondary\"},{\"text\":\"站点配置\",\"link\":\"/Code/配置.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"配置\",\"details\":\"inkDou的相关配置，边学边写\"},{\"title\":\"Vue驱动\",\"details\":\"享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\"}],\"footer\":\"MIT Licensed | 鲁ICP备202215530号 | 鲁公网安备37010502001868号| Copyright © 2022-present inkDou墨斗\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
