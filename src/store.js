import { reactive } from 'vue'
import { ref } from 'vue'

export const store = reactive({
  label: ref(''),
  leftItems: ref(0),
  todoList: [],
  addTodoList(label) {
    if (!label.trim()) return //prevent adding empty todo
    const id = new Date().valueOf()
    this.todoList.push({ id, label, isCompleted: false })
    this.label = ''
    this.saveTodoListToStorage()
  },
  saveTodoListToStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList))
    this.calculateRemainingItems()
  },
  getTodoListFromStorage() {
    this.todoList = JSON.parse(localStorage.getItem('todoList') || '[]')
  },
  toggleTodoListCompletion(todoId) {
    const todoItem = this.todoList.find((todo) => todo.id === todoId)
    if (todoItem) {
      todoItem.isCompleted = !todoItem.isCompleted
      this.saveTodoListToStorage()
      this.calculateRemainingItems()
    }
  },
  removeTodoFromList(todoId) {
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId)
    this.saveTodoListToStorage()
  },
  calculateRemainingItems() {
    this.leftItems = store.todoList.filter((todo) => !todo.isCompleted).length
  },
  removeCompletedItem() {
    if (this.todoList) {
      this.todoList = this.todoList.filter((todo) => !todo.isCompleted)
      this.saveTodoListToStorage()
    }
  }
})
