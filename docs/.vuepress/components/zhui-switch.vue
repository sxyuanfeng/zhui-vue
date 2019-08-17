<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-switch checked></z-switch>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <div style="display: flex; flex-direction: row;">
                <div class="zhui-switch-docs-wrapper">
                    <z-switch theme="meihong" checked></z-switch>
                </div>
                <div class="zhui-switch-docs-wrapper">
                    <z-switch theme="muyun" checked></z-switch>
                </div>
                <div class="zhui-switch-docs-wrapper">
                    <z-switch theme="huaqing" checked></z-switch>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>文字</h2>
        <sakura-card>
            <z-switch checked text="开关"></z-switch>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>禁用</h2>
        <sakura-card>
            <z-switch checked disabled text="开关"></z-switch>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
        <h2>受控</h2>
        <sakura-card>
            <z-switch :checked.sync="checked" theme="meihong" text="开关"></z-switch>
            <p>Result：{{checked}}</p>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Switch from '../../../src/components/switch/switch';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-switch': Switch,
    },
    data() {
        return {
            checked: true,
            code1: '<z-switch checked></z-switch>',
            code2: `
            <z-switch theme="meihong" checked></z-switch>
            <z-switch theme="muyun" checked></z-switch>
            <z-switch theme="huaqing" checked></z-switch>`.replace(/^\s*/gm, '').trim(),
            code3: `
            <z-switch checked text="开关"></z-switch>`.replace(/^\s*/gm, '').trim(),
            code4: '<z-switch checked disabled text="开关"></z-switch>',
            code5: `
            <z-switch :checked.sync="checked" theme="meihong" text="开关"></z-switch>
            <p>Reault：{{checked}}</p>
            
            data() {
                return {
                    checked: true,
                    }
                }`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';

.zhui-switch-docs-wrapper {
    margin: 10px;
}
</style>