<template>
    <div class="zhui-switch" :class="[computedTheme, {'zhui-switch-disabled': disabled} ,{'zhui-switch-fold': !open}]" @click="onChange">
        <span v-if="text && open" class="zhui-switch-text">{{text}}</span>
        <div v-for="n in 8" :key="n" class="zhui-switch-item">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZSwitch',
    props: {
        text: {
            type: String,
        },
        checked: {
          type: Boolean,
          default: false,
        },
        theme: {
            type: String,
            default: 'ganglan'
        },
        disabled: {
          type: Boolean,
          default: false,
        }
    },
    data() {
        return {
            open: this.checked,
        }
    },
    computed: {
        computedTheme() {
            if (this.theme !== 'ganglan') {
                return 'zhui-switch-' + this.theme;
            }
            return 0;
        },
    },
    watch: {
        checked: function() {
            this.open = this.checked;
        }
    },
    methods: {
        onChange() {
            if (this.disabled === false) {
                this.$emit('update:checked', !this.open);
            } 
        }
    }
}
</script>

<style lang="scss">
@import '../color.scss';
$count: 8;

.zhui-switch {
  font-family: 'STKaiti';
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transform: rotate(90deg);
  transform-origin: center;

  &-disabled {
    cursor: not-allowed;

    > .zhui-switch-item {
      background: $inputBorder !important;
      border-right: $inputBorder !important;
    
      > span {
        background: $inputBorder !important;
        border-color: $inputBorder !important;
      }
    }
  }

  &-text {
    z-index: 1;
    position: absolute;
    width: 40px;
    height: 15px;
    line-height: 15px;
    overflow: hidden;
    top: 40%;
    left: 10%;
    color: #fff;
    font-size: 12px;
    transform: rotate(-100deg);
    text-align: center;
  }

  &-item {
    position: absolute;
    top: 40%;
    left: 80%;
    display: flex;
    flex-direction: column-reverse;
    width: 2px;
    height: 40px;
    background: #cca26e;
    transform-origin: 50% 10%;

    >span {
      height: 20px;
      background: $ganglan;
      border-bottom-right-radius: 2px;
    }
  }

  @for $i from 1 through $count {
    &-item:nth-of-type(#{$i}) {
      animation: unfold#{$i} .2s ease-out forwards;

      >span {
        width: 12px;
        margin-left: -10px;
        border-left: 1px solid $ganglan;
      }
    }
  }

  @each $key, $value in $color-list {
    &-#{$key} > &-item > span {
      background: $value;
      border-color: $value;
    }
  }

  &-item:nth-of-type(7) {
    >span {
      margin-left: -5px;
    }
  }

  &-item:nth-of-type(8) {
    border-right: 0.1px solid #cca26e;

    >span {
      width: 12px;
      margin-left: 2px;
    }
  }

  &-fold {
    @for $i from 1 through $count {
      .zhui-switch-item:nth-of-type(#{$i}) {
        animation: fold#{$i} .2s ease-in forwards;
      }
    }
  }
}

@for $i from 1 through $count {
  @keyframes fold#{$i} {
    from {
      transform: rotate($i * 18deg);
    }

    to {
      width: 2px;
      transform: rotate($i * 1deg);
      overflow: hidden;
    }
  }

  @keyframes unfold#{$i} {
    from {
      width: 3px;
      overflow: hidden;
    }

    to {
      transform: rotate($i * 18deg);
    }
  }
}
</style>
