import XtxStu from './XtxSku/index.vue'
import ImageView from './ImageView.vue'

export const componentPlugin =  {
  install (app) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxStu', XtxStu)
    app.component('ImageView', ImageView)
  }
}