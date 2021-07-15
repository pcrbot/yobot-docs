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

请使用 `python3 -V` 命令确认 python 版本，**yobot 支持的 python 版本为 3.6 ~ 3.8**

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

# 下载源码，使用 stable 稳定版分支
git clone https://github.com/pcrbot/yobot.git -b stable

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

### 部署 go-cqhttp

#### 下载 go-cqhttp

根据你的系统架构选择执行文件（大部分服务器是 amd64，可以使用 `uname -m` 命令查看，`x86_64` 即 `amd64`）

[在此查看最新版本](https://github.com/Mrs4s/go-cqhttp/releases/latest)

```shell
mkdir -p ~/qqbot/mirai
cd ~/qqbot/mirai
wget https://github.dihe.moe/Mrs4s/go-cqhttp/releases/download/v1.0.0-beta4/go-cqhttp_linux_amd64.tar.gz
tar zxvf go-cqhttp_linux_amd64.tar.gz
rm go-cqhttp_linux_amd64.tar.gz
```

#### 修改 go-cqhttp 配置文件

```shell
cd ~/qqbot/mirai

# 先执行
./go-cqhttp
# 通信方式选3（反向WS），此时会生成一个 config.yml 文件
# 修改这个文件
vim config.yml
```

修改配置文件以下内容

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

#### 启动 go-cqhttp 并登录 QQ

```shell
cd ~/qqbot/mirai
chmod +x go-cqhttp
./go-cqhttp
```

部署完成，现在可以按下 `ctrl-a , d` 连续组合键挂起这两个 shell

## 验证安装

向机器人发送“version”，机器人会回复当前版本

向机器人私聊发送“登录”，机器人会回复登录链接（第一个发送登录的人自动获得主人权限）

向机器人发送“重启”（需要权限），机器人会重启

## 常见问题

见[FAQ](../usage/faq.md)

如果需要多开，请参考[mirai多开方法](../usage/mirai-multi-instances.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
