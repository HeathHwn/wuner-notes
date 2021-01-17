(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{523:function(s,a,t){"use strict";t.r(a);var n=t(18),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"同步模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步模式"}},[s._v("#")]),s._v(" 同步模式")]),s._v(" "),t("h2",{attrs:{id:"单线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[s._v("#")]),s._v(" 单线程")]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("JavaScript 是一门单线程的语言，因此，JavaScript 在同一个时间只能做一件事，单线程意味着，如果在同个时间有多个任务的话，这些任务就需要进行排队，前一个任务执行完，才会执行下一个任务")]),s._v(" "),t("h3",{attrs:{id:"使用单线程原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用单线程原因"}},[s._v("#")]),s._v(" 使用单线程原因")]),s._v(" "),t("p",[s._v("JavaScript 的单线程，与它的用途是有很大关系，我们都知道，JavaScript 作为浏览器的脚本语言，主要用来实现与用户的交互，利用 JavaScript，我们可以实现对 DOM 的各种各样的操作，如果 JavaScript 是多线程的话，一个线程在一个 DOM 节点中增加内容，另一个线程要删除这个 DOM 节点，那么这个 DOM 节点究竟是要增加内容还是删除呢？这会带来很复杂的同步问题，因此，JavaScript 是单线程的")]),s._v(" "),t("h2",{attrs:{id:"同步任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步任务"}},[s._v("#")]),s._v(" 同步任务")]),s._v(" "),t("p",[s._v("同步任务是指在主线程上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务，当我们打开网站时，网站的渲染过程，比如元素的渲染，其实就是一个同步任务")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同步代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 任何函数的声明和任何变量的声明都不会压入调用栈（Call Stack）\n * 将console.log(1)压入调用栈执行，执行后移除\n * 将console.log(3)压入调用栈执行，执行后移除\n * 将a()压入调用栈执行，执行console.log(2)，将console.log(2)压入调用栈执行，执行后依次移除\n */")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 输出结果打印\n * 1\n * 3\n * 2\n */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"副作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#副作用"}},[s._v("#")]),s._v(" 副作用")]),s._v(" "),t("p",[s._v("因为 JavaScript 是单线程，因此同个时间只能处理同个任务，所有任务都需要排队，前一个任务执行完，才能继续执行下一个任务，但是，如果前一个任务的执行时间很长，比如文件的读取操作或 ajax 操作，后一个任务就不得不等着，拿 ajax 来说，当用户向后台获取大量的数据时，不得不等到所有数据都获取完毕才能进行下一步操作，用户只能在那里干等着，严重影响用户体验")])])}),[],!1,null,null,null);a.default=r.exports}}]);