import "../css/componentes.css";
import test from "../assets/imgs/test.png";

export const saludar = (nombre = "usuario anónimo") => {
  console.log("creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre}!!!`;
  document.body.append(h1);

  // console.log(test);
  // const img = document.createElement("img");
  // img.src = test;
  // document.body.append(img);
};
