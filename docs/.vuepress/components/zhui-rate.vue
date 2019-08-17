<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-rate :nums="5" :value="2"></z-rate>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>受控</h2>
        <sakura-card>
            <z-rate :nums="5" :value.sync="num"></z-rate>
            <p>Result：{{num}}</p>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>禁用</h2>
        <sakura-card>
            <z-rate disabled :nums="5" :value="2"></z-rate>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Rate from '../../../src/components/rate/rate';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-rate': Rate,
    },
    data() {
        return {
            num: 2,
            code1: '<z-rate :nums="5" :value="2"></z-rate>',
            code2: `
            <z-rate :nums="5" :value.sync="num"></z-rate>
            <p>Result：{{num}}</p>
            
            data() {
                return {
                    num: 2,
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code3: '<z-rate disabled :nums="5" :value="2"></z-rate>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>