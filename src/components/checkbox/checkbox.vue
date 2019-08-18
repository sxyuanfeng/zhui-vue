<template>
    <div class="zhui-checkbox-wrapper">
        <input class="zhui-checkbox-input" type="checkbox" :disabled="disabled" :checked="checked" @change="$emit('change', $event.target.checked)">
        <span class="zhui-checkbox-inner"></span>
        <span class="zhui-checkbox-text">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ZCheckbox',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style lang="scss">
@import './index.scss'
</style>
