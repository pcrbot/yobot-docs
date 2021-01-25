# 从插件版迁移

从 yobot 插件版迁移到 yobot 独立版的方法

## 迁移步骤

1. 找到 `插件目录/yobot/src/client/yobot_data` 目录，备份下整个目录
1. 在 `yobot_data` 里找到 `yobot_config` 文件，将其中的 `public_address` 和 `port` 端口号改为一个新的端口号（范围：1024~65535，例如 9222，下文中 9222 均指此端口，如有需要请替换为其他端口）
1. （对于 Windows 用户）下载 [yobot 便携版](https://github.com/pcrbot/yobot/releases/latest)，将 `yobot_data` 目录放在 yobot.exe 同目录，然后运行
1. （对于 Linux 用户）安装 Docker 并将 `yobot_data` 目录放在当前目录，然后执行

   ```shell
   docker run -d \
          --name yobot \
          -p 9222:9222 \
          -v ${PWD}/yobot_data:/yobot/yobot_data \
          -e YOBOT_ACCESS_TOKEN="" \
          -e YOBOT_PUBLIC_ADDRESS="" \
          yobot/yobot:pypy
   ```

1. （对于 gocqhttp 用户）在 gocqhttp 的配置文件 `config.hjson` 里，找到 `ws_reverse_servers` 字段，添加如下内容

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

1. （对于 onebot-kotlin）在 onebot-kotlin 配置文件 `config/OneBot/settings.yml` 里，找到 `ws_reverse` 字段，添加如下内容

   ```yaml
   # ...
   # 已有项
   ws_reverse:
   - enable: true
     # ...
     # 已有项
   - enable: true
     postMessageFormat: string
     reverseHost: 127.0.0.1
     reversePort: 9222
     reversePath: /ws
     useUniversal: true
     reconnectInterval: 3000
   ```

1. （对于使用了 Nginx / Caddy 反向代理的用户）将反向代理配置文件中的旧端口改为新的端口
1. （对于没有使用反向代理的用户）在服务器管理面板中，开放新的端口（[阿里云开启方法](https://help.aliyun.com/document_detail/25471.html) [腾讯云开启方法](https://cloud.tencent.com/document/product/213/39740)）
