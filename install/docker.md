# 使用 Docker 部署（测试）

::: tip

阅读此章节前，您需要了解：

- Docker

:::

## 创建 docker network

```shell
sudo docker network create qqbotnet
```

## 部署 yobot

```shell
sudo docker pull yobot/yobot
sudo docker run -d \
                --name yobot \
                -p 9222:9222 \
                -v $(pwd)/yobot_data:/home/yobot/yobot/src/client/yobot_data \
                --network qqbotnet \
                yobot/yobot
```

## 部署 mirai-cqhttp

```shell
botqqid=123456789
botqqpswd="ABCabc123!@#"

miraidir=$(pwd)/mirai  # 持久化文件夹
mkdir ${miraidir}

# 替换为作为机器人的qq号和密码
echo "
----------
login ${botqqid} ${botqqpswd}

" > ${miraidir}/config.txt

echo "
'${botqqid}':
  ws_reverse:
    - enable: true
      postMessageFormat: string
      reverseHost: yobot
      reversePort: 9222
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
" > ${miraidir}/setting.yml

sudo docker pull lqbing/miraiok
sudo docker run -it \  # 首次启动需要 `-it` 输入验证码，之后可以改为 `-dt`
                --name miraiok \
                -v ${miraidir}/tmp:/tmp \
                -v ${miraidir}/config.txt:workdir/config.txt \
                -v ${miraidir}/setting.yml:/workdir/plugins/CQHTTPMirai/setting.yml \
                -v ${miraidir}/device.json:/workdir/device.json \
                -v ${miraidir}/log:/workdir/log \
                --network qqbotnet \
                lqbing/miraiok
```

第一次使用往往会要求输入验证码，有时候还会给个网址复制链接然后手机QQ扫描二维码验证。所以第一次不能直接挂后台，运行需要 `docker run -it` 运行来通过验证程序
