import { createApp } from 'vue'
import App from './App.vue'


import { bootstrap } from "./assets/css/bootstrap.css"
import { style } from "./assets/css/style.css"
import { fontawesome } from "./assets/css/font-awesome.css"
import { animation } from "./assets/css/animate.css"
import { flexslider } from "./assets/css/flex-slider.min.css"
// import {jquery} from "./assets/css/jquery-ui.css"
import { fancybox } from "./assets/css/jquery.fancybox.min.css"
import { popup } from "./assets/css/magnific-popup.css"
import { popupmin } from "./assets/css/magnific-popup.min.css"
import { nice } from "./assets/css/nice-select.css"
import { niceselect } from "./assets/css/niceselect.css"
import { owl } from "./assets/css/owl-carousel.css"
import { reset } from "./assets/css/reset.css"
import { responsive } from "./assets/css/responsive.css"
import { slicknav } from "./assets/css/slicknav.min.css"
import { themify } from "./assets/css/themify-icons.css"
// import {active } from "../src/assets/js/active.js"
// import { easing} from "../src/assets/js/easing"
// import {flex } from "../src/assets/js/flex-slider"
// import {jquery } from "../src/assets/js/jquery-migrate-3.0.0"
// import {magnific} from "../src/assets/js/magnific-popup"
// import {map } from "../src/assets/js/map-script"
// import { nicee} from "../src/assets/js/nicesellect"
// import {owlcro } from "../src/assets/js/owl-carousel"
// import {scroll } from "../src/assets/js/scrollup"


createApp(App).use(popup).use(nice).use(niceselect).use(owl).use(reset).use(responsive).use(slicknav).use(themify).use(popupmin).use(animation).use(flexslider).use(fancybox).use(bootstrap).use(fontawesome).use(style).mount("#app");
