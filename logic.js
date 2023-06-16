let gridSize=256;

function createGrid (){
const containerDiv=document.querySelector("#containerDiv");
const content=document.createElement('div');
content.classList.add("content");
// content.textContent="1";
containerDiv.appendChild(content);
}

for (let i=0; i<gridSize; i++){
    createGrid();


}

