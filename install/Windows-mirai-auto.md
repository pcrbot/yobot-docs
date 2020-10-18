# Windows 使用 yobot-mirai-installer 部署

## 一键部署

在合适的路径（比如桌面）打开 Windows powershell，执行

```powershell
# 允许 Powershell 执行网络脚本
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

# 开始自动部署
Invoke-WebRequest https://get.yobot.win/install.ps1 -OutFile .\install.ps1 ; powershell -File install.ps1
```

本方法适用于 PowerShell 3.0 以上，如果无法安装请使用[手动部署](./Windows-gocqhttp.md)

本脚本启动时会下载一些文件，如果出现下载失败，请检查网络是否顺畅，然后删除 `qqbot` 文件夹，重新运行脚本

如果需要多开，请参考[mirai多开方法](../usage/mirai-multi-instances.md)

## 验证安装

向机器人发送“version”，机器人会回复当前版本

## 常见问题

见[FAQ](../usage/faq.md)

## 开启 web 访问

[开启方法](../usage/web-mode.md)
