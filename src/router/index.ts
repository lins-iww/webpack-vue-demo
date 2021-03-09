import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => {
  import('@/components/HelloWorld')
}

Vue.use(Router)
function a(d: number): number {
  console.log(d * 2)
  return d * 2
}
a(3)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
