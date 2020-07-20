const { reactive } = Vue
var App = {
  template: `
    <div class="container">
         {{message}}
    </div>`,
  setup() {
    const state = reactive({ message: 'Hello World!!!' })
    return {
      ...state
    }
  }
}
Vue.createApp(App).mount('#app')
