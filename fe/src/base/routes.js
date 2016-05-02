import Root from '../views/root.vue'
import Test1 from '../views/test1.vue'
import Test2 from '../views/test2.vue'

export default function(router) {
  router.map({
    '/': {
      component: Root
    },
    '/test1': {
      component: Test1
    },
    '/test2': {
      component:Test2
    }
  })
}
