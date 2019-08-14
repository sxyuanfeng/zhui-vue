<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-tag>野有蔓草</z-tag>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>可关闭</h2>
        <sakura-card>
            <z-tag closable>野有蔓草</z-tag>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>颜色</h2>
        <sakura-card>
            <z-tag color="#ccccd6">野有蔓草</z-tag>
            <z-tag color="#f03752">野有蔓草</z-tag>
            <z-tag color="#6f8657">野有蔓草</z-tag>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Tag from '../../../src/components/tag/tag';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-tag': Tag,
    },
    data() {
        return {
            code1: '<z-tag>野有蔓草</z-tag>',
            code2: '<z-tag closable>野有蔓草</z-tag>',
            code3: `
            <z-tag color="#ccccd6">野有蔓草</z-tag>
            <z-tag color="#f03752">野有蔓草</z-tag>
            <z-tag color="#6f8657">野有蔓草</z-tag>`.replace(/^\s*/gm, '').trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>