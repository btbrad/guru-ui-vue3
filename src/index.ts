import { createApp } from 'vue/dist/vue.esm-browser.js'
import GuruUI from './entry'

// import SFCButton from './button/SFCButton.vue'

// const app = createApp(SFCButton)
// app.mount('#app')

createApp({
  template: `
      <div>
        <SButton color="blue">蓝色按钮</SButton>
        <SButton color="blue" round plain icon="search" ></SButton>
        <SButton color="green" icon="edit" size="large"></SButton>
        <SButton color="gray">灰色按钮</SButton>
        <SButton color="yellow">黄色按钮</SButton>
        <SButton color="red">红色按钮</SButton>
      </div>
  `,
})
  .use(GuruUI)
  .mount('#app')
