# Windows 使用 go-cqhttp 部署

## 部署过程

本文为便携版部署方式，源码版请参考[Windows部署yobot源码版](./Windows-yobot.md)（不推荐）

### 部署 yobot

下载[yobot 便携版](https://github.com/pcrbot/yobot/releases/latest)

解压后双击“yobot.exe”启动服务

![windows下正确启动图](/imgs/aaf38d1a5cbc1c87.jpg)

### 部署 go-cqhttp

#### 安装文本编辑器

由于 Windows 自带的记事本编辑 `config.json` 文件时会出现问题，请先安装编程专用文本编辑器，比如这个：

[下载notepad3](https://github.dihe.moe/rizonesoft/Notepad3/releases/download/RELEASE_5.21.227.1/Notepad3Portable_5.21.227.1.paf.exe
)

#### 运行 go-cqhttp

下载[go-cqhttp](https://github.com/Mrs4s/go-cqhttp/releases/latest)，Windows 用户选择 `windows-amd64.zip`  

解压后获得 `go-cqhttp.exe`，启动，提示未找到配置文件，通信方式选3（反向WS），回车

同目录下会自动创建一个 `config.yml` 文件，修改填写以下项目

- uin: `BOT的QQ账号`
- password: `BOT的QQ密码`，密码为空时使用扫码登录
- （ws-reverse）universal: `ws://127.0.0.1:9222/ws/`

```yml
# go-cqhttp 配置文件

account: # 账号相关
  uin: 123456 # QQ账号
  password: '' # 密码为空时使用扫码登录
```
```yml
# 连接服务列表
servers:
  # 反向WS设置
  - ws-reverse:
      # 反向WS Universal 地址
      universal: ws://127.0.0.1:9222/ws/
```

双击启动 go-cqhttp 并登录

部署完成

## 验证安装

向机器人发送“version”，机器人会回复当前版本

向机器人私聊发送“登录”，机器人会回复登录链接（第一个发送登录的人自动获得主人权限）

向机器人发送“重启”（需要权限），机器人会重启

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
