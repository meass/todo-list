<script setup>
import { store } from '@/store'
store.calculateRemainingItems()
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in store.todoList" :key="todo.id">
      <div class="container group">
        <button
          class="uncomplete"
          @click="store.toggleTodoListCompletion(todo.id)"
          v-if="!todo.isCompleted"
        ></button>
        <button class="complete" @click="store.toggleTodoListCompletion(todo.id)" v-else>
          <img src="/src/assets/icon-check.svg" alt="icon-check" />
        </button>
        <p :class="['pl-4', { 'line-through text-[#4D5067]': todo.isCompleted }]">
          {{ todo.label }}
        </p>
        <button
          class="ml-auto md:hidden group-hover:block md:w-6 md:h-6 w-3 h-3"
          @click="store.removeTodoFromList(todo.id)"
        >
          <img src="/src/assets/icon-cross.svg" alt="icon-cross" />
        </button>
      </div>
    </li>
    <li>
      <div
        class="container !text-[#5B5E7E] md:text-sm text-xs justify-between !border-b-0 !cursor-auto"
      >
        <p>{{ store.leftItems }} items left</p>
        <button @click="store.removeCompletedItem" class="hover:text-[#C8CBE7]">
          clear completed
        </button>
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
.uncomplete {
  @apply border-[1px] border-gray-400 hover:border-sky-blue md:w-6 md:h-6 w-5 h-5 rounded-full;
}
.complete {
  @apply md:w-6 md:h-6 w-5 h-5 rounded-full bg-gradient-to-r from-sky-blue to-medium-orchid flex justify-center items-center;
}
</style>
