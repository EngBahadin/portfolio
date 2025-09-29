import comp from "C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/projects.html.vue"
const data = JSON.parse("{\"path\":\"/projects.html\",\"title\":\"Projects\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Projects\"},\"headers\":[],\"git\":{\"updatedTime\":1759106515000,\"contributors\":[{\"name\":\"Bahadin\",\"username\":\"Bahadin\",\"email\":\"bahaking341@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Bahadin\"}],\"changelog\":[{\"hash\":\"69824f9edb5831d295aebea4645208f8079798d7\",\"time\":1759106515000,\"email\":\"bahaking341@gmail.com\",\"author\":\"Bahadin\",\"message\":\"initialize VuePress site with basic configuration and deploy workflow\"}]},\"filePathRelative\":\"projects.md\"}")
export { comp, data }

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
