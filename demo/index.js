const { reactive } = Vue
let Child = {
  // 属性定义
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  template: `<div>{{title}}</div>`,
  setup(props, context) {
    console.log(props)
    console.log(context)
  }
}
let App = {
  template: `
    <div class="container">
         {{message}}
         <input v-model="name" />
         <p>{{name}}</p>
         <Child title="test props two arguments"/>
    </div>`,
  components: { Child },
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
