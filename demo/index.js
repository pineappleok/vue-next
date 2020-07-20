const { reactive } = Vue
var App = {
  template: `
    <div class="container">
         {{message}}
         <input v-model="name" />
         <p>{{name}}</p>
    </div>`,
  setup() {
    const state = reactive({
      message: 'Hello World!!!',
      name: ''
    })
    return {
      ...state
    }
  }
}
Vue.createApp(App).mount('#app')
