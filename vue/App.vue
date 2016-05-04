<template>
  <div>
    <navbar></navbar>

  </div>

</template>

<script>
import navbar from './common/Nav.vue'
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
  components: {
    navbar
  }
}
</script>
