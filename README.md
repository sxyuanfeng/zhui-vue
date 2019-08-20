## npm安装

```bash
npm install zhui-vue
```

## 使用

```vue
<template>
  <div id="app">
    <z-button type="meihong">点 我</z-button>
  </div>
</template>

<script>
import Vue from 'vue
import Zhui from 'zhui-vue'
import 'zhui-vue/dist/zhui.css'

Vue.use(Zhui);

export default {
  name: 'app',
}
</script>

```

Inspired by [zhui](https://github.com/zhui-team/zhui) @zhui-team