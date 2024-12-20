import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

export function mount(props) {
    const { el, definedStore } = props;
    const app = createApp(App)
    app.provide('definedStore', definedStore)
    app.mount(el)
}
