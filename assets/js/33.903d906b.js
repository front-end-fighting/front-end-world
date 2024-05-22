(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{309:function(v,_,e){"use strict";e.r(_);var o=e(14),t=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("要验证我们编写的代码是否符合预期，我们需要在浏览器页面中进行调试。")]),v._v(" "),_("h1",{attrs:{id:"浏览器-chrome-调试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-chrome-调试"}},[v._v("#")]),v._v(" 浏览器(Chrome)调试")]),v._v(" "),_("p",[v._v("浏览器中调试功能又多又方便，但我们更主要是在 Chrome 下进行调试，先看看 Chrome 提供的开发者工具：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/me-book-1-1.jpg",alt:""}})]),v._v(" "),_("p",[v._v("Elements、Console、Sources、Network 这种前面也介绍过了，剩下的功能在性能调试的时候会用的多一些：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Performance")]),v._v("：查看页面在浏览器运行时的性能表现，如 CPU\\GPU 执行时间与内存占用等")]),v._v(" "),_("li",[_("code",[v._v("Memory")]),v._v("：可进行内存查看和分析")]),v._v(" "),_("li",[_("code",[v._v("Application")]),v._v("：会列出所有的资源，包括 Database 和 LocalStore 等，可以对存储的内容编辑和删除")]),v._v(" "),_("li",[_("code",[v._v("Security")]),v._v("：查看网站的安全性，有效证书等")]),v._v(" "),_("li",[_("code",[v._v("Audits/Lighthouse")]),v._v("：会针对目前网页提出若干条优化的建议，包括网络加载性能、界面性能等")])]),v._v(" "),_("h1",{attrs:{id:"打断点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#打断点"}},[v._v("#")]),v._v(" 打断点")]),v._v(" "),_("p",[v._v("我们来看看在浏览器中打断点的一些方式。")]),v._v(" "),_("p",[_("strong",[v._v("(1) 代码断点。")])]),v._v(" "),_("p",[v._v("常用的浏览器代码断点，在 Sources 面板 Javascript 文件行号处设置断点，如图我们下了个断点："),_("br"),v._v(" "),_("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1512993498%281%29.jpg",alt:"image"}})]),v._v(" "),_("p",[v._v("这里我们在请求发起的位置打了个断点，每次我们在搜索输入框输入的时候，都会发送请求，触发 debug 模式。")]),v._v(" "),_("p",[v._v("这里除了常规断点外, 还有个条件断点(右键 -> conditional breakpoint), 在设置的条件为"),_("code",[v._v("true")]),v._v("时才会断电, 在循环中需要断点时比较有用。断点后可以查看堆栈、变量。")]),v._v(" "),_("p",[_("strong",[v._v("(2) 事件断点。")])]),v._v(" "),_("p",[v._v("元素上事件断点：某一事件/某类事件，从"),_("code",[v._v("Elements > Event Listeners")]),v._v("中进行。")]),v._v(" "),_("p",[_("strong",[v._v("(3) DOM 断点。")])]),v._v(" "),_("p",[v._v("一般是 DOM 结构改变时触发。有时候我们需要监听某个 DOM 被修改情况，而不关心是哪行代码做的修改（也可能有多处都会对其做修改），可以直接在 DOM 上设置断点。")]),v._v(" "),_("p",[v._v("在元素审查的"),_("code",[v._v("Elements")]),v._v("标签页中在某个元素上右键菜单里可以设置三种不同情况的断点：")]),v._v(" "),_("ul",[_("li",[v._v("子节点修改")]),v._v(" "),_("li",[v._v("自身属性修改")]),v._v(" "),_("li",[v._v("自身节点被删除")])]),v._v(" "),_("p",[_("strong",[v._v("(4) XHR 断点。")])]),v._v(" "),_("p",[v._v("右侧调试区有一个"),_("code",[v._v("XHR Breakpoints")]),v._v("，点击"),_("code",[v._v("+")]),v._v(" 并输入 URL 包含的字符串，即可监听该 URL 的 Ajax 请求，输入内容就相当于 URL 的过滤器。"),_("br"),v._v("\n一旦 XHR 调用触发时就会在"),_("code",[v._v("request.send()")]),v._v("的地方中断。")]),v._v(" "),_("p",[_("strong",[v._v("(5) 全局事件断点。")])]),v._v(" "),_("p",[v._v("对事件发生时断点，不会限定在元素上，只要是事件发生，并且有"),_("code",[v._v("handler")]),v._v("就断点。"),_("br"),v._v("\n还可以对"),_("code",[v._v("resize")]),v._v("、"),_("code",[v._v("Ajax")]),v._v("、"),_("code",[v._v("setTimeout/setInterval")]),v._v("断点。")]),v._v(" "),_("p",[v._v("关于断点调试，除了几种工具和方式的了解以外，更多的需要在实际工作中进行实践才能掌握。用得好的话，谷歌源码也照样能趴出来里面的实现。")]),v._v(" "),_("h1",{attrs:{id:"调试样式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调试样式"}},[v._v("#")]),v._v(" 调试样式")]),v._v(" "),_("p",[v._v("样式的调试需要有个前提，就是对一些样式属性有很好的认识和理解，尤其涉及盒子模型、"),_("code",[v._v("display")]),v._v("和定位等。样式的规则除了一些基本的逻辑能遵循（可参考前面 1.2.1 章节内容），更多的则是丰富的经验，多写、多练。")]),v._v(" "),_("p",[v._v("在此基础上，一般样式的调试逻辑大概会是这样：")]),v._v(" "),_("ul",[_("li",[v._v("样式是否生效")]),v._v(" "),_("li",[v._v("文件、相关样式代码是否加载")]),v._v(" "),_("li",[v._v("是否被其他样式覆盖（优先级问题）")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1512998012%281%29.png",alt:"image"}})]),v._v(" "),_("p",[v._v("如上图，一般我们会在选中对应的元素后，从上往下来找到生效（或不生效）的样式，同时也可以定位到对应的源文件。")]),v._v(" "),_("p",[v._v("这里面如果是本地环境调试的话，在 source map 的支持下，我们甚至可以直接在浏览器中修改源文件，保存生效。")]),v._v(" "),_("h1",{attrs:{id:"调试-javascript-脚本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调试-javascript-脚本"}},[v._v("#")]),v._v(" 调试 Javascript 脚本")]),v._v(" "),_("p",[v._v("我们可以通过添加"),_("code",[v._v("alert()")]),v._v("、"),_("code",[v._v("console")]),v._v("、"),_("code",[v._v("debugger")]),v._v("相关代码的方式，进行调试日志输出和断点。")]),v._v(" "),_("p",[_("strong",[v._v("(1) alert。")])]),v._v(" "),_("p",[_("code",[v._v("alert()")]),v._v("会在窗口中显示一个警告对话框，是特别古老的调试方式，以前有些浏览器不支持控制台调试的时候可以这么操作。")]),v._v(" "),_("p",[v._v("由于"),_("code",[v._v("alert()")]),v._v("会阻塞进程，并且输出内容只支持局限的参数类型，因此现在几乎没什么人会使用了。")]),v._v(" "),_("p",[_("strong",[v._v("(2) console。")])]),v._v(" "),_("p",[v._v("可以使用"),_("code",[v._v("console")]),v._v("来打日志。在生产环境的代码通常是编译后压缩后的代码，浏览器断点调试很不方便，或者是用户的反馈无法进行现场定位，此时通过日志获取需要的信息显得尤为重要。")]),v._v(" "),_("p",[_("code",[v._v("console")]),v._v("常用的几个方法有：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("console.log()")]),v._v("：打印字符串，以及对象、变量什么的都可以")]),v._v(" "),_("li",[_("code",[v._v("console.info()")]),v._v("：打印以感叹号字符开始的信息，使用方法和"),_("code",[v._v("log")]),v._v("相同")]),v._v(" "),_("li",[_("code",[v._v("console.error()")]),v._v("：打印一条错误信息")])]),v._v(" "),_("p",[v._v("养成在代码中通过"),_("code",[v._v("console")]),v._v("打日志的习惯，在遇到问题的时候能更加高效地定位和解决。")]),v._v(" "),_("p",[_("strong",[v._v("(3) debugger。")])]),v._v(" "),_("p",[v._v("当"),_("code",[v._v("debugger")]),v._v("被调用时, 执行暂停在"),_("code",[v._v("debugger")]),v._v("语句的位置，就像在脚本源代码中的断点一样。")]),v._v(" "),_("p",[v._v("断点的好处在于，我们可以直接看到代码的执行调用关系，也可以在断点位置查看上下文的变量情况，可以直观地看到问题在哪。")]),v._v(" "),_("p",[v._v("一般 Javascript 的调试逻辑，未按预期执行会有这样的原因：代码未执行到理想的位置。")]),v._v(" "),_("p",[v._v("这时候我们要思考这样的问题：")]),v._v(" "),_("p",[v._v("(1) 为事件触发执行 -> 检测事件是否被触发。")]),v._v(" "),_("p",[v._v("(2) 在函数中执行 -> 检测函数是否被调用。")]),v._v(" "),_("p",[v._v("(3) 在判断语句中执行 -> 检测判断是否正确。")]),v._v(" "),_("p",[v._v("我们可以在这些地方进行输出，或者打下断点：")]),v._v(" "),_("p",[v._v("(1) 事件触发的地方。")]),v._v(" "),_("p",[v._v("(2) 函数调用过程。")]),v._v(" "),_("p",[v._v("(3) 判断语句（"),_("code",[v._v("if")]),v._v("等）。")]),v._v(" "),_("p",[v._v("以上是类似的推导逻辑，我们在写代码时，会有一个预期的执行顺序和期望，如果说不生效，则我们可以：")]),v._v(" "),_("ul",[_("li",[v._v("从前往后执行步骤，看在哪一步分了岔路")]),v._v(" "),_("li",[v._v("从后往前打下断点，看在哪一步走丢了")])]),v._v(" "),_("p",[v._v("其实最重要的是思路需要清晰，如果说你连自己要做的功能，逻辑还没理清楚的话，编写的代码质量不会高，同时调试性能也会随着下降。")])])}),[],!1,null,null,null);_.default=t.exports}}]);