## 1. index
原生引入示例 vue
## 2. vue-blog
用 vue 改写 原生博客并学会使用 UI 框架
## 版本
- vue-cli@3.x.x
- vue@2.x.x
- ant-design-vue@1.1.x
- node@12.x.x
## 安装
```
npm install -g @vue/cli
```

## 创建
> window 记得选择 cmd 命令行
```
vue create vue-blog
cd vue-blog
npm run serve
```
如果提示让你使用淘宝镜像，输入 Y，接下来选择 vue2.x,等待下载依赖完成。

## 开发
### 1 增加 less
> 目前 less-loader 最新的不兼容 webpack4,所以请使用 v7.x.x
>

```
npm i less less-loader@7.1.0 -D
```
