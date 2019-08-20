<template>
    <div>
        <z-input theme="muyun" placeholder="暮云"  v-model="text" @keydown="onKeyDown" width="200px" icon="search" addonbefore="A" addonafter="Z"></z-input>
        <z-textarea theme="muyun" placeholder="暮云" v-model="textarea" width="200px"></z-textarea>
    </div>
</template>

<script>
import Input from './input';
import TextArea from './textarea';

export default {
    components: {
        'z-input': Input,
        'z-textarea': TextArea,
    },
    data() {
        return {
            text: '',
            textarea: '',
        }
    },
    methods: {
        onKeyDown() {
            console.log('监听到keydown事件');
        }
    }
}
</script>
