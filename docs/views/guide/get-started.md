---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <z-button type="meihong">点击报名</z-button>
  </div>
</template>

<script>
import {Button} from 'zhui-vue'
import 'zhui-vue/dist/zhui.css'


export default {
  name: 'app',
  components: {
    'z-button':Button
  }
}
</script>

```
