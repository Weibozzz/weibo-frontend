## npm
包管理工具
 
一般我们 `npm install axios` 就会去自动下载资源到本地，
会生成 `node_modules` 文件夹，但是有时候资源在国外，下载速度
比较慢，我们可以更改 `npm` 下载源头

### 1.使用npm淘宝镜像
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
下载之后后面都可以使用 `cnpm` 替代 `npm`

### 2. 项目下创建 .npmrc 文件
文件写入镜像地址 

```
registry=https://registry.npm.taobao.org/
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
```
## 初始化项目
```shell
# 快速生成项目配置文件 package.json
npm init -y 
```
### 1.scripts
快捷启动命令
### 2.dependencies
项目生产依赖
### 3.devDependencies
项目开发依赖
## 参数
### -g
`--global`的简写,表示全局安装

### -D
`--dev`的简写,比如 `npm install eslint -D`,
下载完后会添加到 `package.json` 的 `devDependencies`
### -S
`--dev --save`的简写,比如 `npm install axios -S`,
下载完后会添加到 `package.json` 的 `dependencies`
