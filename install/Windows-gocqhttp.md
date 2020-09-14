# Windows 使用 go-cqhttp 部署

## 部署过程

本文为便携版部署方式

### 部署 yobot

下载[yobot 便携版](https://yobot.lanzous.com/b00nlr3ni)

解压后双击“yobot.exe”启动服务

![windows下正确启动图](https://img.yobot.win/yobot/aaf38d1a5cbc1c87.jpg)

### 部署 mirai

#### 安装文本编辑器

由于 Windows 自带的记事本编辑 `config.json` 文件时会出现问题，请先安装编程专用文本编辑器，比如这个：

[下载notepad2](http://www.flos-freeware.ch/zip/Notepad2_4.2.25_x64.exe)

#### 运行 go-cqhttp

[go-cqhttp 64 位](https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-windows-amd64.zip)  
[go-cqhttp 32 位](https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-windows-386.zip)

解压后，双击启动，此时会自动生成一个 `config.json` 文件，打开这个文件修改

```json
{
  "uin": 0,  // 作为机器人的 QQ 号
  "password": "",  // 作为机器人的 QQ 密码
  "encrypt_password": false,
  "password_encrypted": "",
  "enable_db": false,  // 内置数据库，yobot 不需要，某些其他插件可能需要
  "access_token": "",  // 这里也可以填写事先准备好的 access_token
  "relogin": {
    "enabled": true,
    "relogin_delay": 3,
    "max_relogin_times": 0
  },
  "_rate_limit": {
    "enabled": false,
    "frequency": 1,
    "bucket_size": 1
  },
  "post_message_format": "string",
  "ignore_invalid_cqcode": false,
  "force_fragmented": true,
  "heartbeat_interval": 5,
  "http_config": {
    "enabled": false
  },
  "ws_config": {
    "enabled": false
  },
  "ws_reverse_servers": [
    {
      "enabled": true,
      "reverse_url": "ws://localhost:9222/ws/",
      "reverse_reconnect_interval": 3000
    }
    // 如需多开，请在这里添加字段
  ]
}
```

重新启动 go-cqhttp 并登录

部署完成

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
