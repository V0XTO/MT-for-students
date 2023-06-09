//*import components
import { navigation } from "./nav.js";
import { main } from "./main.js";
import { section } from "./section.js";
import { prueba } from "./absolute.js";

//*creating root
const root = document.getElementById("root");

// * Rentering app
root.innerHTML = `

${navigation()}
${main()}
${section()}

<section id="sec" class="  m-10 sm:m-32 sm:mt-0"></section>
`;

//*Initializing app
prueba();


console.log(
`

⡀⠀⠀⠀⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⢲⠀
⠄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁
⠂⠀⠀⠀⣿⣿⣿⢛⣻⣿⡟⣻⡻⣿⣻⣿⢿⣿⡿⢿⣿⡟⢿⣿⣿⣿⡇⢠⣄⠀⢀⣄⠀⣠⡄⠀⣤⣤⣀⢠⣤⣄⡀⣀⣤⣄⠀⢀⣤⣄⠀⣤⠀⣤⢠⣤⢠⡄⢠⡄⢸⡀
⠁⠀⠀⠀⣿⣿⣿⢨⣭⢺⡇⣿⢣⣿⣷⢯⣿⣿⣻⢯⣿⡇⣯⡻⣿⣿⡇⢸⣿⣷⢿⡧⢴⣟⣿⡀⣿⣤⡿⢿⣧⣾⠿⣿⣁⣹⡟⣿⣉⣹⡟⣿⣀⣿⢸⣿⢿⡿⣾⡇⢸⡃
⠀⠀⠀⠀⣿⣿⣿⣶⣶⣿⣷⣿⣷⣿⣿⣾⣿⣷⣿⣿⣾⣷⣿⣷⣿⣿⡇⠈⠙⠀⠘⠁⠉⠉⠈⠑⠉⠈⠋⠘⠁⠛⠁⠈⠛⠉⠀⠈⠙⢿⠤⠈⠛⠉⠈⠉⠈⠁⠈⠁⢸⡃
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡅
⠀⠀⠀⠀⠷⠤⠤⠴⠲⠖⠶⠶⠶⠲⠤⠦⠤⠤⠤⠴⠴⠲⠖⠶⠶⠶⠤⠦⠴⠖⠶⠲⠖⠶⠲⠶⠶⠶⠶⠶⠖⠶⠲⠖⠶⠲⠖⠶⠲⠶⠶⠶⠶⠲⠖⠶⠲⠦⠦⠤⠼⠇



HEY
`


)

