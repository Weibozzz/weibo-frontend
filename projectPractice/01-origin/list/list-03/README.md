
## 2 css
- float
    - left
    - right
    - none
### 2.6 浮动
- 特点：内容撑开宽高
- 应用场景：1.文字环绕 2.横向排列
- 清除浮动
    ```css
    div:after{
      content: '';
      display: block;
      clear: both;
    }
    ```
