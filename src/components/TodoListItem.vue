<template>
  <div class="todoListItem">
    <input
      type="text"
      class="edit"
      v-if="edit !== null"
      v-model.trim="edit"
      v-focus
      @keyup.enter="submitHandler"
      @keyup.esc="cancelHandler"
      @blur="cancelHandler"
    >
    <template v-else>
      <input
        type="checkbox"
        class="toggle"
        v-model="complete"
      >
      <label @dblclick="editHandler">
        {{ todo.content }}
      </label>
      <button
        class="destroy"
        @click="destroyHandler"
      >
      </button>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      edit: null
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    todo () {
      return this.$store.state.todos[this.index]
    },
    complete: {
      get () {
        return this.todo.complete
      },
      set (val) {
        this.$store.commit('UPDATE_TODO', {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val
          }
        })
      }
    }
  },
  methods: {
    editHandler () {
      this.edit = this.todo.content
      // this.cache = this.todo.content
    },
    destroyHandler () {
      if (confirm(`確認是否刪除 ${this.todo.content} ?`)) {
        this.$store.commit('REMOVE_TODO', this.index)
      }
    },
    submitHandler () {
      if (!this.edit) {
        this.destroyHandler()
      }
      this.$store.commit('UPDATE_TODO', {
        index: this.index,
        data: {
          content: this.edit,
          complete: this.todo.complete
        }
      })
      this.cancelHandler()
    },
    cancelHandler () {
      this.edit = null
    }
  }
}
</script>
