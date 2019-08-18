<template>
    <div class="zhui-input-wrapper" :class="[{'zhui-input-group': addonbefore || addonafter}, {'zhui-input-wrapper-disabled': disabled}]">
        <span v-if="addonbefore" class="zhui-input-group-addon" :class="['zhui-input-group-addon-'+theme, {'zhui-input-group-addon-disabled': disabled}]">{{addonbefore}}</span>
        <span :class="{'zhui-input-inputicon-wrapper': addonbefore || addonafter}">
            <span v-if="icon" class="zhui-input-icon-wrapper">
                <z-icon :name="icon"></z-icon>
            </span>
            <input :class="[computedTheme, {'zhui-input-disabled': disabled}]" :value="value" v-on="inputListeners" :disabled="disabled" :placeholder="placeholder" :style="{'width': width}">
        </span>
        <span v-if="addonafter" class="zhui-input-group-addon" :class="['zhui-input-group-addon-'+theme, {'zhui-input-group-addon-disabled': disabled}]">{{addonafter}}</span>
    </div>
</template>

<script>
import Icon from '../icon/icon';

export default {
    name: 'ZInput',
    model: {
        prop: 'value',
        event: 'change',
    },
    components: {
        'z-icon': Icon,
    },
    props: {
        placeholder: {
            type: String,
        },
        width: {
            type: String,
        },
        value: {
            type: String,
        },
        theme: {
            type: String,
            default: 'meihong'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        addonbefore: {
            type: String,
            default: '',
        },
        addonafter: {
            type: String,
            default: '',
        }
    },
    computed: {
        computedTheme() {
            if (this.theme !== 'meihong') {
                return ['zhui-input', 'zhui-input-'+this.theme];
            } else {
                return 'zhui-input';
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
