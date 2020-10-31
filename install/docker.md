# yobot Docker 镜像

一键部署 yobot 可以使用 [yobot docker 自动脚本](./docker-script.md)

## 单独使用 yobot 镜像

请事先安装好 `docker`

拉取并启动 `yobot`，部分参数可以参照注释修改

```shell
docker run -d \
           --name yobot \
           -p 9222:9222 \  # 暴露 9222 端口，如果希望只监听本地可改为 -p 127.0.0.1:9222:9222
           -v ${PWD}/yobot_data:/yobot/yobot_data \  # 将数据储存在当前路径下 yobot_data 目录
           yobot/yobot:pypy  # pypy 版速度更快，可改为 yobot/yobot:slim 体积更小
```

修改 `gocqhttp` 配置文件，在 `ws_reverse_servers` 里面添加如下内容（注意逗号）

```json {9-13}
{
    // ...
    // 已有项
    "ws_reverse_servers": [
        {
            // ...
            // 已有项
        },
        {
            "enabled": true,
            "reverse_url": "ws://127.0.0.1:9222/ws/",
            "reverse_reconnect_interval": 3000
        }
    ]
}
```
