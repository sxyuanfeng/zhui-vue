<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <div class="zhui-badge-docs-wrapper">
                <div class="zhui-badge-docs-wrapper-inner">
                    <z-badge content="荷花"></z-badge>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>包裹</h2>
        <sakura-card>
            <z-badge content="荷花">
                <span style="display: block; width: 50px; height: 50px; background: #ddd"></span>
            </z-badge>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>数字</h2>
        <sakura-card>
            <z-badge :content="300">
                <span style="display: block; width: 50px; height: 50px; background: #ddd"></span>
            </z-badge>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Badge from '../../../src/components/badge/badge';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-badge': Badge,
    },
    data() {
        return {
            code1: '<z-badge content="荷花"></z-badge>',
            code2: `
            <z-badge content="荷花">
                <span style="display: block; width: 50px; height: 50px; background: #ddd"></span>
            </z-badge>`.replace(/^ {12}/gm, "").trim(),
            code3: `
            <z-badge content="300">
                <span style="display: block; width: 50px; height: 50px; background: #ddd"></span>
            </z-badge>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';

.zhui-badge-docs-wrapper {
    margin: 20px;
    width: 40px;
    height: 40px;
    background: #eee;
}

.zhui-badge-docs-wrapper-inner {
    margin: 20px;
    width: 40px;
    height: 40px;
}
</style>