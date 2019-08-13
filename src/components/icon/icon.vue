<template>
    <i class="zhuiicon" :class="[computedName, {loadings: loading}]" :style="{'color': color, 'font-size': size}"></i>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        computedName() {
            return 'zhuiicon-' + this.name;
        }
    }
}
</script>

<style lang="scss">
@import './index.scss';
@keyframes spin {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
.loadings {
    animation: spin 1s infinite linear
}
</style>
