# 常见问题

你可以按下`ctrl-F`在此页面搜索你的问题关键词。或用顶部搜索栏在整个文档中进行搜索。

## mirai 问题

### CQHTTP-mirai 无法下载

由于 mirai-console 的插件下载服务器长期故障，请按新版教程手动下载 `CQHTTP-mirai`

### 如何多开

请参考[mirai多开方法](./mirai-multi-instances.md)

## yobot 问题

### 机器人提供的网站无法登录

请参考[无法打开网页](./cannot-open-webpage.md)

### 提示权限不足怎么办

yobot 自动添加第一个登录的用户为最高权限，如果需要手动修改请在[配置文件](./configuration.md)中修改 `super-admin` 项。

### 如何删除机器人消息中的“如果链接无法打开……”

请进入设置中进行一次任意的设置即可（表明web模式确实可用）

### 如何修改机器人的设置

由主人向机器人私聊发送“登录”，登录后点击设置按钮即可。

如果你需要设置自定义域名、更改主人权限、或者其他原因需要手动修改配置文件，请参考[这里](./configuration.md)。

### 如何修改机器人的 access_token

参考[这里](./access-token.md)。

### 如何添加自定义的新闻推送

使用源码运行时，在 `ybplugins/push_news.py` 文件第 33 行开始填写 RSS。或者在[插件社区](https://cqp.cc/b/app)下载专门的 RSS 推送插件。

### 如何删除公会战成员

在公会战面板的查刀页面中，选择要删除的成员点击删除。

### yobot 如何多开

请阅读[多开教程](./mirai-multi-instances.md)

### 使用反向代理后，用户 ip 变为 127.0.0.1

反向代理的情况中，yobot 可以从 http 标头中 `X-Real-IP` 获取用户 ip，具体请参考[web 模式](./web-mode.md)。  
Nginx: `proxy_set_header X-Real-IP $remote_addr;`  
Apache: `RemoteIPHeader X-Real-IP`

### 使用docker-compose运行后提示 "[Errno 13] Permission denied: 'yobotg.sh'"

请参考[Docker部署](../install/docker.md)  
此类情况均是由root账户直接运行docker实例造成的。  
在源码根目录中执行：  

```shell script
chown -R 1000:1000 .
```

以解决该问题。  

### 运行时提示“存在未提交的修改”

此类情况大部分来自于**直接修改Yobot源码**的行为。  
按照教程复制更改的配置文件（.env,yobot_data）不属于源码。  
具体有哪些文件不属于源码，请参照根目录下的 .gitignore 文件。  
如果您主动修改了源码以执行部分额外功能，请参照[如何在本地提交Commit](https://github.com/pcrbot/yobot/issues/136#issuecomment-635958636)以取消该提示。

### Linux 下 yobot 无法获取系统时区

执行

```shell
sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
sudo echo 'Asia/Shanghai' > /etc/timezone
```

### 这里没有我的问题

可以在QQ群（{{ [770947581,774394459][Math.floor(Math.random()*2)] }}）或[github issue](https://github.com/pcrbot/yobot/issues)提问，提问前可以阅读[正确的提问姿势](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)
