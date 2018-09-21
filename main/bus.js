import Vue from 'vue'

let  __config = {
}

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

export default Bus