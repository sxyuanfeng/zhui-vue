<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-progress :percent="40"></z-progress>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>Exception</h2>
        <sakura-card>
            <z-progress :percent="40" status="exception"></z-progress>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>隐藏数据</h2>
        <sakura-card>
            <z-progress :percent="40" :showInfo="false"></z-progress>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Progress from '../../../src/components/progress/progress';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-progress': Progress,
    },
    data() {
        return {
            code1: '<z-progress :percent="40"></z-progress>',
            code2: '<z-progress :percent="40" status="exception"></z-progress>',
            code3: '<z-progress :percent="40" :showInfo="false"></z-progress>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>