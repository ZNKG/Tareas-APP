export class Todo {
  static _id;

  static fromJson({id, tarea, completado, creado}){
    const tempTodo = new Todo(tarea);
    tempTodo.id = id *1;
    tempTodo.completado = completado;
    tempTodo.creado = creado
    return tempTodo;
  }

  constructor(tarea) {
    this.getCurrentID();
    this.tarea = tarea;
    //this.id = new Date().getTime(); // hora minuto segundo
    this.id = Todo._id;
    this.completado = false;
    this.creado = new Date();
    Todo._id++;
    this.recordID();
  }

  recordID() {
    localStorage.setItem("current-id", Todo._id);
  }

  getCurrentID() {
    Todo._id = localStorage.getItem("current-id")
      ? localStorage.getItem("current-id") * 1
      : 1;
  }
}
