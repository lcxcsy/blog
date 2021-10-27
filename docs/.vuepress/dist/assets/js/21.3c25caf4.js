(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{397:function(a,t,s){"use strict";s.r(t);var r=s(51),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"常用-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用-loader"}},[a._v("#")]),a._v(" 常用 Loader")]),a._v(" "),s("blockquote",[s("p",[a._v("记录项目开发中一些常用的 loader。")])]),a._v(" "),s("p",[a._v("具体可参考："),s("a",{attrs:{href:"http://webpack.wuhaolin.cn/%E9%99%84%E5%BD%95/%E5%B8%B8%E7%94%A8Loaders.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://webpack.wuhaolin.cn/%E9%99%84%E5%BD%95/%E5%B8%B8%E7%94%A8Loaders.html"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"主要分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要分类"}},[a._v("#")]),a._v(" 主要分类")]),a._v(" "),s("h3",{attrs:{id:"_1-用于加载文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-用于加载文件"}},[a._v("#")]),a._v(" 1. 用于加载文件")]),a._v(" "),s("ul",[s("li",[a._v("file-loader")]),a._v(" "),s("li",[a._v("image-loader")]),a._v(" "),s("li",[a._v("json-loader")])]),a._v(" "),s("h3",{attrs:{id:"_2-用于编译模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-用于编译模版"}},[a._v("#")]),a._v(" 2. 用于编译模版")]),a._v(" "),s("ul",[s("li",[a._v("markdown-loader（把 Markdown 文件转换成 HTM）")])]),a._v(" "),s("h3",{attrs:{id:"_3-转换脚本语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-转换脚本语言"}},[a._v("#")]),a._v(" 3. 转换脚本语言")]),a._v(" "),s("ul",[s("li",[a._v("babel-loader（将 ES6 转换成 ES5）")]),a._v(" "),s("li",[a._v("ts-loader")])]),a._v(" "),s("h3",{attrs:{id:"_4-转换样式文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-转换样式文件"}},[a._v("#")]),a._v(" 4. 转换样式文件")]),a._v(" "),s("ul",[s("li",[a._v("style-loader （把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS）")]),a._v(" "),s("li",[a._v("sass-loader")]),a._v(" "),s("li",[a._v("less-loader")]),a._v(" "),s("li",[a._v("stylus-loader")])]),a._v(" "),s("h3",{attrs:{id:"_5-检查代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-检查代码"}},[a._v("#")]),a._v(" 5. 检查代码")]),a._v(" "),s("ul",[s("li",[a._v("eslint-loader （通过 ESLint 检查 JavaScript 代码）")])]),a._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),s("h3",{attrs:{id:"_1-file-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-file-loader"}},[a._v("#")]),a._v(" 1. "),s("a",{attrs:{href:"https://www.npmjs.com/package/file-loader",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[a._v("file-loader")]),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("可以把 JavaScript 和 CSS 中导入图片的语句替换成正确的地址，并同时把文件输出到对应的位置。")]),a._v(" "),s("p",[a._v("使用效果：CSS 源码")]),a._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("#app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("./imgs/a.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("经过 file-loader 转换后的 CSS 代码")]),a._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("#app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("5556e1251a78c5afda9ee7dd06ad109b.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);