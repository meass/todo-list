<script setup>
import { useStore } from '@/store'
import { ref } from 'vue'

const label = ref('')
const { addTodoList } = useStore()

function submit() {
  addTodoList(label.value)
  label.value = ''
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="input-container">
      <input type="text" placeholder="Create a new todo..." v-model="label" />
      <input type="submit" value="add task" />
    </div>
  </form>
</template>

<style scoped>
form {
  @apply max-w-[540px] max-md:px-2 shadow-xl mx-auto md:text-lg text-xs;
}
.input-container {
  @apply bg-yankees-blue p-4 rounded-md text-periwinkle flex;
}

.input-container input:first-child {
  @apply w-full bg-yankees-blue outline-none;
}

.input-container input:last-child {
  @apply uppercase text-dark-charcoal rounded-sm cursor-pointer px-2 bg-gradient-to-r from-sky-blue to-medium-orchid;
}
</style>
