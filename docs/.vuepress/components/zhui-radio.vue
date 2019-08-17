<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-radio text="春色满园关不住"></z-radio>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>单选框组</h2>
        <sakura-card>
            <z-radiogroup>
                <z-radio></z-radio>
                <z-radio theme="muyun"></z-radio>
                <z-radio theme="yuanshan"></z-radio>
            </z-radiogroup>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>  
        <h2>受控</h2>
        <sakura-card>
            <z-radiogroup column>
                <z-radio theme="primary" name="num" value="One" v-model="picked" text="春色满园关不住"></z-radio>
                <z-radio theme="primary" name="num" value="Two" v-model="picked" text="春色满园关不住"></z-radio>
                <z-radio theme="primary" name="num" value="Three" v-model="picked" text="春色满园关不住"></z-radio>
            </z-radiogroup>
            <p>Result：{{picked}}</p>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>  
        <h2>禁用</h2>
        <sakura-card>
            <z-radio disabled text="春色满园关不住"></z-radio>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Radio from '../../../src/components/radio/radio';
import RadioGroup from '../../../src/components/radio/radiogroup';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-radio': Radio,
        'z-radiogroup': RadioGroup,
    },
    data() {
        return {
            picked: '',
            code1: '<z-radio text="春色满园关不住"></z-radio>',
            code2: `
            <z-radiogroup>
                <z-radio></z-radio>
                <z-radio theme="muyun"></z-radio>
                <z-radio theme="yuanshan"></z-radio>
            </z-radiogroup>`.replace(/^ {12}/gm, "").trim(),
            code3: `
            <z-radiogroup column>
                <z-radio theme="primary" name="num" value="One" v-model="picked" text="春色满园关不住"></z-radio>
                <z-radio theme="primary" name="num" value="Two" v-model="picked" text="春色满园关不住"></z-radio>
                <z-radio theme="primary" name="num" value="Three" v-model="picked" text="春色满园关不住"></z-radio>
            </z-radiogroup>
            <p>Result：{{picked}}</p>
            
            data() {
                return {
                    picked: '',
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code4: '<z-radio disabled text="春色满园关不住"></z-radio>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>