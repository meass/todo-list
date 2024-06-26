<script setup>
import { useStore } from '@/store'
import { computed } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

const { todoList, removeCompletedItem } = useStore()

const leftItems = computed(() => {
  return todoList.filter((todo) => !todo.isCompleted).length
})
</script>

<template>
  <ul class="todo-list">
    <todo-item :todoList="todoList" />
    <li>
      <div
        class="container !text-[#5B5E7E] md:text-sm text-xs justify-between !border-b-0 !cursor-auto"
      >
        <p>{{ leftItems }} items left</p>
        <button @click="removeCompletedItem" class="hover:text-[#C8CBE7]">clear completed</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.todo-list {
  @apply max-w-[540px] mx-auto my-8 h-[452px] overflow-scroll md:text-lg  text-xs shadow-xl max-md:px-2;
}
.container {
  @apply bg-[#25273D] p-4 rounded-sm border-b-[0.1px] border-[#979797] text-periwinkle flex items-center cursor-pointer;
}
</style>
