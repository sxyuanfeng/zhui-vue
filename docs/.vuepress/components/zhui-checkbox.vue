<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-checkbox v-model="value1">灯笼</z-checkbox>
            <div>Result：
                <span>{{value1}}</span>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>复选框组</h2>
        <sakura-card>
            <z-checkboxgroup>
                <z-checkbox v-model="loving.nannan">囡囡</z-checkbox>
                <z-checkbox v-model="loving.dajiao">大角</z-checkbox>
                <z-checkbox v-model="loving.houzi">猴子</z-checkbox>
            </z-checkboxgroup>
            <div>Result：
                <span v-if="loving.nannan">囡囡</span>
                <span v-if="loving.dajiao">大角</span>
                <span v-if="loving.houzi">猴子</span>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>竖向复选框组</h2>
        <sakura-card>
            <z-checkboxgroup column>
                <z-checkbox>囡囡</z-checkbox>
                <z-checkbox>大角</z-checkbox>
                <z-checkbox>猴子</z-checkbox>
            </z-checkboxgroup>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>禁用</h2>
        <sakura-card>
            <z-checkbox disabled checked>已禁用</z-checkbox>
            <z-checkbox disabled>已禁用</z-checkbox>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import CheckBox from '../../../src/components/checkbox/checkbox';
import CheckBoxGroup from '../../../src/components/checkbox/checkboxgroup';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-checkbox': CheckBox,
        'z-checkboxgroup': CheckBoxGroup,
    },
    data() {
        return {
            loving: {
                nannan: false,
                dajiao: false,
                houzi: false,
            },
            value1: false,
            code1: `
            <z-checkbox v-model="value1">灯笼</z-checkbox>
            <div>Result：
                <span>{{value1}}</span>
            </div>
            
            data() {
                return {
                    value1: false,
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code2: `
            <z-checkboxgroup>
                <z-checkbox v-model="loving.nannan">囡囡</z-checkbox>
                <z-checkbox v-model="loving.dajiao">大角</z-checkbox>
                <z-checkbox v-model="loving.houzi">猴子</z-checkbox>
            </z-checkboxgroup>
            <div>Result：
                <span v-if="loving.nannan">囡囡</span>
                <span v-if="loving.dajiao">大角</span>
                <span v-if="loving.houzi">猴子</span>
            </div>
            
            data() {
                return {
                    loving: {
                        nannan: false,
                        dajiao: false,
                        houzi: false,
                    },
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code3: `
            <z-checkboxgroup column>
                <z-checkbox>囡囡</z-checkbox>
                <z-checkbox>大角</z-checkbox>
                <z-checkbox>猴子</z-checkbox>
            </z-checkboxgroup>`.replace(/^ {12}/gm, "").trim(),
            code4: `
            <z-checkbox disabled checked>已禁用</z-checkbox>
            <z-checkbox disabled>已禁用</z-checkbox>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>