(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{429:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),a("OutboundLink")],1),t._v(" 是一个有见识的代码格式化工具。它通过解析代码并使用自己的规则重新打印它，并考虑最大行长来强制执行一致的样式，并在必要时包装代码。如今，它已成为解决所有代码格式问题的优选方案；支持 "),a("code",[t._v("JavaScript")]),t._v("、 "),a("code",[t._v("Flow")]),t._v("、 "),a("code",[t._v("TypeScript")]),t._v("、 "),a("code",[t._v("CSS")]),t._v("、 "),a("code",[t._v("SCSS")]),t._v("、 "),a("code",[t._v("Less")]),t._v("、 "),a("code",[t._v("JSX")]),t._v("、 "),a("code",[t._v("Vue")]),t._v("、 "),a("code",[t._v("GraphQL")]),t._v("、 "),a("code",[t._v("JSON")]),t._v("、 "),a("code",[t._v("Markdown")]),t._v(" 等语言，您可以结合 ESLint 和 Prettier，检测代码中潜在问题的同时，还能统一团队代码风格，从而促使写出高质量代码，来提升工作效率。")]),t._v(" "),t._m(0),t._v(" "),a("h2",{attrs:{id:"初始化-vue-项目推介"}},[t._v("初始化 Vue 项目推介")]),t._v(" "),a("p",[t._v("在格式化代码方面， Prettier 确实和 ESLint 有重叠，但两者侧重点不同：ESLint 主要工作就是检查代码质量并给出提示，它所能提供的格式化功能很有限；而 Prettier 在格式化代码方面具有更大优势。而 Prettier 被设计为易于与 ESLint 集成，所以你可以轻松在项目中使两者，而无需担心冲突。本文就如何使用 ESLint ＆ Prettier，来格式并美化 Vue 代码做下探讨；如果您使用其他类型框架，这份经验绝大部份依旧适用。")]),t._v(" "),a("p",[t._v("正如在 "),a("a",{attrs:{href:"https://jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/",target:"_blank",rel:"noopener noreferrer"}},[t._v("开箱即用的 Vue Webpack 脚手架模版"),a("OutboundLink")],1),t._v(" 所倡导的："),a("code",[t._v("vue-cli3")]),t._v("在这个版本，它集成了更多丰富的功能，以及更多默认配置，可通过附带的图形用户界面创建、开发和管理项目... 而且已发布 "),a("code",[t._v("RC")]),t._v(" 版本，核心功能已准备就绪，"),a("code",[t._v("API")]),t._v(" 已趋于稳定，所以，建议采用 "),a("code",[t._v("vue-cli3")]),t._v(" 来创建您的项目；您只需运行 "),a("code",[t._v("vue create my-project")]),t._v(" 命令，接下来按照提示进行选择即可；为了您的项目可持续性愉快进行，"),a("code",[t._v("ESlint")]),t._v(" 是您必要的选项。如果，您这样做了，您就可以在 "),a("em",[t._v("package.json")]),t._v(" 中 "),a("code",[t._v("eslintConfig")]),t._v(" 属性下，找到 "),a("code",[t._v("ESLint")]),t._v(" 配置；接下来，只需将 "),a("code",[t._v("Prettier")]),t._v(" 与 "),a("code",[t._v("ESLint")]),t._v(" 集成即可。")]),t._v(" "),a("h2",{attrs:{id:"集成-eslint-prettier"}},[t._v("集成 ESLint & Prettier")]),t._v(" "),a("p",[t._v("对于二者集成，可以利用插件来完成；"),a("a",{attrs:{href:"https://github.com/prettier/eslint-plugin-prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-prettier"),a("OutboundLink")],1),t._v(" 公开了一个 “recommended” 配置，将 "),a("code",[t._v("plugin:prettier/recommended")]),t._v(" 添加到 "),a("code",[t._v("extends")]),t._v(" 的子属性 "),a("code",[t._v("plugin:vue/essential")]),t._v(" 之后，以默认设置在 "),a("code",[t._v("ESLint")]),t._v(" 中启用对 "),a("code",[t._v("Prettier")]),t._v(" 的支持：")]),t._v(" "),t._m(1),a("p",[t._v("当然，还需安装依赖库： eslint-plugin-prettier 和 eslint-config-prettier (下文会讲到此依赖的作用)，更详细信息可以参见 Prettier 文档： "),a("a",{attrs:{href:"https://prettier.io/docs/en/eslint.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Integrating with ESLint\n"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(2),a("p",[t._v("这里需要补充说明下的是 "),a("code",[t._v("eslint-plugin-prettier")]),t._v(" 得工作原理，它会对比格式化前和用 Prettier 格式化后的代码，有不一致的地方就会报错提示；我们可以借助一些工具来修复，比如： "),a("code",[t._v("eslint --fix")]),t._v("，"),a("a",{attrs:{href:"https://github.com/prettier/prettier-eslint-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier-eslint-cli"),a("OutboundLink")],1),t._v("；可将其配置在 package scripts 中，以方便使用：")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("h2",{attrs:{id:"修改规则配置"}},[t._v("修改规则配置")]),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("事实上，当在项目中如此配置，可能会出现些“诡异”的报错，即便采用如上修复，也无法解决；而且这也不是您预期的提示；")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("此时，可以对规则进行甄别、梳理，择选出适宜的规则；对于此，您可以参考 "),a("a",{attrs:{href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring Prettier Options"),a("OutboundLink")],1),t._v(" & "),a("a",{attrs:{href:"https://github.com/prettier/eslint-plugin-prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-prettier#options"),a("OutboundLink")],1),t._v("；依据个人编码习惯，有采取如下配置 ( 可在 "),a("a",{attrs:{href:"https://github.com/nicejade/awesome-vue-cli3-example/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-vue-cli3-example"),a("OutboundLink")],1),t._v(" 查看源码)：")]),t._v(" "),t._m(8),a("h2",{attrs:{id:"添加编辑器配置"}},[t._v("添加编辑器配置")]),t._v(" "),a("h4",{attrs:{id:"atom-编辑器"}},[t._v("Atom 编辑器")]),t._v(" "),a("p",[t._v("可以安装 "),a("a",{attrs:{href:"https://atom.io/packages/prettier-atom",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier-atom"),a("OutboundLink")],1),t._v("；"),a("code",[t._v("Atom")]),t._v(" 编辑器还会提示你安装更多辅助插件；")]),t._v(" "),t._m(9),a("p",[t._v("它有两种模式可以使用：")]),t._v(" "),t._m(10),t._v(" "),a("h4",{attrs:{id:"vs-code-编辑器"}},[t._v("VS Code 编辑器")]),t._v(" "),a("p",[t._v("安装插件："),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESlint"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),a("OutboundLink")],1),t._v("，VS Code 插件配置统一在 preference → setting → user setting 设置 (快捷键： "),a("code",[t._v("Command + ,")]),t._v(")，即可实现保存时自动格式化：")]),t._v(" "),t._m(11),a("p",[t._v("除此外，你还在根据自己的喜好/习惯，为 "),a("code",[t._v("Vscode")]),t._v(" 编辑器设定 Prettier 美化风格，详细字段可以参见 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier-vscode"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(12),a("h3",{attrs:{id:"sublime-text-编辑器"}},[t._v("Sublime Text 编辑器")]),t._v(" "),a("p",[t._v("安装插件："),a("a",{attrs:{href:"https://github.com/jonlabelle/SublimeJsPrettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("JsPrettier"),a("OutboundLink")],1),t._v("，它有依赖到 "),a("code",[t._v("Prettier")]),t._v(" 等，所以需要全局安装："),a("code",[t._v("yarn global add prettier")]),t._v("；在 “Preferences → Setting” 中添加如下设置，即可实现保存时自动格式化；")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),a("p",[t._v("同样，你也根据自己的喜好/习惯，为 "),a("code",[t._v("SublimeText")]),t._v(" 编辑器设定 Prettier 美化风格；更多设置、使用细节，可参见 "),a("a",{attrs:{href:"https://github.com/jonlabelle/SublimeJsPrettier#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("SublimeJsPrettier#Usage"),a("OutboundLink")],1),t._v("；个人设定风格如下(操作文件位置：Preferences → Package Settings → JsPrettier → Settings - User)：")]),t._v(" "),t._m(16),a("h2",{attrs:{id:"pre-commit-hook-约束代码提交"}},[t._v("Pre-commit Hook 约束代码提交")]),t._v(" "),a("p",[t._v("以上探讨了如何运用 ESLint ＆ Prettier 写出优质代码，这都是针对个人的推荐性行为；为保证团队统一代码风格，则必须采取些手段以强制约束；假如您的团队使用 "),a("code",[t._v("Git")]),t._v(" 作为代码管理工具，在 "),a("code",[t._v("commit")]),t._v(" 行为及之前进行甄别约束，是很棒的选择；于此，可借助 "),a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1),t._v(" & "),a("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),a("OutboundLink")],1),t._v(" 来实现之。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),a("h2",{attrs:{id:"写在文章最后"}},[t._v("写在文章最后")]),t._v(" "),a("p",[t._v("“"),a("AwesomePoetry",{attrs:{text:"上邪，我欲与君相知，长命无绝衰。山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝"}}),t._v("”。这突如其来的一首古诗，乍看起来，与本文没有丝毫关系；但需要提醒的是："),a("strong",[t._v("您在编写高质量代码时付出的努力越多，您花在调试上的时间就越少")]),t._v("。如果您为项目开发工作流程，做了足够充分而适宜的建设，这不仅可以极大提升代码编写质量与速度，同时可节省调试、解决问题时间开销，而且还能避免无端而起的坏心情，从而更进一步促进工作效率，如此造就的这份优质循环，可以使得您拥有更多时间去学习、折腾、品味人生，这其中自然也可包括品读优美"),a("code",[t._v("古诗词")]),t._v("🐉☺️；所以？"),a("strong",[t._v("工欲善其事，必先利其器")]),t._v("，您学到了么？")],1),t._v(" "),a("Advertisement")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://image.nicelinks.site/prettier-girl.jpg",alt:"beautify-vue-by-eslint-and-prettier"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"eslintConfig"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"root"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"plugin:vue/essential"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add --dev eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eslint-fix"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eslint src/**/**/*.vue --fix"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"format-code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"prettier-eslint --write \\"src/**/*.js\\" \\"src/**/*.vue\\""')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://image.nicelinks.site/vue-eslint-prettier.png",alt:"beautify-vue-by-eslint-and-prettier"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("您需要知道的是，两者混合使用时候，需要修改规则，以防止重复或冲突；"),s("code",[this._v("eslint-config-prettier")]),this._v(" 即为解决此问题的存在，可以使用它关闭所有可能引起冲突的规则。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"prettier/prettier"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticStyle:{color:"red"}},[this._v("error")]),this._v(": Delete "),s("code",[this._v("⏎")]),this._v(" (prettier/prettier) at src/pages/xxx")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"no-console"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"prettier/prettier"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"error"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"singleQuote"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"trailingComma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"none"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"jsxBracketSameLine"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"parser"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"flow"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("apm "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" prettier-atom\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("保存时自动格式化（Packages → Prettier → Toggle Format on Save）")]),this._v(" "),s("li",[this._v("使用键盘快捷方式手动调用（如果没有选择，整个文件被格式化）："),s("code",[this._v("CTRL + ALT + F")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"prettier.eslintIntegration"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"editor.formatOnSave"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"prettier.singleQuote"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"prettier.semi"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"prettier.tabWidth"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"prettier.trailingComma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"auto_format_on_save"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然您也可以自定义快捷键，以按需格式化代码；在 “Preferences → Key Binding” 的 User Keymap 中，参考如下示例，注入命令即可 (Windows OS 则是："),s("code",[this._v("ctrl + alt + f")]),this._v(")：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"keys"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"command+alt+f"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"command"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"js_prettier"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"debug"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"prettier_cli_path"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"node_path"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"auto_format_on_save"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"auto_format_on_save_excludes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"auto_format_on_save_requires_prettier_config"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"allow_inline_formatting"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"custom_file_extensions"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"max_file_size_limit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" -"),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"additional_cli_args"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"prettier_options"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"printWidth"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"singleQuote"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"trailingComma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"none"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"jsxBracketSameLine"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"parser"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babylon"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"semi"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"requirePragma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"proseWrap"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"preserve"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"arrowParens"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"avoid"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# install husky & lint-staged")]),t._v("\nyarn add lint-staged husky --dev\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# package.json config")]),t._v("\n"),a("span",{attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"**/**.{js,json,pcss,md,vue}"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"prettier --write"')]),t._v(",\n    "),a("span",{attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n"),a("span",{attrs:{class:"token string"}},[t._v('"husky"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"pre-commit"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"yarn run precommit-msg && lint-staged"')]),t._v(",\n    "),a("span",{attrs:{class:"token string"}},[t._v('"pre-push"')]),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"yarn test"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("值得一提的是，在实际项目中， "),s("code",[this._v("husky")]),this._v(" 很可能由于各种原因，导致不能很好的工作；这多半是由于 "),s("code",[this._v(".git/hooks/pre-commit")]),this._v(" 与期待目标不匹配所致，您可以手动修改，也可以采取如下办法 (备注：如果您的 "),s("code",[this._v("husky")]),this._v(" 版本在 0.14 及以上)：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("rm")]),this._v(" -rf .git/hooks/*\nnode node_modules/husky/lib/installer/bin "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);