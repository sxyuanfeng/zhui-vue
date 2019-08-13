<template>
    <z-loading :show="visiable">加载中...</z-loading>
</template>

<script>
import Loading from './loading'

export default {
    components: {
        'z-loading': Loading,
    },
    data() {
        return {
            visiable: true,
        }
    }
}
</script>
