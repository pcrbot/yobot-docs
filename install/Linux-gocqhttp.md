# Linux 使用 cqhttp-mirai 部署

::: tip

阅读此章节前，您需要了解：

- Linux 基本用法
- screen（或 tmux）
- git

:::

## 部署过程

### 环境准备

#### 安装依赖

```shell
# RHEL / CentOS:
yum install -y python3 screen wget

# Debain / Ubuntu
# apt-get install -y python3 screen wget
```

请确认 python 版本至少为 3.6，如果 `python3 -V` 显示版本低于 3.6，请安装新版 python

#### （可选）新建一个 linux 用户

> 使用低权限的用户可以减少意外时的损失

```shell
groupadd qqbot
useradd -g qqbot -m qqbot
su - qqbot
```

#### 使用终端复用器

这里我们用 screen 作为终端复用工具，具体用法请搜索 screen 教程  
现在新建一个 screen 终端

```shell
screen -S qqbot
```

### 部署 yobot

```shell
mkdir -p ~/qqbot/yobot
cd ~/qqbot/yobot

# 下载源码
git clone https://github.com/pcrbot/yobot.git
# 国内可改用 https://gitee.com/yobot/yobot.git

cd yobot/src/client/

# 安装依赖
pip3 install -r requirements.txt --user
# 国内可加上参数 -i https://pypi.tuna.tsinghua.edu.cn/simple

# 生成 yobotg
python3 main.py

# 启用 yobot
sh yobotg.sh
```

按下 `ctrl-a , c` 连续组合键，新建一个 screen shell

### 部署 mirai

#### 下载 go-cqhttp

根据你的系统架构选择执行文件（大部分服务器是 amd64，可以使用 `dpkg --print-architecture` 命令查看）

amd64: `https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-linux-amd64.tar.gz`  
arm: `https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-linux-arm.tar.gz`  
arm64: `https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-linux-amd64.tar.gz`

```shell
mkdir -p ~/qqbot/mirai
cd ~/qqbot/mirai
wget https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-linux-amd64.tar.gz
# 国内可改用 https://download.fastgit.org/Mrs4s/go-cqhttp/releases/download/v0.9.25/go-cqhttp-v0.9.25-linux-amd64.tar.gz
tar zxvf go-cqhttp-v0.9.25-linux-amd64.tar.gz
rm go-cqhttp-v0.9.25-linux-amd64.tar.gz
```

#### 修改 go-cqhttp 配置文件

```shell
cd ~/qqbot/mirai
vim config.json
```

修改配置文件如下（请按照注释修改内容，并删除注释）

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

#### 启动 go-cqhttp 并登录 QQ

```shell
cd ~/qqbot/mirai
chmod +x go-cqhttp
./go-cqhttp
```

部署完成，现在可以按下 `ctrl-a , d` 连续组合键挂起这两个 shell

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

如果需要多开，请参考[mirai多开方法](../usage/mirai-multi-instances.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
