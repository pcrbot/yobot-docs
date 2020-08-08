# mirai-cqhttp 多开方法

编辑配置文件 `mirai/plugins/CQHTTPMirai/setting.yml`

## 多个 cqhttp 后端

需要 `cqhttp-mirai` 版本大于 `0.1.6`

在 ws_reverse 列表后添加项目即可。例如：

```yaml
"1234567890":
  ws_reverse:
    - enable: true
      postMessageFormat: string
      reverseHost: 127.0.0.1
      reversePort: 9222
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
    - enable: true
      postMessageFormat: array
      reverseHost: 127.0.0.1
      reversePort: 8080
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
```

## 多个 QQ 号

为每个 QQ 号添加一个字段即可。例如：

```yaml
"1234567890":
  ws_reverse:
    - enable: true
      postMessageFormat: string
      reverseHost: 127.0.0.1
      reversePort: 9222
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
"987654321":
  ws_reverse:
    - enable: true
      postMessageFormat: array
      reverseHost: 127.0.0.1
      reversePort: 8080
      reversePath: /ws/
      accessToken: null
      reconnectInterval: 3000
```

如果需要多个 QQ 号的 miraiOK 自动登录，请修改`mirai/config.txt`，添加多行 login

```txt
----------
login 1234567890 abcd1234
login 987654321 efgh5678

```
