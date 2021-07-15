# Web 模式

机器人开启web模式后，可以使用网页版的公会战交互界面。网页版和群聊版互通。

## 开启 Web 模式

请在服务器上运行软件，[服务器推荐](../install/server.md)

如果坚持在本地计算机运行，也可以使用内网穿透（不建议新手使用）

### 方法 1：直接连接（简单原始）

直接暴露服务的端口，无法使用加密通信，网址中必须留下端口

<details>
  <summary>（点击展开）</summary>

在 yobot [配置文件](./configuration.md)中，将`host`字段恢复为`0.0.0.0`（即默认值，如果没有手动修改过就不用管）

在服务器的防火墙面板里，打开 9222 端口（如端口更换则为更换后的端口）  
（[阿里云开启方法](https://help.aliyun.com/document_detail/25471.html) [腾讯云开启方法](https://cloud.tencent.com/document/product/213/39740)）
如果是腾讯云 Windows 服务器，可能还需要放行 Windows 防火墙

由于不同的服务器提供商所需的步骤不同，所以具体方法请通过搜索引擎搜索：【你的提供商+你的操作系统+如何开放端口】

::: warning

如果使用这种方法，**必须**为 httpapi 和 yobot 设定 access_token 防止入侵

:::

</details>

### 方法 2：使用 Nginx 代理（麻烦但功能强大，目前的主流）

如果需要为网页添加日志记录、HTTPS支持、安全限制等，或者需要同时部署其他站点，可以使用 Nginx、Apache 之类的服务器软件

这里只给出实例，不详细讲解方法

<details>
  <summary>（点击展开）</summary>

请根据服务器实际情况设定 Nginx 代理，这里给出一个示例，**不要直接复制**，如果不懂请用工具生成或请熟悉的人代劳

Nginx 代理配置后，在机器人配置文件中`public_address`项替换为代理后的地址，安全起见可以将`host`项设置为`127.0.0.1`

```nginx
server {
  listen 80;
  listen [::]:80;

  ## 使用 https 加密通信，增加安全性（可选）
  # listen 443 ssl http2;
  # listen [::]:443 ssl http2;
  # ssl_certificate /home/www/ssl/ssl_certificate.crt;  # 你的证书路径
  # ssl_certificate_key /home/www/ssl/ssl_certificate.key;  # 你的私钥路径

  server_name io.yobot.xyz;  # 你的域名

  location /
  {
    proxy_pass http://127.0.0.1:9222;  # 反向代理
    proxy_set_header X-Real-IP $remote_addr;  # 传递用户IP
  }

  ## 静态文件直接访问（可选，性能）
  #location /yobot/assets/ {
  #  alias /home/yobot/src/client/public/static/;  # 你的静态文件目录，如果你修改了`public_basepath`，请同时修改这里的`location`
  #  expires 30d;
  #}

  ## 输出文件直接访问（可选，性能）
  #location /yobot/output/ {
  #  alias /home/yobot/src/client/yobot_data/output/;  # 你的输出文件目录，如果你修改了`public_basepath`，请同时修改这里的`location`
  #  charset utf-8;  # 设置 HTTP 响应的字符集避免页面出现乱码
  #  expires 30d;
  #}

  # 阻止 cqhttp 接口被访问(可选，安全)
  location /ws/ {
    # allow 172.16.0.0/12;  # 允许 cqhttp 通过（yobot与 cqhttp 不在同一个服务器上时使用，ip为 cqhttp 所在服务器的ip）
    deny all;
  }
}
```

</details>

### 方法 3：使用 Apache 代理（麻烦但功能强大，上个时代的主流）

这里只给出实例，不详细讲解方法

<details>
  <summary>（点击展开）</summary>

Apache 支持从任何会被加载的 http-xxxx.conf 读取配置，即使配置本不应属于该文件

所以可以选择一个自己所喜好的，例如将所有的配置信息全部写在 httpd-ssl.conf 里面

在 httpd.conf 内按需启用模块后，在 httpd-ssl.conf 内根据实际情况配置以下内容，**如遇到问题请自行配合 error.log 进行故障排除**

```apacheconf
Listen 443

SSLProtocol all -SSLv3
SSLProxyProtocol all -SSLv3

<VirtualHost *:443>
    ServerName io.yobot.xyz
    ServerAlias io.yobot.xyz
    SSLEngine on
    <IfModule remoteip_module>
        RemoteIPHeader X-Forwarded-For
        RemoteIPInternalProxy 127.0.0.1/24
    </IfModule>
    <Location />
        ProxyPass http://127.0.0.1:9222
        ProxyPassReverse http://127.0.0.1:9222
    </Location>
    <Location /cqhttp/ws/>
        Deny from All
    </Location>
    <Location /ws/>
        Deny from All
    </Location>
</VirtualHost>

SSLCertificateFile "${SRVROOT}/conf/server.crt"

SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
```

并对 yobot 源码 /src/client/ybplugins/login.py 进行必要的修改

```python
userlogin.last_login_ipaddr = request.headers.get(
    'X-Forwarded-For', request.remote_addr)
```

```python
user.last_login_ipaddr = request.headers.get(
    'X-Forwarded-For', request.remote_addr)
```

</details>

### 方法 4 : 使用 caddy 代理（非常简单且强大，比 nginx 稍差）

这里只给出实例，不详细讲解方法

<details>
  <summary>（点击展开）</summary>

下载安装 `caddy`

创建一个 `Caddyfile` （没有扩展名），编写内容如下，其中的 `example.com` 替换成你自己的域名。

```caddyfile
example.com {  # 你的域名

  respond /ws/* "Forbidden" 403 {
    close
  }

  reverse_proxy * http://127.0.0.1:9222 {
    header_up +X-Real-IP {remote_host}  # 传递用户IP
  }
}
```

启动 caddy

</details>

## 开始使用 Web 模式

向机器人私聊发送“登录”即可

如果需要密码，向机器人私聊发送“重置密码”即可
