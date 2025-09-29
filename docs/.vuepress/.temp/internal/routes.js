export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Me"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"Contact Me"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/asus/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
