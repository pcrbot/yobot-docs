(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{383:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux-使用-gocqhttp-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-使用-gocqhttp-部署"}},[t._v("#")]),t._v(" Linux 使用 gocqhttp 部署")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("阅读此章节前，您需要了解：")]),t._v(" "),a("ul",[a("li",[t._v("Linux 基本用法")]),t._v(" "),a("li",[t._v("screen（或 tmux）")]),t._v(" "),a("li",[t._v("git")])])]),t._v(" "),a("h2",{attrs:{id:"部署过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署过程"}},[t._v("#")]),t._v(" 部署过程")]),t._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),a("h4",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RHEL / CentOS:")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc python3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Debain / Ubuntu")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt-get install -y gcc python3 screen wget")]),t._v("\n")])])]),a("p",[t._v("请使用 "),a("code",[t._v("python3 -V")]),t._v(" 命令确认 python 版本，yobot 支持的 python 版本为 3.6 ~ 3.8")]),t._v(" "),a("h4",{attrs:{id:"使用终端复用器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用终端复用器"}},[t._v("#")]),t._v(" 使用终端复用器")]),t._v(" "),a("p",[t._v("这里我们用 screen 作为终端复用工具，具体用法请搜索 screen 教程"),a("br"),t._v("\n现在新建一个 screen 终端")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" -S qqbot\n")])])]),a("h3",{attrs:{id:"部署-yobot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-yobot"}},[t._v("#")]),t._v(" 部署 yobot")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/qqbot/yobot\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/qqbot/yobot\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载源码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/pcrbot/yobot.git -b v3.6.7\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" yobot/src/client/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -r requirements.txt --user\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 国内可加上参数 -i https://pypi.tuna.tsinghua.edu.cn/simple")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成 yobotg")]),t._v("\npython3 main.py\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用 yobot")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" yobotg.sh\n")])])]),a("p",[t._v("按下 "),a("code",[t._v("ctrl-a , c")]),t._v(" 连续组合键，新建一个 screen shell")]),t._v(" "),a("h3",{attrs:{id:"部署-mirai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-mirai"}},[t._v("#")]),t._v(" 部署 mirai")]),t._v(" "),a("h4",{attrs:{id:"下载-go-cqhttp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-go-cqhttp"}},[t._v("#")]),t._v(" 下载 go-cqhttp")]),t._v(" "),a("p",[t._v("根据你的系统架构选择执行文件（大部分服务器是 amd64，可以使用 "),a("code",[t._v("uname -m")]),t._v(" 命令查看，"),a("code",[t._v("x86_64")]),t._v(" 即 "),a("code",[t._v("amd64")]),t._v("）")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Mrs4s/go-cqhttp/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("在此查看最新版本"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/qqbot/mirai\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/qqbot/mirai\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://down.yobot.club/yobot/go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz\n")])])]),a("h4",{attrs:{id:"修改-go-cqhttp-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-go-cqhttp-配置文件"}},[t._v("#")]),t._v(" 修改 go-cqhttp 配置文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/qqbot/mirai\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先执行")]),t._v("\n./go-cqhttp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时会生成一个 config.hjson 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改这个文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" config.json\n")])])]),a("p",[t._v("修改配置文件如下")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填写作为机器人的 QQ 号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填写作为机器人的 QQ 密码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypt_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password_encrypted"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enable_db"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relogin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relogin_delay"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_relogin_times"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_rate_limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frequency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket_size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"post_message_format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore_invalid_cqcode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"force_fragmented"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"heartbeat_interval"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use_sso_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"http_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_reverse_servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://localhost:9222/ws/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse_reconnect_interval"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"web_ui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"启动-go-cqhttp-并登录-qq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-go-cqhttp-并登录-qq"}},[t._v("#")]),t._v(" 启动 go-cqhttp 并登录 QQ")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/qqbot/mirai\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x go-cqhttp\n./go-cqhttp\n")])])]),a("p",[t._v("部署完成，现在可以按下 "),a("code",[t._v("ctrl-a , d")]),t._v(" 连续组合键挂起这两个 shell")]),t._v(" "),a("h2",{attrs:{id:"验证安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证安装"}},[t._v("#")]),t._v(" 验证安装")]),t._v(" "),a("p",[t._v("向机器人发送“version”，机器人会回复当前版本")]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("p",[t._v("见"),a("RouterLink",{attrs:{to:"/usage/faq.html"}},[t._v("FAQ")])],1),t._v(" "),a("p",[t._v("如果需要多开，请参考"),a("RouterLink",{attrs:{to:"/usage/mirai-multi-instances.html"}},[t._v("mirai多开方法")])],1),t._v(" "),a("h2",{attrs:{id:"开启-web-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-web-访问"}},[t._v("#")]),t._v(" 开启 web 访问")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/usage/web-mode.html"}},[t._v("开启方法")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);