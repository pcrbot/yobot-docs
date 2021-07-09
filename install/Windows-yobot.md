# Windows 使用 yobot 源码版 部署

首先强烈不建议使用此方法部署，建议仅在操作系统为Windows且需要用到额外的yobot插件时使用

本文不保证完全有效，无效时请放弃并回到[Windows 使用 go-cqhttp 部署](./Windows-gocqhttp.md)

## 部署过程

### 环境准备

#### 安装python

- 安装 python 环境；或者使用 conda / virtualenv 等 python 虚拟环境
  
  https://www.python.org/downloads/

  https://docs.conda.io/en/latest/

  https://virtualenv.pypa.io/

请使用 `py -V` 命令确认 python 版本，**yobot 支持的 python 版本为 3.6 以上**

### 部署 yobot

- 下载源码，使用 stable 稳定版分支，解压

  https://github.com/yuudi/yobot/archive/refs/heads/stable.zip

进入 `（刚解压出的文件夹）\src\client\` 目录，在空白处Shift+右键，点击“在此处打开 PowerShell 窗口”
```PowerShell
# 安装依赖
pip3 install -r requirements.txt --user
# 国内可加上参数 -i https://pypi.tuna.tsinghua.edu.cn/simple

# 启动yobot
py main.py
```

启动后应该会报错，提示 AttributeError: type object '_asyncio.Task' has no attribute 'current_task'

原因是 aiocqhttp 依赖的 Quart 0.6.15 调用了 asyncio 一个已被弃用的方法

一个可行的解决方法如下：

- 修改报错信息中 `（略，python安装路径）\lib\site-packages\quart\local.py` 中的第35行

  将 `task = asyncio.Task.current_task()` 修改为 `task = asyncio.current_task()` （删除.Task）

  然后重新启动yobot

### 部署 go-cqhttp

后续内容同[Windows 使用 go-cqhttp 部署](./Windows-gocqhttp.md)
