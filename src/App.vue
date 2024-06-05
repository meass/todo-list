<script setup>
import FormAddTodoList from './components/FormAddTodoList.vue'
import ListTodoItem from './components/ListTodoItem.vue'
</script>

<template>
  <header class="py-16 text-center text-3xl">
    <h1 class="text-white uppercase font-bold tracking-widest">todo</h1>
  </header>
  <form-add-todo-list />
  <list-todo-item />
</template>

<style scoped></style>
