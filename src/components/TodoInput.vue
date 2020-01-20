<template>
  <div class="todoInput">
    <input
      type="text"
      placeholder="請輸入待辦事項"
      v-model.trim="todo"
      @keyup.enter="submitHandler"
      v-focus
    />
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
