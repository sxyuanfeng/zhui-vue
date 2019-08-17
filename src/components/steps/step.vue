<template>
    <div class="zhui-step" :class="[isCurrent]">
        <i v-if="!isLast" class="zhui-step-tail"></i>
        <div class="zhui-step-num">{{stepNum}}</div>
        <div class="zhui-step-title">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: {
        stepNum: {
            type: Number,
        },
        title: {
            type: String,
        },
        length: {
            type: Number,
        },
        current: {
            type: Number,
            default: 1,
        },
        error: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        isLast() {
            if (this.stepNum === this.length) {
                return true;
            }
        },
        isCurrent() {
            if (this.current === this.stepNum) {
                if (this.error === true) {
                    return ['zhui-step-current', 'zhui-step-error'];
                } else {
                    return 'zhui-step-current';
                }
            } else if (this.current < this.stepNum) {
                return 'zhui-step-wait';
            } else {
                return 'zhui-step-finished';
            }
        }
    }
}
</script>

<style lang="scss">
@import './index.scss';
</style>