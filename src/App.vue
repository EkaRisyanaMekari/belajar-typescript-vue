<script lang="ts">
import { defineComponent } from "vue";

declare interface BaseComponentData {
  todo: string;
  todos: string[];
  id: string;
}

export default defineComponent({
  data(): BaseComponentData {
    return {
      todo: "",
      todos: [],
      id: "",
    };
  },

  methods: {
    addTodo(): void {
      this.todos.push(this.todo);
      this.todo = 1;
    },
    deleteTodo(todo: string): void {
      this.todos = this.todos.filter((data: string) => data !== todo);
    },
  },
});
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <h1>TODO</h1>

        <form action="" @submit.prevent="addTodo">
          <input v-model="todo" type="text" name="todo" id="todo" />
          <button type="submit">add todo</button>
        </form>

        <div class="todo-list">
          <hr />
          <div class="list-item" v-for="(todo, index) in todos" :key="index">
            <span>{{ todo }}</span>
            <button @click="deleteTodo(todo)">x</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
input {
  margin-right: 8px;
}
hr {
  margin: 10px 0;
}
.todo-list {
  width: 230px;
}
.list-item {
  display: flex;
  margin: 3px 0;
  justify-content: space-between;
}
</style>
