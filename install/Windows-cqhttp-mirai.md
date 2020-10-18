# Windows 使用 cqhttp-mirai 部署

## 部署过程

本文为便携版部署方式

### 环境准备

#### 安装依赖

安装 JRE (OpenJDK 11)

[点击下载](https://github.com/ojdkbuild/ojdkbuild/releases/download/java-11-openjdk-11.0.8.10-1/java-11-openjdk-jre-11.0.8.10-1.windows.ojdkbuild.x86_64.msi)，双击安装

### 部署 yobot

下载 [yobot 便携版](https://yobot.lanzous.com/b00nlr3ni)

解压后双击“yobot.exe”启动服务

![windows下正确启动图](https://img.yobot.win/yobot/aaf38d1a5cbc1c87.jpg)

### 部署 mirai

先准备如下的目录结构

```treeview
mirai\
├── libs\
├── config\
│   └── Console\
└── plugins\
    └── CQHTTPMirai\
```

下载 1.[mirai-core](https://github.com/project-mirai/mirai-repo/raw/master/shadow/mirai-core-qqandroid/mirai-core-qqandroid-1.3.0.jar) 2.[mirai-console](https://github.com/project-mirai/mirai-repo/raw/master/shadow/mirai-console/mirai-console-1.0-RC-dev-28.jar) 3.[mirai-console-terminal](https://github.com/project-mirai/mirai-repo/raw/master/shadow/mirai-console-terminal/mirai-console-terminal-1.0-RC-dev-28.jar) 三件套并放在 `.\libs` 目录里  

下载 [CQHTTPMirai.jar](https://github.com/yyuueexxiinngg/cqhttp-mirai/releases/download/0.2.3/cqhttp-mirai-0.2.3-all.jar) 并放在 `.\plugins` 目录里  

新建 Mirai 配置文件在 `.\config\Console\AutoLogin.yml`，修改配置文件如下（前面是QQ号，后面是密码）

```yaml
plainPasswords:
  123456654321: example
```

新建 CQHTTPMirai 配置文件在 `.\plugins\CQHTTPMirai\setting.yml`，修改配置文件如下（注意修改 QQ 号）

```yaml
# 要进行配置的QQ号 (Mirai支持多帐号登录, 故需要对每个帐号进行单独设置)
# 详细说明请参考 https://github.com/yyuueexxiinngg/cqhttp-mirai
# 如果要登录多个账号，或者一个账号连接多个后端，直接按照 yaml 格式增加字段即可
"1234567890":
  ws_reverse:
    - enable: true
      postMessageFormat: string
      reverseHost: 127.0.0.1
      reversePort: 9222
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
```

新建入口文件在 `.\start-mirai.bat`，内容如下

```batch
@echo off
title Mirai Console
java -cp "./libs/*" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader %*
pause
```

双击 `start-mirai.bat` 启动 mirai

部署完成

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
