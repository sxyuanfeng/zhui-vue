<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-loading :show="true">加载中...</z-loading>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>覆盖整个页面</h2>
        <sakura-card>
            <z-loading :show="true">加载中...</z-loading>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Loading from '../../../src/components/loading/loading';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-loading': Loading,
    },
    data() {
        return {
            code1: '<z-loading :show="true">加载中...</z-loading>',
            code2: '<z-loading global :show="true">加载中...</z-loading>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>