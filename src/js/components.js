import { todoList } from ".."
import { Todo } from "../classes"

// Referencias en HTML
const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('#newTodo')
const btnBorrarCompletados = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro')

export const crearTodoHTML = ( {tarea, completado, id} ) => {

  const html = `
  <li ${completado && 'class="completed"'} data-id=${id}>
    <div class="view">
      <input class="toggle" type="checkbox" ${completado && 'checked'}>
      <label>${tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
	</li>`

  divTodoList.insertAdjacentHTML("beforeend", html)

  return html

}

// Eventos

txtInput.addEventListener('submit', (e) => {

  e.preventDefault()
  if(e.target[0].value.length > 0) {

    const nuevoTodo = new Todo(e.target[0].value)
    todoList.nuevoTodo(nuevoTodo)
    crearTodoHTML(nuevoTodo)
    e.target[0].value = ''

  }
})

divTodoList.addEventListener('click', (e) => {

  const nombreElemento = e.target.localName // input, label, button

  const todoElemento = e.target.parentElement.parentElement
  const todoId = todoElemento.getAttribute('data-id')

  if (nombreElemento.includes('input')) {

    todoList.marcarCompletado(todoId)
    todoElemento.classList.toggle('completed')

  } else if (nombreElemento.includes('button')) {

    todoList.eliminarTodo(todoId)
    divTodoList.removeChild(todoElemento)

  }

})

btnBorrarCompletados.addEventListener('click', () => {

  todoList.eliminarCompletados()
  Array.from(divTodoList.children).forEach(elem => {
    if(elem.classList.contains('completed')) {
      divTodoList.removeChild(elem)
    }
  })
})

ulFiltros.addEventListener('click', (e) => {

  const filtro = e.target.text
  if (!filtro) return

  anchorFiltros.forEach(elem => elem.classList.remove('selected'))
  e.target.classList.add('selected')

  Array.from(divTodoList.children).forEach(elem => {

    elem.classList.remove('hidden')
    const completado = elem.classList.contains('completed')

    switch (filtro) {
      case 'Pendientes':
        if (completado) elem.classList.add('hidden')
        break;

      case 'Completados':
        if (!completado) elem.classList.add('hidden')
        break
    
      default:
        break;
    }

  })

})