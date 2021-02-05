# Linux 使用 gocqhttp 部署

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
yum install -y gcc python3 screen wget

# Debain / Ubuntu
# apt-get install -y gcc python3 screen wget
```

请确认 python 版本至少为 3.6，如果 `python3 -V` 显示版本低于 3.6，请安装新版 python

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
git clone https://github.com/pcrbot/yobot.git -b v3.6.7

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

根据你的系统架构选择执行文件（大部分服务器是 amd64，可以使用 `uname -m` 命令查看，`x86_64` 即 `amd64`）

[在此查看最新版本](https://github.com/Mrs4s/go-cqhttp/releases/latest)

```shell
mkdir -p ~/qqbot/mirai
cd ~/qqbot/mirai
wget https://down.yobot.club/yobot/go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz
tar zxvf go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz
rm go-cqhttp-v0.9.29-fix2-linux-amd64.tar.gz
```

#### 修改 go-cqhttp 配置文件

```shell
cd ~/qqbot/mirai

# 先执行
./go-cqhttp
# 此时会生成一个 config.hjson 文件
# 修改这个文件
vim config.json
```

修改配置文件如下

```json
{
  "uin": 123456789,  // 填写作为机器人的 QQ 号
  "password": "xxxxxxx",  // 填写作为机器人的 QQ 密码
  "encrypt_password": false,
  "password_encrypted": "",
  "enable_db": false,
  "access_token": "",
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
  "use_sso_address": false,
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
