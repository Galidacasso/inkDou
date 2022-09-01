import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default async ({
    Vue
}) => {
    Vue.use(BootstrapVue),
    Vue.use(IconsPlugin)
}