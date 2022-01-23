import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/components'

import './styles.css'

export const todoList = new TodoList()
todoList.todos.forEach(crearTodoHTML)