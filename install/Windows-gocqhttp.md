# Windows 使用 go-cqhttp 部署

## 部署过程

本文为便携版部署方式，源码版请参考[Windows部署yobot源码版](./Windows-yobot.md)（不推荐）

### 部署 yobot

下载[yobot 便携版](https://github.com/pcrbot/yobot/releases/latest)

解压后双击“yobot.exe”启动服务

![windows下正确启动图](/imgs/aaf38d1a5cbc1c87.jpg)

### 部署 mirai

#### 安装文本编辑器

由于 Windows 自带的记事本编辑 `config.json` 文件时会出现问题，请先安装编程专用文本编辑器，比如这个：

[下载notepad3](http://pan.yobot.win/share/Windows%E5%B7%A5%E5%85%B7/Notepad3.exe)

#### 运行 go-cqhttp

下载[go-cqhttp](https://github.com/Mrs4s/go-cqhttp/releases/latest)，Windows 用户选择 `windows-amd64.zip`  

解压后获得 `go-cqhttp.exe`，在其同目录下创建一个 `config.json` 文件，填写如下内容

```json
{
  "uin": 0, "←--------------------注释1": "作为机器人的 QQ 号",
  "password": "", "←--------------注释2": "作为机器人的 QQ 密码",
  "encrypt_password": false,
  "password_encrypted": "",
  "enable_db": false, "←----------注释3": "内置数据库，yobot 不需要，某些其他插件可能需要",
  "access_token": "", "←----------注释4": "这里也可以填写事先准备好的 access_token",
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
  ],
  "web_ui": {
    "enabled": false
  }
}
```

双击启动 go-cqhttp 并登录

部署完成

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
