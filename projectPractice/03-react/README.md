## 版本
- react@17.0.0
    - https://zh-hans.reactjs.org/
- react-dom@17.0.0
- node@12.x.x
- redux
    - https://www.reduxjs.cn/basics/example

## npm 更改源
```shell script
npm config get registry
# 默认是：https://registry.npmjs.org/
npm config set registry https://registry.npm.taobao.org/
```
## 1. index
未使用脚手架开发 `react`
## 2. react-vite-react
使用 `vite` 脚手架开发 `react`

Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写，
并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。

- https://cn.vitejs.dev/
## 3. create-react-app
> 这个首次安装会比较慢。官方文档 css 预处理器推荐的是 sass ,如果要使用 less 则需要 eject

使用官方推荐的 `create-react-app` 脚手架开发 `react`

- http://www.html.cn/create-react-app/

### 3.1 安装sass
1. npm install node-sass

`node-sass` 下载很慢可能会失败，建议新建 `.npmrc` 文件，
填入
`sass_binary_site="https://npm.taobao.org/mirrors/node-sass/"
`
## .npmrc 文件
npm install 第一步很看这里
