<template>
  <div class="todo-list">
    <hr />
    <div class="list-item" v-for="(todo, index) in props.todos" :key="index">
      <span>{{ todo }}</span>
      <button @click="handleDelete(todo)">x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  todos: string[];
}>();
const emit = defineEmits(["delete-todo"]);
const handleDelete = (todo: string): void => {
  emit("delete-todo", todo);
};
</script>

<style scoped>
.todo-list {
  width: 230px;
}
hr {
  margin: 10px 0;
}
.list-item {
  display: flex;
  margin: 3px 0;
  justify-content: space-between;
}
</style>
