# 使用 Docker 部署（测试）

::: warning

由于 mirai 对 docker 支持较差，不建议使用 docker 部署。如果坚持使用 docker 部署请自行探究 mirai 在 docker 上部署方法。

下方给出 yobot 的 docker 镜像，此镜像无法单独运行，须配合 mirai 才能运行。

:::

> 你也可以直接使用 HoshinoBot + Yobot 的 docker 镜像：<https://github.com/LQBing/YoshinoBotDeploy>

## 部署 yobot

```shell
# 从 dockerhub 拉取镜像
sudo docker pull yobot/yobot
```

<details>
  <summary>如果国内连接 dockerhub 速度较慢，可以改用：（点击展开）</summary>

```shell
# 下载镜像包
wget http://x-download.yobot.win/yobot-3.6.4-dockersave.tar.gz

# 校验文件
md5sum yobot-3.6.4-dockersave.tar.gz  # 应该输出 47b9ae0e7068230c54e8d43c1c7d0e6f，否则请勿继续

# 解压
gzip -d yobot-3.6.4-dockersave.tar.gz

# 载入镜像包
sudo docker load -i yobot-3.6.4-dockersave.tar
```

</details>

启动 yobot

```shell
sudo docker run -d \
                --name yobot \
                -p 9222:9222 \
                -v ${PWD}/yobot_data:/yobot/yobot_data \
                yobot/yobot
```
