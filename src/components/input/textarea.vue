<template>
    <div class="zhui-input-textarea-wrapper">
        <textarea class="zhui-input-textarea" :class="[computedTheme, {'zhui-input-disabled': disabled}]" :value="value" v-on="inputListeners" :disabled="disabled" :placeholder="placeholder" :style="{'width': width}"></textarea>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        placeholder: '',
        width: '',
        value: '',
        theme: {
            type: String,
            default: 'meihong'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedTheme() {
            if (this.theme !== 'meihong') {
                return 'zhui-input-'+this.theme;
            } else {
                return;
            }
        },
        inputListeners() {
            var vm = this;
            return Object.assign({}, 
                this.$listeners,
                {
                // 这里确保组件配合 `v-model` 的工作
                change: function (event) {
                    vm.$emit('change', event.target.value)
                    }
                }
            )
        }
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
