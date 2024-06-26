import { reactive, onMounted, provide, inject } from 'vue'

const todoList = reactive([])

const loadTodoListFromStorage = () => {
  const storedTodoList = JSON.parse(localStorage.getItem('todoList') || '[]')
  todoList.splice(0, todoList.length, ...storedTodoList) // Clear and replace
}

const saveTodoListToStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

const addTodoList = (label) => {
  if (!label.trim()) return
  const id = new Date().valueOf()
  const todoItem = { id, label, isCompleted: false }
  todoList.push(todoItem)
  saveTodoListToStorage()
}

const toggleTodoListCompletion = (todoId) => {
  const todoItem = todoList.find((todo) => todo.id === todoId)
  if (todoItem) {
    todoItem.isCompleted = !todoItem.isCompleted
    saveTodoListToStorage()
  }
}

const removeTodoFromList = (todoId) => {
  const index = todoList.findIndex((todo) => todo.id === todoId)
  if (index !== -1) {
    todoList.splice(index, 1)
    saveTodoListToStorage()
  }
}

const removeCompletedItem = () => {
  todoList.splice(0, todoList.length, ...todoList.filter((todo) => !todo.isCompleted)) // Filter and replace
  saveTodoListToStorage()
}

export const provideStore = () => {
  provide('store', {
    todoList,
    removeCompletedItem,
    removeTodoFromList,
    addTodoList,
    toggleTodoListCompletion
  })
}

export const useStore = () => {
  const store = inject('store')

  onMounted(() => {
    loadTodoListFromStorage()
  })

  if (!store) {
    throw new Error('useStore must be used within a component wrapped with provideStore.')
  }

  return store
}
