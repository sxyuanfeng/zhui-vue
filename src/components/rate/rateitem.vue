<template>
    <div class="zhui-rate-item" @click="clickRate" @mousemove="hoverRate">
        <z-ratesvg :active="active"></z-ratesvg>
    </div>
</template>

<script>
import RateSvg from './ratesvg';

export default {
    props: {
        num: {
            type: Number,
        },
        active: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        'z-ratesvg': RateSvg,
    },
    methods: {
        clickRate() {
            if (this.disabled === false) {
                this.$emit('on-click', this.num);
            }  
        },
        hoverRate() {
            if (this.disabled === false) {
                this.$emit('on-mouse-move', this.num);
            }
        },
    },
}
</script>

<style lang="scss">
@import './index.scss'
</style>