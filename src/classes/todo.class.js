export class Todo {

  static fromJson( { tarea, id, creado, completado } ) {

    const tempTodo = new Todo(tarea)
    
    tempTodo.id = id
    tempTodo.creado = creado
    tempTodo.completado = completado

    return tempTodo
  }

  constructor( tarea ) {

    this.tarea = tarea
    
    this.id = new Date().getTime().toString()
    this.completado = false
    this.creado = new Date()

  }



}