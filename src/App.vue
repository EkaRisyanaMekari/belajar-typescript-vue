<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const todo: Ref<string> = ref("");
const todos: Ref<string[]> = ref([]);

const addTodo = function (): void {
  todos.value.push(todo.value);
  todo.value = "";
};

const deleteTodo = function (deletedTodo: string): void {
  todos.value = todos.value.filter((data) => data !== deletedTodo);
};
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
