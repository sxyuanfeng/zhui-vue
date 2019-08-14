<template>
    <div class="zhui-watermark" :width="width" :height="height">
        <z-watermarksvg>
            <slot></slot>
        </z-watermarksvg>
    </div>
</template>

<script>
import WaterMarkSvg from './watermarksvg';

export default {
    props: {
        width: '',
        height: '',
    },
    components: {
        'z-watermarksvg': WaterMarkSvg,
    }
}
</script>
