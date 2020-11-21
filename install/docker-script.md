# 使用 Docker 自动脚本部署

如果想手动部署请参考[部署说明](./Linux-gocqhttp.md)

## 一键部署

在合适的路径执行，一键部署 `yobot` 与 `gocqhttp`

```shell
sudo bash -c "$(curl -sL get.yobot.win)"
```

如果需要单独使用 `yobot` 镜像，请参考[yobot镜像](./docker.md)

注意：

- CentOS 8 需要手动安装 docker 后才能使用此脚本，新手推荐使用 Ubuntu。
- 此脚本会从美国服务器下载文件，国内服务器使用此脚本可能速度较慢。
- 脚本执行完毕后，可能会出现登录验证，请按照提示完成验证。
- 登录成功后，按下 `ctrl-P , ctrl-Q` 连续组合键挂起容器。

<details>
  <summary>这个脚本做了什么？（点击展开）</summary>

1. 如果没有 docker 则安装 docker
1. 在当前目录新建 `yobot_data`、 `gocqhttp_data` 存放数据，并填写配置文件
1. 新建了一个名为 `qqbot` 的 docker 网络
1. 拉取 `yobot/yobot` 镜像，创建名为 `yobot` 的容器运行 yobot，并监听 9222 端口
1. 构建了一个 `gocqhttp` 镜像，创建名为 `gocqhttp` 的容器运行 gocqhttp

</details>

## 参考命令

后期维护时，可能需要的指令

```shell
# 停止 yobot 或 gocqhttp
sudo docker stop yobot  # 只停止 yobot
sudo docker stop gocqhttp  # 只停止 gocqhttp
sudo docker stop yobot gocqhttp  # 同时停止

# 启动 yobot 与 gocqhttp
sudo docker start yobot gocqhttp

# 重启 yobot 与 gocqhttp
sudo docker restart yobot gocqhttp

# 查看 yobot 或 gocqhttp 日志
sudo docker logs --tail 20 yobot  # 查看最后20条日志
sudo docker logs --tail 20 gocqhttp

# 重新将 gocqhttp 命令行移回前台
sudo docker attach gocqhttp
```

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
