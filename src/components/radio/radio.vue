<template>
    <div class="zhui-radio-wrapper">
        <input type="radio" :name="name" :value="value" @click="select" class="zhui-radio-input" :disabled="disabled">
        <div class="zhui-radio-item" :class="[computedTheme]">{{ text[0] }}</div>
        <span class="zhui-radio-label">{{ text.slice(1, text.length) }}</span>
    </div>
</template>

<script>
export default {
    name: 'ZRadio',
    model: {
        prop: 'model',
        event: 'change',
    },
    props: {
        model: {
            type: String,
        },
        name: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        theme: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        computedTheme() {
            if (this.theme !== undefined) {
                return 'zhui-radio-' + this.theme;
            }
            return 0;
        },
    },
    methods: {
        select() {
            this.$emit('change', this.value);
        }
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>