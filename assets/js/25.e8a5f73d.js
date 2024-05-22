(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{319:function(v,_,e){"use strict";e.r(_);var o=e(14),d=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("页面样式其实大多数情况下都无法速成，需要通过不断地练习、反复地调试才能熟练掌握。但也有一些小伙伴会疑惑为什么写了很久的前端页面，还是写不好页面布局？")]),v._v(" "),_("p",[v._v("其实页面布局有一些很基础的规则，掌握这些规则，很多时候你的疑惑也能迎刃而解。")]),v._v(" "),_("h1",{attrs:{id:"_1-盒模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-盒模型"}},[v._v("#")]),v._v(" 1. 盒模型")]),v._v(" "),_("p",[v._v("盒模型指的是 CSS 基础盒模型。当浏览器对一个文档进行布局的时候，会将每个元素都表示为一个个矩形的盒子，CSS 控制这些盒子的尺寸、属性（颜色、背景、边框等）和位置，渲染引擎则将它们渲染出来。这个模型描述了元素所占空间的内容，每个盒子由四个部分组成：外边框边界（"),_("code",[v._v("margin")]),v._v("）、边框边界（"),_("code",[v._v("border")]),v._v("）、内边距边界（"),_("code",[v._v("padding")]),v._v("）、内容边界（"),_("code",[v._v("content")]),v._v("），如图：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1510119051%281%29.png",alt:"盒模型示意图"}})]),v._v(" "),_("p",[v._v("我们浏览器对文档进行布局的时候，会将每个元素都表示为图中矩形的盒子。我们使用 CSS 样式来控制这些盒子的尺寸、属性（颜色、背景、边框等）和位置，渲染引擎会依据 CSS 规则树和 DOM 节点生成的渲染树进行渲染。")]),v._v(" "),_("p",[v._v("关于盒模型，这里介绍在开发过程中会遇到的常见问题和应用。")]),v._v(" "),_("p",[v._v("(1) 盒模型会发生"),_("code",[v._v("margin")]),v._v("外边距叠加。当两个或更多个垂直边距相遇时，它们有时被合并（折叠）成单个边距，需要注意的是：")]),v._v(" "),_("ul",[_("li",[v._v("外边距（"),_("code",[v._v("margin")]),v._v("）的高度大小是各个边距中的最大值")]),v._v(" "),_("li",[v._v("行内框、浮动框或绝对定位框之间的外边距不会叠加，相邻的兄弟姐妹、没有内容将父母与后代分开或是空块等三种情况，才会出现外边距叠加")])]),v._v(" "),_("p",[v._v("(2) 我们在工作中会常见到一种 CSS3 中新增的盒模型计算方式："),_("code",[v._v("box-sizing")]),v._v("属性。盒模型默认的值是"),_("code",[v._v("content-box")]),v._v(", 新增的值是"),_("code",[v._v("padding-box")]),v._v("和"),_("code",[v._v("border-box")]),v._v("。具体的这里不多介绍，大家可以主要关注最常用的"),_("code",[v._v("border-box")]),v._v("，在"),_("code",[v._v("border-box")]),v._v("模型下：")]),v._v(" "),_("ul",[_("li",[v._v("元素宽高("),_("code",[v._v("width")]),v._v("/"),_("code",[v._v("height")]),v._v(")等于："),_("code",[v._v("content")]),v._v(" + "),_("code",[v._v("padding")]),v._v(" + "),_("code",[v._v("border")])]),v._v(" "),_("li",[v._v("布局所占宽高等于元素宽高")])]),v._v(" "),_("h1",{attrs:{id:"_2-内联元素与块状元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-内联元素与块状元素"}},[v._v("#")]),v._v(" 2. 内联元素与块状元素")]),v._v(" "),_("p",[v._v("内联元素和块状元素在页面中的布局效果有很大的不同，通常我们会使用"),_("code",[v._v("display")]),v._v("来进行调整。")]),v._v(" "),_("p",[v._v("内联元素又称行内元素等，表示位于行内的元素，特点包括：")]),v._v(" "),_("ul",[_("li",[v._v("内联元素只能容纳文本或者其他内联元素，只有这些文本或元素可以与其位于同一行")]),v._v(" "),_("li",[v._v("内联元素的宽度高度不起作用，因此给内联元素设置宽高是不生效的")]),v._v(" "),_("li",[v._v("常见的内联元素："),_("code",[v._v("<a>")]),v._v("/"),_("code",[v._v("<span>")]),v._v("/"),_("code",[v._v("<i>")]),v._v("/"),_("code",[v._v("<strong>")]),v._v("等")])]),v._v(" "),_("p",[v._v("块状元素一般是其他元素的容器，可同时容纳内联元素或者其他块状元素，特点包括：")]),v._v(" "),_("ul",[_("li",[v._v("块状元素排斥其他元素与其位于同一行")]),v._v(" "),_("li",[v._v("块状元素的宽度高度起作用")]),v._v(" "),_("li",[v._v("常见的块状元素有："),_("code",[v._v("<div>")]),v._v("/"),_("code",[v._v("<p>")]),v._v("/"),_("code",[v._v("<h1>")]),v._v("…"),_("code",[v._v("<h6>")]),v._v("/"),_("code",[v._v("<ul>")]),v._v("/"),_("code",[v._v("<ol>")]),v._v("等")])]),v._v(" "),_("p",[v._v("我们可以通过"),_("code",[v._v("display")]),v._v("属性去设置元素类型，常用的"),_("code",[v._v("display")]),v._v("属性包括：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("block")]),v._v("：块状元素，可以设置宽度"),_("code",[v._v("width")]),v._v("和高度"),_("code",[v._v("height")])]),v._v(" "),_("li",[_("code",[v._v("inline")]),v._v("：内联元素，宽度高度不起作用")]),v._v(" "),_("li",[_("code",[v._v("inline-block")]),v._v("：可以理解为块状元素和内联元素的结合\n"),_("ul",[_("li",[v._v("位于块状元素或者其他内联元素内")]),v._v(" "),_("li",[v._v("可容纳其他块状元素或内联元素")]),v._v(" "),_("li",[v._v("宽度高度起作用")])])])]),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("inline-block")]),v._v("可以很方便解决一些问题：使元素居中、给"),_("code",[v._v("inline")]),v._v("元素（"),_("code",[v._v("<a>")]),v._v("/"),_("code",[v._v("<span>")]),v._v("）设置宽高、将多个块状元素放在一行等。")]),v._v(" "),_("h1",{attrs:{id:"_3-元素定位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-元素定位"}},[v._v("#")]),v._v(" 3. 元素定位")]),v._v(" "),_("p",[v._v("每一个前端开发都需要认识文档流，关于文档流：正常的文档流也叫普通流，在 HTML 里面为从上到下，从左到右的排版布局。我们常用的布局与"),_("code",[v._v("position")]),v._v("样式属性紧紧相关，其中"),_("code",[v._v("position")]),v._v("样式属性包括：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("static")]),v._v("(默认值)：没有定位，元素出现在正常的流中（忽略"),_("code",[v._v("top")]),v._v("/"),_("code",[v._v("bottom")]),v._v("/"),_("code",[v._v("left")]),v._v("/"),_("code",[v._v("right")]),v._v("或者"),_("code",[v._v("z-index")]),v._v("声明）")]),v._v(" "),_("li",[_("code",[v._v("inherit")]),v._v("：规定应该从父元素继承"),_("code",[v._v("position")]),v._v("属性的值")]),v._v(" "),_("li",[_("code",[v._v("relative")]),v._v("：生成相对定位的元素，相对于其正常位置进行定位，"),_("code",[v._v("relative")]),v._v("特点包括：\n"),_("ul",[_("li",[_("code",[v._v("relative")]),v._v("元素保持原有文档流，但相对本身的原始位置发生位移，且占空间")]),v._v(" "),_("li",[_("code",[v._v("relative")]),v._v("元素也遵循从上到下，从左到右的排版布局")]),v._v(" "),_("li",[v._v("相对于其正常位置进行定位，在这里设置了"),_("code",[v._v("relative")]),v._v("的元素相对其原本位置（"),_("code",[v._v("position: static")]),v._v("）进行位移")]),v._v(" "),_("li",[_("code",[v._v("relative")]),v._v("元素占有原本位置，因此下一个元素会排到该元素后方")]),v._v(" "),_("li",[_("code",[v._v("relative")]),v._v("元素占位不会随着定位的改变而改变，也就是说"),_("code",[v._v("relative")]),v._v("在文档流中占有的位置与其原本位置（"),_("code",[v._v("position: static")]),v._v("）相同")])])]),v._v(" "),_("li",[_("code",[v._v("absolute")]),v._v("：生成绝对定位的元素，相对于"),_("code",[v._v("static")]),v._v("定位以外的第一个父元素进行定位。元素的位置通过"),_("code",[v._v("left")]),v._v("/"),_("code",[v._v("top")]),v._v("/"),_("code",[v._v("right")]),v._v("/"),_("code",[v._v("bottom")]),v._v("属性进行规定。"),_("code",[v._v("absolute")]),v._v("特点包括：\n"),_("ul",[_("li",[_("code",[v._v("absolute")]),v._v("元素脱离文档流")]),v._v(" "),_("li",[_("code",[v._v("absolute")]),v._v("元素不占位，因此下一个符合普通流的元素会略过"),_("code",[v._v("absolute")]),v._v("元素排到其上一个元素的后方")]),v._v(" "),_("li",[_("code",[v._v("absolute")]),v._v("元素的定位是相对于"),_("code",[v._v("static")]),v._v("定位以外的第一个父元素进行定位")])])]),v._v(" "),_("li",[_("code",[v._v("fixed")]),v._v("：生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过"),_("code",[v._v("left")]),v._v("/"),_("code",[v._v("top")]),v._v("/"),_("code",[v._v("right")]),v._v("/"),_("code",[v._v("bottom")]),v._v("属性进行规定。"),_("code",[v._v("fixed")]),v._v("的特点：\n"),_("ul",[_("li",[_("code",[v._v("fixed")]),v._v("元素脱离文档流")]),v._v(" "),_("li",[_("code",[v._v("fixed")]),v._v("元素不占位")]),v._v(" "),_("li",[_("code",[v._v("fixed")]),v._v("相对于浏览器窗口来定位，不管是否有"),_("code",[v._v("static")]),v._v("定位以外的父元素")]),v._v(" "),_("li",[_("code",[v._v("absolute")]),v._v("元素会随着页面的滚动而滚动，而"),_("code",[v._v("fixed")]),v._v("不会")])])])]),v._v(" "),_("p",[v._v("关于"),_("code",[v._v("position")]),v._v("样式属性在各种场景下的布局效果相对复杂，如果需要熟练掌握还是需要花不少的心思去练习和思考的。")]),v._v(" "),_("h1",{attrs:{id:"_4-元素堆叠"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-元素堆叠"}},[v._v("#")]),v._v(" 4. 元素堆叠")]),v._v(" "),_("p",[v._v("元素的堆叠方式和顺序，除了与"),_("code",[v._v("position")]),v._v("定位有关，也与"),_("code",[v._v("z-index")]),v._v("有关，有关"),_("code",[v._v("z-index")]),v._v("的说明：")]),v._v(" "),_("ul",[_("li",[v._v("当同级元素不设置"),_("code",[v._v("z-index")]),v._v("或者"),_("code",[v._v("z-index")]),v._v("相等时，后面的元素会叠在前面的元素上方")]),v._v(" "),_("li",[v._v("当同级元素"),_("code",[v._v("z-index")]),v._v("不同时，"),_("code",[v._v("z-index")]),v._v("大的元素会叠在"),_("code",[v._v("z-index")]),v._v("小的元素上方")])]),v._v(" "),_("p",[v._v("除了同级元素以外，"),_("code",[v._v("z-index")]),v._v("值的设置效果还会受到父元素的"),_("code",[v._v("z-index")]),v._v("值的影响，它只决定同一父元素中的同级子元素的堆叠顺序，在此之外的场景会比较复杂，大家可以自己去实践下，篇幅关系我们不再这里拓展了。")]),v._v(" "),_("p",[_("code",[v._v("z-index")]),v._v("样式属性比较常用于多个元素层级控制的时候，比如弹窗一般需要在最上层，就可以通过设置较大的"),_("code",[v._v("z-index")]),v._v("值来控制。")]),v._v(" "),_("h1",{attrs:{id:"常见页面布局方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见页面布局方式"}},[v._v("#")]),v._v(" 常见页面布局方式")]),v._v(" "),_("p",[v._v("目前来说，前端开发比较常见的布局方式主要有：")]),v._v(" "),_("ul",[_("li",[v._v("传统布局方式")]),v._v(" "),_("li",[v._v("Flex 布局方式")]),v._v(" "),_("li",[v._v("Grid 布局方式")])]),v._v(" "),_("p",[_("strong",[v._v("(1) 传统布局。")])]),v._v(" "),_("p",[v._v("传统布局方式基本上借助于上面提到的一些布局规则，结合"),_("code",[v._v("display")]),v._v("/"),_("code",[v._v("position")]),v._v("/"),_("code",[v._v("float")]),v._v("属性以及一些边距、x/y 轴距离等方式来进行布局。")]),v._v(" "),_("p",[v._v("由于文档流、盒模型、等前面都有介绍，这里我们主要补充一下 float 浮动布局方式。给元素的"),_("code",[v._v("float")]),v._v("属性赋值后，元素会脱离文档流，进行左右浮动，紧贴着父元素的边框或者是上一个同级同浮动元素的边框。")]),v._v(" "),_("p",[v._v("首先了解下"),_("code",[v._v("float")]),v._v("属性：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("float")]),v._v("属性定义元素在哪个方向浮动")]),v._v(" "),_("li",[_("code",[v._v("float")]),v._v("属性可应用于图像，使文本围绕在图像周围")]),v._v(" "),_("li",[_("code",[v._v("float")]),v._v("与"),_("code",[v._v("block")]),v._v(" "),_("ul",[_("li",[v._v("设置"),_("code",[v._v("float")]),v._v("浮动的元素自动获取"),_("code",[v._v("display: block")]),v._v("样式")]),v._v(" "),_("li",[v._v("当一个元素浮动之后，不会影响到块级框的布局")])])]),v._v(" "),_("li",[_("code",[v._v("float")]),v._v("与"),_("code",[v._v("inline-block")]),v._v(" "),_("ul",[_("li",[v._v("当一个元素浮动之后，会影响内联框（通常是文本）的排列和布局")]),v._v(" "),_("li",[_("code",[v._v("float")]),v._v("浮动若未指明宽度会尽可能地窄，而"),_("code",[v._v("inline-block")]),v._v("元素会带来空白问题")])])])]),v._v(" "),_("p",[v._v("使用"),_("code",[v._v("float")]),v._v("属性，必然会遇到一个问题：本属于普通流中的元素浮动之后，包含框内部由于不存在其他普通流元素了，也就表现出高度为 0，又称为高度塌陷。")]),v._v(" "),_("p",[v._v("因此，我们也需要掌握 float 撑开父元素的方法：")]),v._v(" "),_("ul",[_("li",[v._v("父元素使用"),_("code",[v._v("overflow: hidden")]),v._v("（此时高度为"),_("code",[v._v("auto")]),v._v("）\n"),_("ul",[_("li",[v._v("父元素"),_("code",[v._v("overflow:hidden")]),v._v("后，首先会计算"),_("code",[v._v("height: auto")]),v._v("的真实高度，由于其触发了 BFC，需要包含子元素，所以高度不是 0，而是子元素高度（关于 BFC 大家可以自行去了解一下）")])])]),v._v(" "),_("li",[v._v("使父元素也成为浮动"),_("code",[v._v("float")]),v._v("元素\n"),_("ul",[_("li",[v._v("将父容器也改成浮动定位，这样它就可以带着子元素一起浮动了")])])]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("clear")]),v._v("清除浮动\n"),_("ul",[_("li",[v._v("在浮动元素后方加入"),_("code",[v._v("clear: both")]),v._v("的元素，就可以清除浮动撑开父元素")]),v._v(" "),_("li",[v._v("其中在样式中添加"),_("code",[v._v("clear:right")]),v._v("，理解为不允许右边有浮动元素，由于上一个元素是浮动元素，因此该元素会自动下移一行来满足规则")])])])]),v._v(" "),_("p",[v._v("通过传统方式布局的优势在于兼容性较好，在一些版本较低的浏览器上也能给到用户较友好的体验。但传统布局需要掌握的知识较多也相对复杂，因此 Flex 布局和 Grid 布局也主要用来解决传统布局的种种不便。")]),v._v(" "),_("p",[_("strong",[v._v("(2) Flex 布局。")])]),v._v(" "),_("p",[v._v("Flex 布局基于 Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。对于 Flex 布局，我们主要需要掌握几个概念：")]),v._v(" "),_("ul",[_("li",[v._v("flexbox 的两根轴线：其中，主轴由"),_("code",[v._v("flex-direction")]),v._v("定义，交叉轴则垂直于主轴。")]),v._v(" "),_("li",[v._v("起始和终止：传统布局的文档流是从左到右、从上到下的布局方式。而在 flexbox 中，我们使用起始和终止来描述布局方向和顺序。")]),v._v(" "),_("li",[v._v("Flex 容器：采用了 flexbox 的区域（"),_("code",[v._v("display")]),v._v("属性值为"),_("code",[v._v("flex")]),v._v("或者"),_("code",[v._v("inline-flex")]),v._v("）叫做 flex 容器，容器中的直系子元素就会变为 flex 元素。通过"),_("code",[v._v("flex-direction")]),v._v("/"),_("code",[v._v("flex-wrap")]),v._v("/"),_("code",[v._v("flex")]),v._v("等各种属性设置，我们可以方便地设置容器内元素的布局效果。")])]),v._v(" "),_("p",[v._v("使用 Flex 布局可以：")]),v._v(" "),_("ul",[_("li",[v._v("通过"),_("code",[v._v("flex-direction")]),v._v("调整 Flex 元素的排列方向（主轴的方向）")]),v._v(" "),_("li",[v._v("用"),_("code",[v._v("flex-wrap")]),v._v("实现多行 Flex 容器如何换行")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("justify-content")]),v._v("调整 Flex 元素在主轴上的对齐方式")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("align-items")]),v._v("调整 Flex 元素在交叉轴上如何对齐")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("align-content")]),v._v("调整多根轴线的对齐方式")])]),v._v(" "),_("p",[v._v("Flex 布局的出现，解决了很多前端开发居中、排版的一些痛点，尤其是垂直居中，因此现在几乎成为了主流的布局方式。以前我们都是基于盒模型来布局，一般使用"),_("code",[v._v("display")]),v._v("属性+"),_("code",[v._v("position")]),v._v("属性+"),_("code",[v._v("float")]),v._v("属性。Flex 布局给"),_("code",[v._v("flexbox")]),v._v("的子元素之间提供了强大的空间分布和对齐能力。")]),v._v(" "),_("p",[v._v("除此之外，还可以对 Flex 元素设置排列顺序、放大比例、缩小比例等等。更多的使用方法，大家可以去网上进行相关的查询和学习。")]),v._v(" "),_("p",[_("strong",[v._v("(3) Grid 布局。")])]),v._v(" "),_("p",[v._v("Grid 布局又称为网格布局，提供了一种二维布局的方式，它将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。")]),v._v(" "),_("p",[v._v("我们知道 Flex 布局是基于轴线布局，与之相对，Grid 布局则是将容器划分成行和列，可以像表格一样按行或列来对齐元素。网格容器的子元素可以自己定位，像 CSS 定位的元素一样有重叠和层次关系。")]),v._v(" "),_("p",[v._v("同样的，对于 Grid 布局，我们也需要掌握几个概念：")]),v._v(" "),_("ul",[_("li",[v._v("网格轨道与行列：一个网格轨道就是网格中任意两条线之间的空间，可以通过"),_("code",[v._v("grid-template-columns")]),v._v("和"),_("code",[v._v("grid-template-rows")]),v._v("属性来定义网格中的行和列。")]),v._v(" "),_("li",[v._v("网格线：当我们定义网格时，我们定义的是网格轨道，Grid 会为我们创建编号的网格线来让我们来定位每一个网格元素。网格线的编号顺序取决于定义的布局方向，水平网格线划分出行，垂直网格线划分出列。")]),v._v(" "),_("li",[v._v("网格容器：采用了 Grid 布局的区域（"),_("code",[v._v("display")]),v._v("属性值为"),_("code",[v._v("grid")]),v._v("或者"),_("code",[v._v("inline-grid")]),v._v("）叫做网格容器，容器中的直系子元素就会变为网格元素。")])]),v._v(" "),_("p",[v._v("使用 Grid 布局可以：")]),v._v(" "),_("ul",[_("li",[v._v("实现网页的响应式布局")]),v._v(" "),_("li",[v._v("实现灵活的 12 列布局（类似于 Bootstrap 的 CSS 布局方式）")]),v._v(" "),_("li",[v._v("与其他布局方式结合，与 css 其它部分协同合作")])]),v._v(" "),_("p",[v._v("通过 Grid 布局我们能实现任意组合不同布局，其设计可称得上目前最强大的布局方式，它与 Flex 布局是未来的趋势。其中，Grid 布局适用于较大规模的布局，Flex 布局则适合页面中的组件和较小规模布局。")]),v._v(" "),_("p",[v._v("以上这些内容属于比较基础的布局，我们在写 CSS 过程中会遇到很多的神奇现象，而要理解这些现象，就得知道浏览器布局的一些原理逻辑和设定。除了布局以外，很多页面开发也有对 CSS3 动画的一些要求，这里篇幅关系不多介绍，大家可以通过互联网来学习更多的内容。")])])}),[],!1,null,null,null);_.default=d.exports}}]);