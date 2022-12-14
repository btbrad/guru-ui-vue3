import { App } from 'vue'
import MyButton from './button/index'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button/JSXButton'

// 导出单独组件
export { MyButton, SFCButton, JSXButton }

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  },
}
