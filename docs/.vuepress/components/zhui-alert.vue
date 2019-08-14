<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-alert>天青色等烟雨</z-alert>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <div class="docs-alert-wrapper">
                <z-alert theme="meihong">胜日寻芳泗水滨</z-alert>
            </div>
            <div class="docs-alert-wrapper">
                <z-alert theme="haitang">无边光景一时新</z-alert>
            </div>
            <div class="docs-alert-wrapper">
                <z-alert theme="ganglan">等闲识得东风面</z-alert>
            </div>
            <div class="docs-alert-wrapper">
                <z-alert theme="success">万紫千红总是春</z-alert>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>可关闭</h2>
        <sakura-card>
            <z-alert closable>天青色等烟雨</z-alert>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Alert from '../../../src/components/alert/alert';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-alert': Alert,
    },
    data() {
        return {
            code1: '<z-alert>天青色等烟雨</z-alert>',
            code2: `
            <z-alert theme="meihong">胜日寻芳泗水滨</z-alert>
            <z-alert theme="haitang">无边光景一时新</z-alert>
            <z-alert theme="ganglan">等闲识得东风面</z-alert>
            <z-alert theme="success">万紫千红总是春</z-alert>`.replace(/^\s*/gm, '').trim(),
            code3: '<z-alert closable>天青色等烟雨</z-alert>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';

.docs-alert-wrapper {
    display: inline;
    margin: 10px;
}
</style>