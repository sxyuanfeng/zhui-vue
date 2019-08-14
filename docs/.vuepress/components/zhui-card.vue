<template>
    <div>
        <h2>一个简单的card</h2>
        <sakura-card>
            <z-card width="300px">
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>一个复杂的card</h2>
        <sakura-card>
            <z-card title="野有蔓草" underline cornerLeft="花发多风雨" cornerRight="人生足别离" width="300px">
                <template #img>
                    <img style="width: 100px; height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">
                </template>
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>一个横向的card</h2>
        <sakura-card>
            <z-card title="野有蔓草" type="row" underline cornerLeft="花发多风雨" cornerRight="人生足别离">
                <template #img>
                    <img style="width: 100px; height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">
                </template>
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <div class="zhui-card-docs-wrapper">
                <z-card title="野有蔓草" theme="muyun" width="300px">
                    <template #body>
                        <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                    </template>
                </z-card>
                <span style="width: 10px"></span>
                <z-card title="野有蔓草" theme="meihong" width="300px">
                    <template #body>
                        <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                    </template>
                </z-card>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Card from '../../../src/components/card/card';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-card': Card,
    },
    data() {
        return {
            code1: `
            <z-card width="300px">
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>`.replace(/^ {12}/gm, "").trim(),
            code2: `
            <z-card title="野有蔓草" underline cornerLeft="花发多风雨" cornerRight="人生足别离" width="300px">
                <template #img>
                    <img style="width: 100px; height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">
                </template>
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>`.replace(/^ {12}/gm, "").trim(),
            code3: `
            <z-card title="野有蔓草" type="row" underline cornerLeft="花发多风雨" cornerRight="人生足别离">
                <template #img>
                    <img style="width: 100px; height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">
                </template>
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>`.replace(/^ {12}/gm, "").trim(),
            code4: `
            <z-card title="野有蔓草" theme="muyun" width="300px">
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>
            <z-card title="野有蔓草" theme="meihong" width="300px">
                <template #body>
                    <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
                </template>
            </z-card>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';

.zhui-card-docs-wrapper {
    display: flex;
    flex-direction: row;
}
</style>