<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-input v-model="text" placeholder="请输入"></z-input>
            <p>Result：{{text}}</p>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <div style="margin: 5px;">
                <z-input theme="muyun"></z-input>
            </div>
            <div style="margin: 5px;">
                <z-input theme="primary"></z-input>
            </div>
            <div style="margin: 5px;">
                <z-input theme="success"></z-input>
            </div>
            <div style="margin: 5px;">
                <z-input theme="danger"></z-input>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>宽度</h2>
        <sakura-card>
            <z-input width="300px"></z-input>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>图标</h2>
        <sakura-card>
            <z-input icon="search"></z-input>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
        <h2>前缀和后缀</h2>
        <sakura-card>
            <z-input addonbefore="A" addonafter="Z"></z-input>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
            </template>
        </sakura-card>
        <h2>禁用</h2>
        <sakura-card>
            <z-input disabled></z-input>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code6}}</code></pre>
            </template>
        </sakura-card>
        <h2>TextArea</h2>
        <sakura-card>
            <z-textarea v-model="textarea"></z-textarea>
            <p>Result：{{textarea}}</p>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code7}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Input from '../../../src/components/input/input';
import TextArea from '../../../src/components/input/textarea';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-input': Input,
        'z-textarea': TextArea,
    },
    data() {
        return {
            text: '',
            textarea: '',
            code1: `
            <z-input v-model="text" placeholder="请输入"></z-input>
            <p>Result：{{text}}</p>
            
            data() {
                return {
                    text: '',
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code2: `
            <z-input theme="muyun"></z-input>
            <z-input theme="primary"></z-input>
            <z-input theme="success"></z-input>
            <z-input theme="danger"></z-input>`.replace(/^\s*/gm, '').trim(),
            code3: '<z-input width="300px"></z-input>',
            code4: '<z-input icon="search"></z-input>',
            code5: '<z-input addonbefore="A" addonafter="Z"></z-input>',
            code6: '<z-input disabled></z-input>',
            code7: '<z-textarea v-model="textarea"></z-textarea>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>