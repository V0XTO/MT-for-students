
//*I 
import { data } from "./data.js";


//*Creating Html cards
const a = () => {
  const element = data().map((element) => {
    return `
    <a href="#sec">
<div
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring "
          id="${element.id}"  
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">${element.title}</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            ${element.miniDescription}
          </p>
        </div>

        </a>
`;
  });
  return element.join("");
};

//* render cards components
export const section = () => {
  return `

  
<section class=" w-screen flex justify-center ">
  <div class=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
    <div
      class="grid grid-cols-1 gap-y-8 "
    >
      
    <h3 class=" font-bold  text-4xl">Tecnicas y Metodos de studio</h3>
    
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">

      
     
      ${a()}
        

       </div>
    </div>
  </div>
</section>

    
    `;
};

