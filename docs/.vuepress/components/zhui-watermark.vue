<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-watermark width="400px" height="300px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">水印</z-watermark>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import WaterMark from '../../../src/components/watermark/watermark';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-watermark': WaterMark,
    },
    data() {
        return {
            code1: '<z-watermark width="400px" height="300px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">水印</z-watermark>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>