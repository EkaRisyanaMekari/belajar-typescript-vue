<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <h1>{{ title }}</h1>
      </div>
    </header>
    <todo-form @add-todo="addTodo" />
    <todo-list :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";

const todos: Ref<string[]> = ref([]);

const title = computed((): string => {
  return `TODO (${todos.value.length}) `;
});

const addTodo = (newTodo: string): void => {
  todos.value.push(newTodo);
};

const deleteTodo = (deletedTodo: string): void => {
  todos.value = todos.value.filter((data) => data !== deletedTodo);
};
</script>

<style scoped></style>
