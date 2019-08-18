<template>
    <div class="zhui-progress-wrapper">
        <span class="zhui-progress-inner" :class="[{'zhui-progress-active': percent < 100 && percent > 5 && status !== 'exception'}, 
            {'zhui-progress-exception': status === 'exception'}, {'zhui-progress-success': percent >= 100}]"
            :style="{'width': percent+'%', 'transform': showInfo ? `rotateZ(${percent <= 50 ? start : -rotate}deg)` : ''}">
            <span v-if="showInfo" class="zhui-progress-tag">
                {{percent}}
            </span>
        </span>
        <span class="zhui-progress-outer" :style="{'width': 100 - percent + '%', 'transform': showInfo ? `rotateZ(${percent <= 50 ? rotate : -start}deg)` : ''}"></span>
    </div>
</template>

<script>
import getRotate from './getRotate';

export default {
    name: 'ZProgress',
    props: {
        percent: {
          type: Number,
          default: 0,
        },
        status: {
            type: String,
            default: '',
        },
        showInfo: {
          type: Boolean,
          default: true,
        },
    },
    data() {
        return {
            start: 3,
        }
    },
    computed: {
        rotate() {
            return this.percent <= 50 ? getRotate(this.start, this.percent) : getRotate(this.start, 101 - this.percent);
        }
    }
}
</script>

<style lang="scss">
@import '../color.scss';

.zhui-progress {
  &-wrapper {
    font-family: 'STKaiti';
    margin-bottom: 42px;
    height: 4px;
    border-radius: 4px;
  }

  &-inner {
    position: relative;
    float: left;
    height: 100%;
    border-radius: 4px;
    background-color: $primary;
    transform-origin: left;
    transition: all .1s linear;
  }

  &-outer {
    float: right;
    height: 100%;
    background-color: #f5f5f5;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transform-origin: right;
    transition: all .1s linear;
  }

  &-tag {
    box-sizing: border-box;
    position: absolute;
    top: -5px;
    right: -10px;
    width: 20px;
    height: 30px;
    font-size: 12px;
    border-radius: 3px;
    background: $primary;
    color: #fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding-top: 10px;
    text-align: center;
    transform-origin: top;

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 7px;
      width: 6px;
      height: 6px;
      background: #f5f5f5;
      border-radius: 50%;
    }
  }

  &-active .zhui-progress-tag {
    animation: swing 1.7s infinite;    
  }

  &-exception{
    background-color: $haitang;

    .zhui-progress-tag {
      background-color: $haitang;
    }
  }
}

@keyframes swing {
  0% {
    transform: rotatez(7deg);
  }
  50% {
    transform: rotatez(-7deg);
  }
  100% {
    transform: rotatez(7deg);
  }
}

</style>