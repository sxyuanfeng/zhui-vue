<template>
    <div>
        <h2>所有图标</h2>
        <sakura-card>
            <div class="ico-list">
                <div v-for="(item, index) in list" class="ico-wrapper">
                    <z-icon :name="item" size="35px"></z-icon>
                    <div class="ico-name">{{item}}</div>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>旋转</h2>
        <sakura-card>
            <div class="ico-list">
                <div class="ico-wrapper">
                    <z-icon name="refresh" size="35px" loading></z-icon>
                    <div class="ico-name">refresh</div>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
        <h2>配色</h2>
        <sakura-card>
            <div class="ico-list">
                <div class="ico-wrapper">
                    <z-icon name="music" size="35px" color="#6f8657"></z-icon>
                    <div class="ico-name">竹青</div>
                </div>
                <div class="ico-wrapper">
                    <z-icon name="camera" size="35px" color="#94232d"></z-icon>
                    <div class="ico-name">胭脂</div>
                </div>
                <div class="ico-wrapper">
                    <z-icon name="store" size="35px" color="#4c1f24"></z-icon>
                    <div class="ico-name">葡萄紫</div>
                </div>
                <div class="ico-wrapper">
                    <z-icon name="social" size="35px" color="#2376b7"></z-icon>
                    <div class="ico-name">花青</div>
                </div>
                <div class="ico-wrapper">
                    <z-icon name="calculator" size="35px" color="#f03752"></z-icon>
                    <div class="ico-name">海棠</div>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
            </template>
        </sakura-card>
        <h2>大小</h2>
        <sakura-card>
            <div class="ico-list">
                <div class="ico-wrapper">
                    <z-icon name="delete" size="50px"></z-icon>
                    <div class="ico-name">50px</div>
                </div>
            </div>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import Icon from '../../../src/components/icon/icon';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-icon': Icon,
    },
    data() {
        return {
            list: ['music', 'email', 'search', 'message', 'camera', 'picture', 'download', 'refresh', 'store', 'delete', 'social', 'index', 'setting', 'time', 'menu', 'calculator', 'edit', 'person', 'achievement', 'bell'],
            code1: '<z-icon name="music" size="35px"></z-icon>',
            code2: '<z-icon name="refresh" loading size="35px"></z-icon>',
            code3: '<z-icon name="music" size="35px" color="#6f8657"></z-icon>',
            code4: '<z-icon name="delete" size="50px"></z-icon>',
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';

.ico-list{
    display: flex;
    flex-wrap: wrap;
  }
  .ico-wrapper{
    width:140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid #ccc;
     &:hover{
        color:#c45a65;
        border:1px solid #c45a65;
        box-shadow: 0 0 3px 0 #c45a65;
      }
    .ico{
      width:2.4em !important;
      height: 2.4em !important;
     
    }
    .ico-name{
      margin-top:20px;
    }
  }
</style>
