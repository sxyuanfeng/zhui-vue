<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-steps>
                <z-step :current="2" v-for="(item, index) in lists" :key="item.id" :length="lists.length" :stepNum="index+1" :title="item.title"></z-step>
            </z-steps>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>状态</h2>
        <sakura-card>
            <z-steps>
                <z-step :error="true" :current="2" v-for="(item, index) in lists" :key="item.id" :length="lists.length" :stepNum="index+1" :title="item.title"></z-step>
            </z-steps>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Steps from '../../../src/components/steps/steps';
import Step from '../../../src/components/steps/step';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-steps': Steps,
        'z-step': Step,
    },
    data() {
        return {
            lists: [{'title': 'blue'}, {'title': 'green'}, {'title': 'red'}],
            code1: `
            <z-steps>
                <z-step :current="2" v-for="(item, index) in lists" :key="item.id" :length="lists.length" :stepNum="index+1" :title="item.title"></z-step>
            </z-steps>`.replace(/^ {12}/gm, "").trim(),
            code2: `
            <z-steps>
                <z-step :error="true" :current="2" v-for="(item, index) in lists" :key="item.id" :length="lists.length" :stepNum="index+1" :title="item.title"></z-step>
            </z-steps>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>