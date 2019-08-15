<template>
  <div id="app">
    <preicon></preicon>
    <prebutton></prebutton>
    <br>
    <prealert></prealert>
    <br>
    <pretag></pretag>
    <br>
    <preloading></preloading>
    <br>
    <prebreadcrumb></prebreadcrumb>
    <br>
    <precard></precard>
    <br>
    <precheckbox></precheckbox>
    <br>
    <preinput></preinput>
    <br>
    <preswitch></preswitch>
    <br>
    <prerate></prerate>
    <br>
    <preradio></preradio>
    <br>
    <prewatermark></prewatermark>
    <br>
    <preprogress></preprogress>
  </div>
</template>

<script>
import preicon from './components/icon/preicon';
import prebutton from './components/button/prebutton';
import prealert from './components/alert/prealert';
import pretag from './components/tag/pretag';
import preloading from './components/loading/preloading';
import prebreadcrumb from './components/breadcrumb/prebreadcrumb';
import precard from './components/card/precard';
import precheckbox from './components/checkbox/precheckbox';
import preinput from './components/input/preinput';
import preswitch from './components/switch/preswitch';
import prerate from './components/rate/prerate';
import preradio from './components/radio/preradio';
import prewatermark from './components/watermark/prewatermark';
import preprogress from './components/progress/preprogress';

export default {
  name: 'app',
  components: {
    preicon,
    prebutton,
    prealert,
    pretag,
    preloading,
    prebreadcrumb,
    precard,
    precheckbox,
    preinput,
    preswitch,
    prerate,
    preradio,
    prewatermark,
    preprogress,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
