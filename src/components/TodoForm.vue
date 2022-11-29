<template>
  <form @submit.prevent="handleAddTodo">
    <input v-model="todo" type="text" name="todo" id="todo" />
    <button type="submit">add todo</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";

const todo: Ref<string> = ref("");
const isInvalid: Ref<boolean> = ref(false);

watch(isInvalid, (val: boolean): void => {
  if (val) {
    console.log("invalid input");
  }
});

const emit = defineEmits(["add-todo"]);

const handleAddTodo = (): undefined | void => {
  if (!todo.value) {
    isInvalid.value = true;
    return;
  }
  isInvalid.value = false;
  emit("add-todo", todo.value);
  todo.value = "";
};
</script>

<style scoped>
input {
  margin-right: 8px;
}
</style>
