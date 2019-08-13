<template>
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
</template>

<script>
import Button from './button';
import Icon from '../icon/icon';
import ButtonGroup from './buttongroup';

export default {
    components: {
        'z-button': Button,
        'z-icon': Icon,
        'z-buttongroup': ButtonGroup,
    }
}
</script>
