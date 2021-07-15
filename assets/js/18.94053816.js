(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{381:function(t,s,a){"use strict";a.r(s);var o=a(27),e=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows-使用-yobot-源码版-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-使用-yobot-源码版-部署"}},[t._v("#")]),t._v(" Windows 使用 yobot 源码版 部署")]),t._v(" "),a("p",[t._v("首先强烈不建议使用此方法部署，建议仅在操作系统为Windows且需要用到额外的yobot插件时使用")]),t._v(" "),a("p",[t._v("本文不保证完全有效，无效时请放弃并回到"),a("RouterLink",{attrs:{to:"/install/Windows-gocqhttp.html"}},[t._v("Windows 使用 go-cqhttp 部署")])],1),t._v(" "),a("h2",{attrs:{id:"部署过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署过程"}},[t._v("#")]),t._v(" 部署过程")]),t._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),a("h4",{attrs:{id:"安装python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装python"}},[t._v("#")]),t._v(" 安装python")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装 python 环境（包括 pip）")]),t._v(" "),a("p",[t._v("https://www.python.org/downloads/")])])]),t._v(" "),a("p",[t._v("请使用 "),a("code",[t._v("py -V")]),t._v(" 命令确认 python 版本，"),a("strong",[t._v("yobot 支持的 python 版本为 3.6 以上")])]),t._v(" "),a("h3",{attrs:{id:"部署-yobot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-yobot"}},[t._v("#")]),t._v(" 部署 yobot")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用"),a("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Desktop"),a("OutboundLink")],1),t._v(" 克隆 "),a("code",[t._v("yuudi/yobot")]),t._v(" （推荐），切换至 "),a("code",[t._v("stable")]),t._v(" 分支，后续更新可直接pull")])]),t._v(" "),a("li",[a("p",[t._v("下载源码（不推荐），使用 "),a("code",[t._v("stable")]),t._v(" 稳定版分支，下载完毕后解压")]),t._v(" "),a("p",[t._v("https://github.com/yuudi/yobot/archive/refs/heads/stable.zip")])])]),t._v(" "),a("p",[t._v("进入 "),a("code",[t._v("（刚 克隆/解压 出的文件夹）\\src\\client\\")]),t._v(" 目录，在空白处Shift+右键，点击“在此处打开 PowerShell 窗口”（或者命令提示符）")]),t._v(" "),a("div",{staticClass:"language-PowerShell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\npip3 install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r requirements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("user\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 国内可加上参数 -i https://pypi.tuna.tsinghua.edu.cn/simple")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动yobot")]),t._v("\npy main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n")])])]),a("p",[t._v("启动后应该会报错，提示 "),a("code",[t._v("AttributeError: type object '_asyncio.Task' has no attribute 'current_task'")])]),t._v(" "),a("p",[t._v("原因是 aiocqhttp 依赖的 Quart 0.6.15 调用了 asyncio 一个已被弃用的方法")]),t._v(" "),a("p",[t._v("一个可行的解决方法如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("修改报错信息中 "),a("code",[t._v("（略，python安装路径）\\lib\\site-packages\\quart\\local.py")]),t._v(" 中的第35行")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("task = asyncio.Task.current_task()")]),t._v(" 修改为 "),a("code",[t._v("task = asyncio.current_task()")]),t._v(" （删除.Task）")]),t._v(" "),a("p",[t._v("然后重新启动yobot")])])]),t._v(" "),a("h3",{attrs:{id:"部署-go-cqhttp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-go-cqhttp"}},[t._v("#")]),t._v(" 部署 go-cqhttp")]),t._v(" "),a("p",[t._v("后续内容同"),a("RouterLink",{attrs:{to:"/install/Windows-gocqhttp.html#部署-go-cqhttp"}},[t._v("Windows 使用 go-cqhttp 部署")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);