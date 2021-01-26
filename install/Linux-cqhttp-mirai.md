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
yum install -y python3 screen wget git java-11-openjdk

# Debain / Ubuntu:
apt-get install -y python3 screen wget git openjdk-11-jre-headless
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
git clone https://github.com/pcrbot/yobot.git
# 国内可改用 https://gitee.com/yobot/yobot.git

cd yobot/src/client/

# 安装依赖
pip3 install -r requirements.txt --user
# 国内可加上参数 -i https://pypi.tuna.tsinghua.edu.cn/simple
# python3.6 需要使用 requirements-py36.txt

# 生成 yobotg
python3 main.py

# 启用 yobot
sh yobotg.sh
```

按下 `ctrl-a , c` 连续组合键，新建一个 screen shell

### 部署 mirai

#### 下载 mirai

```shell
github_src="github.com"
# 国内速度较慢可改为下面的镜像
# github_src="github-proxy.yobot.win"

mkdir -p ~/qqbot/mirai/plugins/CQHTTPMirai ~/qqbot/mirai/libs
cd ~/qqbot/mirai/libs
wget https://${github_src}/project-mirai/mirai-repo/raw/master/shadow/mirai-core-qqandroid/mirai-core-qqandroid-1.3.0.jar \
     https://${github_src}/project-mirai/mirai-repo/raw/master/shadow/mirai-console/mirai-console-1.0-RC-dev-28.jar \
     https://${github_src}/project-mirai/mirai-repo/raw/master/shadow/mirai-console-terminal/mirai-console-terminal-1.0-RC-dev-28.jar
cd ~/qqbot/mirai/plugins
wget https://${github_src}/yyuueexxiinngg/cqhttp-mirai/releases/download/0.2.3/cqhttp-mirai-0.2.3-all.jar
```

#### 修改 Mirai 配置文件

```shell
mkdir -p ~/qqbot/mirai/config/Console
vim ~/qqbot/mirai/config/Console/AutoLogin.yml
```

修改配置文件如下（前面是QQ号，后面是密码）

```yaml
plainPasswords:
  123456654321: example
```

#### 修改 CQHTTPMirai 配置文件

```shell
vim ~/qqbot/mirai/plugins/CQHTTPMirai/setting.yml
```

修改配置文件如下（注意修改 QQ 号）

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
      accessToken: null  # 这里也可以填写事先准备好的 access_token
      reconnectInterval: 3000
```

#### 确认配置

通过 tree 命令确认一下目录结构

```shell
cd ~/qqbot/mirai
tree
```

最终目录结构应该是

```treeview
mirai\
├── config\
│   └── Console\
│       └── AutoLogin.yml\
├── libs\
│   ├── mirai-console-1.0-RC-dev-28.jar
│   ├── mirai-console-terminal-1.0-RC-dev-28.jar
│   └── mirai-core-qqandroid-1.3.0.jar
└── plugins\
    ├── CQHTTPMirai\
    │   └── setting.yml
    └── cqhttp-mirai-0.2.3-all.jar
```

#### 启动 mirai

```shell
cd ~/qqbot/mirai

# 启动命令比较复杂，建议新建一个 start-mirai.sh 将命令填入，方便今后使用
java -cp "./libs/*" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader
```

部署完成，现在可以按下 `ctrl-a , d` 连续组合键挂起这两个 shell

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

如果需要多开，请参考[mirai多开方法](../usage/mirai-multi-instances.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
