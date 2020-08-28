# 使用 Docker 部署（测试）

::: tip

阅读此章节前，您需要了解：

- Docker

:::

> 你也可以直接使用 HoshinoBot + Yobot 的 docker 镜像：<https://github.com/LQBing/YoshinoBotDeploy>

## 创建 docker network

```shell
sudo docker network create qqbotnet
```

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
                -v $(pwd)/yobot_data:/yobot/yobot_data \
                --network qqbotnet \
                yobot/yobot
```

## 部署 mirai-cqhttp

本小节抄自：<https://hub.docker.com/r/lqbing/miraiok>

```shell
sudo docker pull lqbing/miraiok
# 如国内速度慢可改用：
# sudo docker pull registry.cn-hongkong.aliyuncs.com/lqbing/miraiok
# sudo docker tag registry.cn-hongkong.aliyuncs.com/lqbing/miraiok lqbing/miraiok
```

配置准备

```shell
# 替换为作为机器人的qq号和密码
botqqid=123456789
botqqpswd="ABCabc123.,!"

# 创建持久化文件夹
miraidir=$(pwd)/mirai
mkdir ${miraidir}

# 配置自动登录文件
echo "
----------
login ${botqqid} ${botqqpswd}

" > ${miraidir}/config.txt
# 如果你需要手动编辑这个文件，请注意：
# 第一行的 ---------- 不可省略
# 最后一个换行不可省略
# 换行必须使用 \n，不能用 \r\n（不要在 Windows 下编辑再上传）

# 配置 cqhttp-mirai
echo "
\"${botqqid}\":
  ws_reverse:
    - enable: true
      postMessageFormat: string
      reverseHost: yobot
      reversePort: 9222
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
" > ${miraidir}/setting.yml
```

启动

```shell
sudo docker run -dt \  # 首次启动建议使用 -it 在前台交互，以便输入验证码
                --name miraiok \
                -v ${miraidir}/tmp:/tmp \
                -v ${miraidir}/config.txt:/workdir/config.txt \
                -v ${miraidir}/setting.yml:/workdir/plugins/CQHTTPMirai/setting.yml \
                -v ${miraidir}/device.json:/workdir/device.json \
                -v ${miraidir}/log:/workdir/log \
                --network qqbotnet \
                lqbing/miraiok
```

注意：第一次使用往往会要求输入验证码，有时候还会给个网址复制链接然后手机QQ扫描二维码验证。所以第一次运行后要使用 `docker attach --sig-proxy=false miraiok` 查看运行情况，确认登录成功后按 `ctrl-C` 退出连接。
