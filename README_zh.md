# Chrome 设备列表导入导出工具

> 这是一个用于导入和导出 Chrome 设备列表的工具。

## 工作原理

### 导入

1. 读取配置文件（chrome 配置文件路径，profile）
2. 读取设备列表文件（config，设备列表文件路径）
3. 将设备列表写入配置文件

### 导出

1. 读取配置文件（chrome 配置文件路径，profile）
2. 将设备列表写入文件 `chrome-device-list-new.json`

## 如何使用？

1. 安装依赖

```bash
npm install
```

2. 运行脚本

```bash
# 导入
node import.js --profile "/Users/xx/Library/Application Support/Google/Chrome/Default/Preferences" --config "/Users/xx/Desktop/chrome-device-list.json"

# 导出
node export.js --profile "/Users/xx/Library/Application Support/Google/Chrome/Default/Preferences"
```

## 如何获取 Chrome 配置文件路径？

1. 打开 Chrome 浏览器
2. 在地址栏输入以下内容获取配置文件路径

```bash
chrome://version/
```

## 注意事项

当您导入设备列表时，Chrome 必须关闭，否则导入将无效。