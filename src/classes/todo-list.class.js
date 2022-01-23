import { Todo } from "./"

export class TodoList {

  constructor() {

    this.cargarLocalStorage()

  }

  nuevoTodo(todo) {
    this.todos.push(todo)
    this.guardarLocalStorage()
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.guardarLocalStorage()
  }

  marcarCompletado(id) {
    let todo = this.todos.find(todo => todo.id === id)
    todo.completado = !todo.completado
    this.guardarLocalStorage()
  }

  eliminarCompletados() {
    this.todos = this.todos.filter(todo => !todo.completado)
    this.guardarLocalStorage()
  }

  guardarLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  numeroPendientes() {
    const array = this.todos.filter(todo => !todo.completado)
    return array.length
  }

  cargarLocalStorage() {

    this.todos = JSON.parse(localStorage.getItem('todos')) || []

    this.todos = this.todos.map(Todo.fromJson)

  }

}