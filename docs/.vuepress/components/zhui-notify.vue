<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-notify :visiable="show">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow">点 我</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>黑色主题</h2>
        <sakura-card>
            <z-notify dark :visiable="show2">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow2">点 我</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>位置</h2>
        <sakura-card>
            <z-notify top="200px" right="100px" :visiable="show3">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow3">点 我</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Button from '../../../src/components/button/button';
import Notify from '../../../src/components/notify/notify';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-notify': Notify,
        'z-button': Button,
    },
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
            code1: `
            <z-notify :visiable="show">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow">点 我</z-button>
            
            data() {
                return {
                    show: false,
                }
            }
            
            methods: {
                computedShow() {
                    this.show = !this.show;
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code2: `
            <z-notify dark :visiable="show2">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow2">点 我</z-button>
            
            data() {
                return {
                    show2: false,
                }
            }
            
            methods: {
                computedShow2() {
                    this.show2 = !this.show2;
                }
            }`.replace(/^ {12}/gm, "").trim(),
            code3: `
            <z-notify :visiable="show3">
                南风知我意吹梦到西洲
            </z-notify>
            <z-button @click="computedShow3">点 我</z-button>
            
            data() {
                return {
                    show3: false,
                }
            }
            
            methods: {
                computedShow3() {
                    this.show3 = !this.show3;
                }
            }`.replace(/^ {12}/gm, "").trim(),
        }
    },
    methods: {
        computedShow() {
            this.show = !this.show;
        },
        computedShow2() {
            this.show2 = !this.show2;
        },
        computedShow3() {
            this.show3 = !this.show3;
        },
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>