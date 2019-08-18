<template>
    <div class="zhui-alert-wrapper" :class="computedTheme" v-if="visiable">
        <span :class="[{'zhui-alert-closable': closable}]" @click="onClose"></span>
        <div class="zhui-alert-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZAlert',
    props: {
        theme: {
            type: String,
            default: '',
        },
        closable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
      return {
        visiable: {
          type: Boolean,
          default: false,
        }
      }
    },
    methods: {
      onClose() {
        this.visiable = false;
      }
    },
    computed: {
        computedTheme() {
            if (this.theme !== '') {
                return 'zhui-alert-wrapper-' + this.theme;
            }
            return 0;
        },
    }
}
</script>

<style lang="scss">
@import '../color.scss';

.zhui-alert {
  &-wrapper {
    position: relative;
    display: inline-block;
    width: 30px;
    min-height: 100px;
    font-size: 12px;
    border-radius: 3px;
    background: radial-gradient(circle at bottom left, transparent 7.5px, #fff 8px) bottom left, 
                radial-gradient(circle at top left, transparent 7.5px, #fff 8px) top left, 
                radial-gradient(circle at top right, transparent 7.5px, #fff 8px) top right, 
                radial-gradient(circle at bottom right, transparent 7.5px, #fff 8px) bottom right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 1px $default);
    padding: 3px;
    
    @each $key, $value in $color-list {
      &-#{$key} {
        filter: drop-shadow(0 0 1px $value);

        .zhui-alert {
          &-inner{
            filter: drop-shadow(0 0 0.8px $value);
            color: $value;
          }
          
          &-closable {
            border-color: $value;
          }
        }
      }
    }
  }

  &-closable {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 15px;
    border-top: 1px double $default;
    z-index: 1;
    transform: translateX(-50%);
    cursor: pointer;
  }

  &-inner {
    font-family: 'STKaiti';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    min-height: inherit;
    margin: 0 auto;
    padding: 12px 8px;
    word-wrap: break-word;
    text-align: center;
    box-sizing: border-box;

    background: radial-gradient(circle at bottom left, transparent 7.5px, #fff 8px) bottom left, 
                radial-gradient(circle at top left, transparent 7.5px, #fff 8px) top left, 
                radial-gradient(circle at top right, transparent 7.5px, #fff 8px) top right, 
                radial-gradient(circle at bottom right, transparent 7.5px, #fff 8px) bottom right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    filter: drop-shadow(0 0 0.8px $default);
    color: $default;
  }
}
</style>
