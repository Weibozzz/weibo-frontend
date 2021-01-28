案例：写一个文件夹特定文件代码copy的小功能
## path
```js
const path = require('path')
```
- __dirname
- path.basename
- path.resolve
- path.join
## fs
```js
const fs = require('fs')
```
- fs.readdir
- fs.stat
- stats.isDirectory()
- stats.isFile()
## child_process
```js
const { exec } = require('child_process')
exec(
      `rm -rf ${file}`,
      (error, stdout, stderr) => {
        if (error) {
          return
        }
      })
```
## shell简单命令

- 重命名文件 `mv oldPath newPath`
- 复制文件 `cp -r file targetToPath`
- 删除文件 `rm -rf file`
- 打开文件,支持excel等 `start filePath`

## 案例
```js
const fs = require('fs')
const { exec } = require('child_process')
// 删除文件
async function delFiles (file, ws) {
  return new Promise((resolve, reject) => {
    exec(
      `rm -rf ${file}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
  })
}
// 复制文件
async function copyFile (file, targetToPath, ws) {
  return new Promise((resolve, reject) => {
    exec(
      `cp -r ${file} ${targetToPath}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
  })
}
async function copyFiles (targetPath, targetToPath, ws) {
  return new Promise((resolve, reject) => {
    fs.readdir(targetPath, async (err, files) => {
      if(err){
         // 出错了
        reject(err)
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if(ignoreFiles.indexOf(file) === -1){
          try {
            await copyFile(`${targetPath}\\${file}`, targetToPath, ws)
          } catch (error) {
            // 出错了
          }
        }
      }
      resolve()
    })
  });
}
```
