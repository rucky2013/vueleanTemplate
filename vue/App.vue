<template>
  <div>
    <navbar></navbar>

  </div>

</template>

<script>
import navbar from './common/Nav.vue'
import store from './store/store'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  },
  store,
  components: {
    navbar
  }
}
</script>
