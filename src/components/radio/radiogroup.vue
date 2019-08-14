<template>
    <div class="zhui-radio-group" :class="{'zhui-radio-group-column': column}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        column: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss">
@import './index.scss';
</style>