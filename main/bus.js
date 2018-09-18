import Vue from 'vue'

let  __config = {
}

export default ({ app, router, Vue }) => {
  const Bus = new Vue({
    methods: {
      emit (event, ...args) {
        this.$emit(event, ...args)
      },
      on (event, callback) {
        this.$on(event, callback)
      },
      off (event, callback) {
        this.$off(event, callback)
      },
      once (event, callback) {
        this.$once(event, callback)
      }
    },
    data () {
      return {
      }
    }
  })
  Vue.prototype.$bus = Bus
}
