<template>
    <div :class="[computedTheme]" :style="{'width': width, 'height': height}">
        <div class="zhui-card-img-wrapper">
            <slot name="img"></slot>
        </div>
        <div v-if="title" class="zhui-card-title">{{title}}</div>
        <div class="zhui-card-body">
            <slot name="body"></slot>
        </div>
        <div v-if="underline" :class="computedRowUnderline"></div>
        <div v-if="cornerLeft || cornerRight" class="zhui-card-corner-wrapper">
            <div v-if="cornerLeft" class="zhui-card-corner-left">{{cornerLeft}}</div>
            <span>|</span>
            <div v-if="cornerRight" class="zhui-card-corner-right">{{cornerRight}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZCard',
    props: {
        theme: {
          type: String,
        },
        title: {
          type: String,
        },
        underline: {
            type: Boolean,
            default: false,
        },
        cornerLeft: {
          type: String,
        },
        cornerRight: {
          type: String,
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        type: {
            type: String,
            default: 'column',
        }
    },
    computed: {
        computedTheme() {
            if (this.type !== 'row') {
                if (this.theme !== undefined) {
                    return ['zhui-card', 'zhui-card-'+this.theme];
                } else {
                    return 'zhui-card';
                }
            } else {
                if (this.theme !== undefined) {
                    return ['zhui-card', 'zhui-card-'+this.theme, 'zhui-card-row'];
                } else {
                    return ['zhui-card', 'zhui-card-row'];
                }
            }
        },
        computedRowUnderline() {
          return this.type === "row" ? 'zhui-card-row-underline' : 'zhui-card-underline';
        }
    }
}
</script>

<style lang="scss">
@import '../color.scss';

.zhui-card {
  font-family: 'STKaiti';
  position: relative;
  font-size: 12px;
  box-sizing: border-box;
  background: $cardBg;
  color: #fff;
  max-width: 600px;
  min-width: 100px;
  padding: 15px 10px 5px;
  text-align: center;
  border-radius: 3px;

  &-img-wrapper {
    > img {
      display: block;
      margin: auto;
      padding: 10px;
      border-radius: 50%;
    }
  }

  &-row {
    display: flex;
    flex-direction: column;
    writing-mode: tb-rl;
    min-width: 200px;
    padding: 10px 15px 10px 5px;

    &-underline {
      width: 3px;
      background: #fff;
      margin-left: 5px;
      margin-right: 10px;
      border-radius: 10px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-underline {
    height: 3px;
    background: #fff;
    margin: 10px auto 5px;
    border-radius: 10px;
  }

  &-corner {
    &-wrapper {
      margin: 5px;
      overflow: hidden;
    }

    &-left {
      float: left;
    }

    &-right {
      float: right;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
  }

  @each $key, $value in $color-list {
    &-#{$key} {
      background: $value;
    }
  }
}

</style>
