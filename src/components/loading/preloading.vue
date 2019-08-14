<template>
    <z-loading :show="true">加载中...</z-loading>
</template>

<script>
import Loading from './loading'

export default {
    components: {
        'z-loading': Loading,
    },
}
</script>
