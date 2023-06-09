//*Import Data
import { data } from "./data.js";

//*Creating component
const absoluteElement = (title, miniDes, aplicacion,emoji) => {



  return `<div class="rounded-lg bg-white shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full  sm:w-auto " >
    <h3 class="font-bold  text-2xl">${title}${emoji}</h3>
<br>
    <b>¿En que consiste?</b>
    <p>${miniDes}</p>

    <br>

    <b >Como Aplicarlo 💡</b>
    

    <div class="mt-6">${aplicacion}</div>

  </div>
  
  
  
  `;
};
//*Export new component
export const prueba = () => {
  data().forEach((element) => {
    document.getElementById(`${element.id}`).addEventListener("click", (e) => {
      let div = document.createElement("div");
      div.setAttribute("id", "info");

      div.innerHTML = document.getElementById("sec").innerHTML =
        absoluteElement(element.title, element.description, element.aplicacion , element.emoju);
    });
  });
};
