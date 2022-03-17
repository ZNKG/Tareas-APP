import { Todo } from "../classes";
import { todoList } from "../index";

// Referencia en el html
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const clearCompleted = document.querySelector(".clear-completed");
const ulFiltors = document.querySelector(".filters");
const anchorFiltros = document.querySelectorAll(".filtro");

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
  <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
			<div class="view">
					<input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
					<label>${todo.tarea}</label>
					<button class="destroy"></button>
			</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> 
  `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  //inserta el primer hijo del div osea el li de antes
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Eventos

txtInput.addEventListener("keyup", (event) => {
  //keyup es cuando el usuario suelta la tecla
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // si el valor de la tecla presionada es 13 osea enter
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName; //input, label o button
  const todoElement = event.target.parentElement.parentElement; //padre del padre
  const todoID = todoElement.getAttribute("data-id"); // obtiene el id del elemto html

  if (nombreElemento.includes("input")) {
    //click en el check
    todoList.toggleTodo(todoID);
    todoElement.classList.toggle("completed"); //  cambia la clase a completed o nada
  } else if (nombreElemento.includes("button")) {
    todoList.eliminarTodo(todoID);
    divTodoList.removeChild(todoElement); // elimina el hijo señalado
  }
});

clearCompleted.addEventListener("click", () => {
  todoList.eliminarCompletados();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    //desde el fin al inicio
    const elemento = divTodoList.children[i];
    if (elemento.classList.contains("completed")) {
      // ver si contiene la clase solicitada
      divTodoList.removeChild(elemento);
    }
  }
});

ulFiltors.addEventListener("click", (event) => {
  const filtro = event.target.text;
  if (!filtro) {
    return;
  }

  anchorFiltros.forEach((elem) => elem.classList.remove("selected"));
  event.target.classList.add("selected")

  for (const elemento of divTodoList.children) {
    elemento.classList.remove("hidden");
    const completado = elemento.classList.contains("completed");

    switch (filtro) {
      case "Pendientes":
        if (completado) {
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});
