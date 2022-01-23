import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/components'

import './styles.css'

const todosPendientes = document.querySelector('.todo-count')


export const todoList = new TodoList()
todoList.todos.forEach(crearTodoHTML)
console.log(todoList.numeroPendientes)
todosPendientes.children[0].innerText = todoList.numeroPendientes() || 0