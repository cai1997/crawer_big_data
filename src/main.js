import Vue from 'vue'
import App from './App.vue'

import './assets/reset.css'
import './assets/common.less'
import router from './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css/github-markdown.css'
Vue.use(ElementUI)

import showdown from 'showdown'

Vue.prototype.md2html = (md)=> {
    let converter = new showdown.Converter()
    let text = md.toString()
    let html = converter.makeHtml(text)
    return html
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
