(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{655:function(e,r,t){"use strict";t.r(r);var a=t(18),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("h2",{attrs:{id:"gridsome-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gridsome-是什么"}},[e._v("#")]),e._v(" Gridsome 是什么")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Gridsome 是由 Vue.js 驱动的 Jamstack 框架，用于构建默认情况下快速生成的静态生成的网站和应用。")])]),e._v(" "),t("li",[t("p",[e._v("Gridsome 是 Vue 提供支持的静态站点生成器，用于为任何无头 CMS，本地文件或 API 构建可用于 CDN 的网站")])]),e._v(" "),t("li",[t("p",[e._v("使用 Vue.js，webpack 和 Node.js 等现代工具构建网站。通过 npm 进行热重载并访问任何软件包，并使用自动前缀在您喜欢的预处理器（如 Sass 或 Less）中编写 CSS。")])]),e._v(" "),t("li",[t("p",[e._v("基于 Vue.js 的 Jamstack 框架")])]),e._v(" "),t("li",[t("p",[e._v("Gridsome 使开发人员可以轻松构建默认情况下快速生成的静态生成的网站和应用程序")])]),e._v(" "),t("li",[t("p",[e._v("Gridsome 允许在内容里面引用任何 CMS 或数据源。从 WordPress，Contentful 或任何其他无头 CMS 或 API 中提取数据，并在组件和页面中使用 GraphQL 访问它。")])])]),e._v(" "),t("h2",{attrs:{id:"为什么选择-gridsome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-gridsome"}},[e._v("#")]),e._v(" 为什么选择 Gridsome")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("用于前端的 Vue.js——最简单，最容易理解的前端框架。")])]),e._v(" "),t("li",[t("p",[e._v("数据来源——使用任何 Headless CMS，API 或 Markdown 文件存储数据。")])]),e._v(" "),t("li",[t("p",[e._v("通过热重载进行本地开发——实时查看代码更改。")])]),e._v(" "),t("li",[t("p",[e._v("基于文件的页面路由——在"),t("code",[e._v("src/pages")]),e._v("中的任何 "),t("code",[e._v("Name.vue")]),e._v(" 文件都是静态路由。")])]),e._v(" "),t("li",[t("p",[e._v("动态路由——在"),t("code",[e._v("src/pages")]),e._v("中的任何 "),t("code",[e._v("[param].vue")]),e._v(" 文件都是动态路由。")])]),e._v(" "),t("li",[t("p",[e._v("静态文件生成——可部署到 CDN 或静态 Web 主机。")])]),e._v(" "),t("li",[t("p",[e._v("GraphQL 数据层——具有集中式数据层的简单数据管理。")])]),e._v(" "),t("li",[t("p",[e._v("自动代码拆分——将超高性能构建到每个页面中。")])]),e._v(" "),t("li",[t("p",[e._v("插件生态系统——生态圈完善。")])])]),e._v(" "),t("h2",{attrs:{id:"什么是-jamstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jamstack"}},[e._v("#")]),e._v(" 什么是 Jamstack")]),e._v(" "),t("p",[e._v("Gridsome 是一个 Jamstack 框架。 Jamstack 使您可以通过预渲染文件并直接从 CDN 直接提供文件来构建快速安全的站点和应用程序，而无需管理或运行 Web 服务器。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://gridsome.org/docs/jamstack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more about the Jamstack"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"它是如何工作的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的"}},[e._v("#")]),e._v(" 它是如何工作的")]),e._v(" "),t("p",[e._v("Gridsome 生成静态 HTML，一旦加载到浏览器中，该 HTML 就会渗入 Vue SPA。这意味着您可以使用 Gridsome 构建静态网站和动态应用程序。")]),e._v(" "),t("p",[e._v("Gridsome 为每个页面构建一个.html 文件和一个.json 文件。加载第一页后，它仅使用.json 文件来预取和加载下一页的数据。它还为需要它的每个页面构建一个.js 包（代码拆分）。")]),e._v(" "),t("p",[e._v("它使用 vue-router 进行 SPA 路由，并使用 vue-meta 来管理"),t("code",[e._v("<head>")]),e._v("。")]),e._v(" "),t("p",[e._v("Gridsome 默认添加最小 57kB 的 gzip JS 捆绑包大小（vue.js，vue-router，vue-meta 和一些用于图像延迟加载的文件）。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://gridsome.org/docs/how-it-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细了解其工作原理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"预备知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[e._v("#")]),e._v(" 预备知识")]),e._v(" "),t("p",[e._v("您应该具有有关 HTML，CSS，"),t("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),t("OutboundLink")],1),e._v(" 以及如何使用"),t("a",{attrs:{href:"https://www.linode.com/docs/guides/using-the-terminal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("终端"),t("OutboundLink")],1),e._v(" 的基本知识。了解 "),t("a",{attrs:{href:"https://www.graphql.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphQL"),t("OutboundLink")],1),e._v(" 的工作原理是有好处的，但不是必需的。 Gridsome 是学习它的好方法。")]),e._v(" "),t("p",[e._v("Gridsome 需要 "),t("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" （v8.3 +），并建议使用 "),t("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),t("OutboundLink")],1),e._v(" 。")]),e._v(" "),t("h2",{attrs:{id:"备选方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备选方案"}},[e._v("#")]),e._v(" 备选方案")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gatsby.js"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),t("ul",[t("li",[e._v("不适合管理系统")]),e._v(" "),t("li",[e._v("简单页面展示")]),e._v(" "),t("li",[e._v("想要有更好的 SEO")]),e._v(" "),t("li",[e._v("想要有更好的渲染性能")])])])}),[],!1,null,null,null);r.default=s.exports}}]);