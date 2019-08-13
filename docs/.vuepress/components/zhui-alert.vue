<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-alert>天青色等烟雨</z-alert>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
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
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>