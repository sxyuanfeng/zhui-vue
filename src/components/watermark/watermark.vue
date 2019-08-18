<template>
    <div class="zhui-watermark" :style="{'width': width, 'height': height}">
        <img :style="{'width': width, 'height': height}" :src="src">
        <z-watermarksvg class="zhui-watermark-svg">
            <slot></slot>
        </z-watermarksvg>
    </div>
</template>

<script>
import WaterMarkSvg from './watermarksvg';

export default {
    name: 'ZWatermark',
    props: {
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        src: {
            type: String,
        },
    },
    components: {
        'z-watermarksvg': WaterMarkSvg,
    }
}
</script>

<style lang="scss">
.zhui-watermark {
    position: relative;

    > .zhui-watermark-svg {
        position: absolute;
        top: 5px;
        left: 5px;
    }
}
</style>