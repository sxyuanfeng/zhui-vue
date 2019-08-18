<template>
    <div class="zhui-checkbox-group" :class="[{'zhui-checkbox-group-column': column}]">
        <slot></slot>
    </div>
</template>

<script>
import CheckBox from './checkbox';

export default {
    name: 'ZCheckboxgroup',
    components: {
        'z-checkbox': CheckBox,
    },
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
