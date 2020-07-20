const { reactive, toRefs, ref, computed, watch } = Vue
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
          .join('')
      ),
      countDouble: computed(() => state.count * 2),
      countTriple: computed(() => state.count * 3),
      countQuadruple: computed(() => state.count * 4)
    })
    const handlerCountAdd = () => {
      state.count++
    }
    const refExample = ref('refExample')
    watch(
      () => [
        state.count,
        state.countDouble,
        state.countTriple,
        state.countQuadruple
      ],
      (val, preVal) => {
        console.log('watch val==', val)
        console.log('watch preVal==', preVal)
      }
    )
    return {
      ...toRefs(state),
      handlerCountAdd,
      refExample
    }
  }
}
Vue.createApp(App).mount('#app')
