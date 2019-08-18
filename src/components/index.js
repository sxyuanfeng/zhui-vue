import ZAlert from "./alert/alert.vue";
import ZBadge from "./badge/badge.vue";
import ZBreadcrumb from "./breadcrumb/breadcrumb.vue";
import ZBreadcrumbitem from "./breadcrumb/breadcrumbitem.vue";
import ZButton from "./button/button.vue";
import ZButtongroup from "./button/buttongroup.vue";
import ZCard from "./card/card.vue";
import ZCheckbox from "./checkbox/checkbox.vue"
import ZCheckboxgroup from "./checkbox/checkboxgroup.vue";
import ZIcon from "./icon/icon.vue";
import ZInput from "./input/input.vue";
import ZTextarea from "./input/textarea.vue";
import ZLoading from "./loading/loading.vue";
import ZNotify from "./notify/notify.vue";
import ZProgress from "./progress/progress.vue";
import ZRadio from "./radio/radio.vue";
import ZRadiogroup from "./radio/radiogroup.vue";
import ZRate from "./rate/rate.vue";
import ZSteps from "./steps/steps.vue";
import ZStep from "./steps/step.vue";
import ZSwitch from "./switch/switch.vue";
import ZTag from "./tag/tag.vue";
import ZWatermark from "./watermark/watermark.vue";

const components = [
    ZAlert,
    ZBadge,
    ZBreadcrumb,
    ZBreadcrumbitem,
    ZButton,
    ZButtongroup,
    ZCard,
    ZCheckbox,
    ZCheckboxgroup,
    ZIcon,
    ZInput,
    ZTextarea,
    ZLoading,
    ZNotify,
    ZProgress,
    ZRadio,
    ZRadiogroup,
    ZRate,
    ZStep,
    ZSteps,
    ZSwitch,
    ZTag,
    ZWatermark,
];

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}
    
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
    
export default {
    install,
    components
}
