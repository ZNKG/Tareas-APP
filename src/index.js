import "./styles.css";

import { Todo, TodoList } from "./classes"; // al dejar sola la carpeta busca el index.js
import { crearTodoHtml } from "./js/componentes";

const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  crearTodoHtml(todo);
});

console.log(todoList.todos)

// como es un argumento sin if, se puede hacer así:
// todoList.todos.forEach(crearTodoHtml);


// const tarea = new Todo("Aprender JavaScript");
// const tarea2 = new Todo("Aprender Node js");

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);

// tarea.completado = true;

// console.log(todoList);

// crearTodoHtml(tarea);

//localStorage.setItem("mi-key","ABC123") // necesita llave y valor de tipo string

// setTimeout( ()=>{
//     localStorage.removeItem("mi-key")
// },2500)

export { todoList };
