<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-button>点 我</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <z-button theme="primary">黛 色</z-button>
            <z-button outline theme="primary">黛 色</z-button>
            <z-button theme="success">竹 青</z-button>
            <z-button outline theme="success">竹 青</z-button>
            <z-button theme="danger">胭 脂</z-button>
            <z-button outline theme="danger">胭 脂</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>形状</h2>
        <sakura-card>
            <z-button round theme="primary">黛 色</z-button>
            <z-button round outline theme="primary">黛 色</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>块</h2>
        <sakura-card>
            <z-button block theme="primary">黛 色</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
        <h2>边框</h2>
        <sakura-card>
            <z-button kong="yuanshan">远 山</z-button>
            <z-button kong="muyun">暮 云</z-button>
            <z-button kong="meihong">莓 红</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
            </template>
        </sakura-card>
        <h2>禁用</h2>
        <sakura-card>
            <z-button disabled>禁 用</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code6}}</code></pre>
            </template>
        </sakura-card>
        <h2>加载</h2>
        <sakura-card>
            <z-button loading>加 载</z-button>
            <z-button loading theme="primary">加 载</z-button>
            <z-button round loading theme="muyun">加 载</z-button>
            <z-button loading kong="meihong">加 载</z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code7}}</code></pre>
            </template>
        </sakura-card>
        <h2>图标按钮</h2>
        <sakura-card>
            <z-button>
                <z-icon name="music"></z-icon> 音乐
            </z-button>
            <z-button round theme="primary">
                <z-icon name="index"></z-icon> 首页
            </z-button>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code8}}</code></pre>
            </template>
        </sakura-card>
        <h2>按钮组</h2>
        <sakura-card>
            <z-buttongroup>
                <z-button round theme="meihong">
                    左
                </z-button>
                <z-button theme="success">
                    中1
                </z-button>
                <z-button theme="muyun">
                    中2
                </z-button>
                <z-button round theme="ganglan">
                    右
                </z-button>
            </z-buttongroup>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code9}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import ButtonGroup from '../../../src/components/button/buttongroup';
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon/icon';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-button': Button,
        'z-buttongroup': ButtonGroup,
        'z-icon': Icon,
    },
    data() {
        return {
            code1: '<z-button>点 我</z-button>',
            code2: `
            <z-button theme="primary">黛 色</z-button>
            <z-button outline theme="primary">黛 色</z-button>
            <z-button theme="success">竹 青</z-button>
            <z-button outline theme="success">竹 青</z-button>
            <z-button theme="danger">胭 脂</z-button>
            <z-button outline theme="danger">胭 脂</z-button>`.replace(/^\s*/gm, '').trim(),
            code3: `
            <z-button round theme="primary">黛 色</z-button>
            <z-button round outline theme="primary">黛 色</z-button>`.replace(/^\s*/gm, '').trim(),
            code4: `<z-button block theme="primary">黛 色</z-button>`.replace(/^\s*/gm, '').trim(),
            code5: `
            <z-button kong="yuanshan">远 山</z-button>
            <z-button kong="muyun">暮 云</z-button>
            <z-button kong="meihong">莓 红</z-button>`.replace(/^\s*/gm, '').trim(),
            code6: '<z-button disabled>禁 用</z-button>',
            code7: `
            <z-button loading>加 载</z-button>
            <z-button loading theme="primary">加 载</z-button>
            <z-button round loading theme="muyun">加 载</z-button>
            <z-button loading kong="meihong">加 载</z-button>`.replace(/^\s*/gm, '').trim(),
            code8: `
            <z-button>
                <z-icon name="music"></z-icon> 音乐
            </z-button>
            <z-button round theme="primary">
                <z-icon name="index"></z-icon> 首页
            </z-button>`.replace(/^ {12}/gm, "").trim(),
            code9: `
            <z-buttongroup>
                <z-button round theme="meihong">
                    左
                </z-button>
                <z-button theme="success">
                    中1
                </z-button>
                <z-button theme="muyun">
                    中2
                </z-button>
                <z-button round theme="ganglan">
                    右
                </z-button>
            </z-buttongroup>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>
