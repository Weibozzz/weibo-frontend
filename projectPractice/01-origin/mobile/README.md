- 要定义meta
    - `  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">`
- 百分比布局
    - 相对于最近的父级的百分比
- rem em 布局
    - em 相对于最近的父级的比例，父级没定义继续向上找
    - rem 相对于根 `html` ，如果根没定义默认为 `16px`
- 媒体查询 语法
    ```css
    @media screen
    and (min-width: 481px)
    and (max-width: 900px) {
      .container {
        width: 80%;
      }
    }
    ```
