<template>
    <div v-if="visiable" @click="onClose" class="zhui-tag-wrapper" :class="{'zhui-tag-wrapper-closable': closable}" :style="{'background-color': color}">
        <div class="zhui-tag-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        closable: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
        }
    },
    data() {
        return {
            visiable: {
                type: Boolean,
                default: true,
            }
        }
    },
    methods: {
        onClose() {
            this.visiable = false;
        }
    }
}
</script>

<style lang="scss">
@import '../color.scss';

.zhui-tag {
  &-wrapper {
    position: relative;
    display: inline-block;
    width: 30px;
    min-height: 60px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 1.6;
    background: $primary;
    color: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 12px;
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
    }

    &-closable {
      animation: tag-shake 1s ease 0s infinite;
      animation-play-state: paused;
      cursor: pointer;
      
      &:hover {
        animation-play-state: running;
      }
    }
  }

  &-body {
    font-family: 'STKaiti';
    padding: 22px 2px 15px;
    text-align: center;
    word-break: break-word;
  }
}

@keyframes tag-shake {
  from    { transform: rotate(0deg); }
  4%      { transform: rotate(5deg); }
  12.5%   { transform: rotate(-5deg); }
  21%     { transform: rotate(5deg); }
  29%     { transform: rotate(-5deg); }
  37.5%   { transform: rotate(5deg); }
  46%     { transform: rotate(-5deg); }
  50%,to  { transform: rotate(0deg); }
}
</style>
