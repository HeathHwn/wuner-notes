(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{568:function(s,n,a){"use strict";a.r(n);var t=a(18),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"es-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[s._v("#")]),s._v(" ES Module")]),s._v(" "),a("h2",{attrs:{id:"es-module-基本特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-module-基本特性"}},[s._v("#")]),s._v(" ES Module 基本特性")]),s._v(" "),a("ul",[a("li",[s._v("ESM 自动采用严格模式，忽略 'use strict'")]),s._v(" "),a("li",[s._v("每个 ES Module 都是运行在单独的私有作用域中")]),s._v(" "),a("li",[s._v("ESM 是通过 CORS 的方式请求外部 JS 模块的")]),s._v(" "),a("li",[s._v("ESM 的 script 标签会延迟执行脚本(浏览器页面渲染后执行)")])]),s._v(" "),a("h2",{attrs:{id:"export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export",target:"_blank",rel:"noopener noreferrer"}},[s._v("export"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("在创建 JavaScript 模块时，export 语句用于从模块中导出实时绑定的函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。被导出的绑定值依然可以在本地进行修改。在使用 import 进行导入时，这些绑定值只能被导入模块所读取，但在 export 导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。")]),s._v(" "),a("p",[s._v("无论您是否声明，导出的模块都处于严格模式。 export 语句不能用在嵌入式脚本中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 导出单个特性\nexport let name1, name2, …, nameN; // also var, const\nexport let name1 = …, name2 = …, …, nameN; // also var, const\nexport function FunctionName(){...}\nexport class ClassName {...}\n\n// 导出列表\nexport { name1, name2, …, nameN };\n\n// 重命名导出\nexport { variable1 as name1, variable2 as name2, …, nameN };\n\n// 解构导出并重命名\nexport const { name1, name2: bar } = o;\n\n// 默认导出\nexport default expression;\nexport default function (…) { … } // also class, function*\nexport default function name1(…) { … } // also class, function*\nexport { name1 as default, … };\n\n// 合并 modules\nexport * from …; // does not set the default export\nexport * as name1 from …;\nexport { name1, name2, …, nameN } from …;\nexport { import1 as name1, import2 as name2, …, nameN } from …;\nexport { default } from …;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[s._v("import"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v('静态的 import 语句用于导入由另一个模块导出的绑定。无论是否声明了 strict mode ，导入的模块都运行在严格模式下。在浏览器中，import 语句只能在声明了 type="module" 的 script 的标签中使用。')]),s._v(" "),a("p",[s._v('此外，还有一个类似函数的动态 import()，它不需要依赖 type="module" 的 script 标签。')]),s._v(" "),a("p",[s._v("在 script 标签中使用 nomodule 属性，可以确保向后兼容。")]),s._v(" "),a("p",[s._v("在您希望按照一定的条件或者按需加载模块的时候，动态 import() 是非常有用的。而静态型的 import 是初始化加载依赖项的最优选择，使用静态 import 更容易从代码静态分析工具和 tree shaking 中受益。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 导入整个模块的内容\nimport * as myModule from '/modules/my-module.js';\n\n// 导入单个接口\nimport {myExport} from '/modules/my-module.js';\n// 导入多个接口\n\nimport {foo, bar} from '/modules/my-module.js';\n\n// 导入带有别名的接口\nimport {reallyReallyLongModuleExportName as shortName} from '/modules/my-module.js';\n\n// 导入时重命名多个接口\nimport {\n  reallyReallyLongModuleMemberName as shortName,\n  anotherLongModuleName as short\n} from '/modules/my-module.js';\n\n// 仅为副作用而导入一个模块\n// 整个模块仅为副作用（中性词，无贬义含义）而导入，而不导入模块中的任何内容（接口）。 这将运行模块中的全局代码, 但实际上不导入任何值。\nimport '/modules/my-module.js';\n\n// 导入默认值\nimport myDefault from '/modules/my-module.js';\nimport myDefault, * as myModule from '/modules/my-module.js';\n// myModule used as a namespace\nimport myDefault, {foo, bar} from '/modules/my-module.js';\n// specific, named imports\n\n// 动态import\nimport('/modules/my-module.js')\n  .then((module) => {\n    // Do something with the module.\n  });\nlet module = await import('/modules/my-module.js');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"node-环境下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-环境下"}},[s._v("#")]),s._v(" node 环境下")]),s._v(" "),a("h3",{attrs:{id:"es-module-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-module-使用"}},[s._v("#")]),s._v(" es module 使用")]),s._v(" "),a("p",[s._v("index.mjs")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一，将文件的扩展名由 .js 改为 .mjs；")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二，启动时需要额外添加 `--experimental-modules` 参数；")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./module.mjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时我们也可以通过 esm 加载内置模块了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" fs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'es module working'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也可以直接提取模块内的成员，内置模块兼容了 ESM 的提取成员方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" writeFileSync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'es module working'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于第三方的 NPM 模块也可以通过 esm 加载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ES Module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不支持，因为第三方模块都是导出默认成员")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import { camelCase } from 'lodash'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(camelCase('ES Module'))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"与-commonjs-交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-commonjs-交互"}},[s._v("#")]),s._v(" 与 CommonJS 交互")]),s._v(" "),a("ul",[a("li",[s._v("ES Module 中可以导入 CommonJS 模块")]),s._v(" "),a("li",[s._v("CommonJS 中不能导入 ES Module 模块")]),s._v(" "),a("li",[s._v("CommonJS 始终只会导出一个默认成员")]),s._v(" "),a("li",[s._v("注意 import 不是解构导出对象")])]),s._v(" "),a("p",[s._v("commonjs.js")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// CommonJS 模块始终只会导出一个默认成员")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.exports = {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   foo: 'commonjs exports value'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exports.foo = 'commonjs exports value'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能在 CommonJS 模块中通过 require 载入 ES Module")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const mod = require('./es-module.mjs')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(mod)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("es-module.mjs")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ES Module 中可以导入 CommonJS 模块")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import mod from './commonjs.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(mod)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能直接提取成员，注意 import 不是解构导出对象")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import { foo } from './commonjs.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(foo)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// export const foo = 'es module export value'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"与-commonjs-的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-commonjs-的差异"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("与 CommonJS 的差异"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("esm.mjs")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ESM 中没有模块全局成员了")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 加载模块函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(require)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 模块对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(module)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 导出对象别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(exports)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 当前文件的绝对路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(__filename)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// // 当前文件所在目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(__dirname)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// require, module, exports 自然是通过 import 和 export 代替")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// __filename 和 __dirname 通过 import 对象的 meta 属性获取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const currentUrl = import.meta.url")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(currentUrl)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 url 模块的 fileURLToPath 方法转换为路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" fileURLToPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" dirname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fileURLToPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("Node v12 之后的版本，可以通过"),a("code",[s._v("package.json")]),s._v("中添加"),a("code",[s._v("type")]),s._v("字段为"),a("code",[s._v("module")]),s._v("，将默认模块系统修改为"),a("code",[s._v("ES Module")]),s._v("，此时就不需要修改文件扩展名为"),a("code",[s._v(".mjs")]),s._v("了")]),s._v(" "),a("p",[s._v("如果需要在"),a("code",[s._v("type=module")]),s._v("的情况下继续使用"),a("code",[s._v("CommonJS")]),s._v("，需要将文件扩展名修改为"),a("code",[s._v(".cjs")])]),s._v(" "),a("p",[s._v("对于早期的 Node.js 版本，可以使用 Babel 实现 ES Module 的兼容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 配置：第一种方式\n{\n  "plugins": [\n    "@babel/plugin-transform-modules-commonjs"\n  ]\n}\n// 配置：第二种方式（合集）\n{\n"presets":["@babel/preset-env"]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"具体-module-的语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体-module-的语法"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[s._v("具体 Module 的语法"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);