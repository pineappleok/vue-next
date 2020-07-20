const { reactive, toRefs, ref, computed } = Vue
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
         <h4>计数器 demo</h4>
         count: {{count}}
         <button @click="handlerCountAdd"> Click ++ </button>
         <h4>ref使用:{{refExample}}</h4>  
         <h4>反转字符串demo</h4>
         <p>{{name}}反转后为：{{rName}}</p>       
    </div>`,
  components: { Child },
  setup() {
    const state = reactive({
      message: 'Hello World!!!',
      name: '',
      count: 0,
      rName: computed(() =>
        state.name
          .split('')
          .reverse()
          .join()
      )
    })
    const handlerCountAdd = () => {
      state.count++
    }
    const refExample = ref('refExample')
    return {
      ...toRefs(state),
      handlerCountAdd,
      refExample
    }
  }
}
Vue.createApp(App).mount('#app')
