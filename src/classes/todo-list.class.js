import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    // comparar !== es con tipo y valor, a diferencia de != que es solo valor
    this.todos = this.todos.filter((todo) => todo.id != id); // rellena con los que son distintos al id
    this.guardarLocalStorage();
  }

  toggleTodo(id) {
    //   const numberID = id * 1; p// por si quisiera usar en num
    for (const todo of this.todos) {
      if (todo.id == id) {
        // console.log(id, " --- ", todo.id);
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
    // convierto el objeto a un json
  }

  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    // console.log("antes ", this.todos);

    this.todos = this.todos.map(obj => Todo.fromJson(obj));
    // console.log("despues ", newTodos);
  }
}
