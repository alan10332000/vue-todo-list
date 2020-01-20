<template>
  <div class="todoInput">
    <input
      v-model.trim="todo"
      v-focus
      type="text"
      placeholder="請輸入待辦事項"
      @keyup.enter="submitHandler"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    submitHandler () {
      if (!this.todo) return
      this.$store.commit('ADD_TODO', {
        content: this.todo,
        complete: false
      })
      this.todo = ''
    }
  }
}
</script>
