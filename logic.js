function createGrid (){
const container=document.querySelector("#container");
const content=document.createElement('div');
content.classList.add("content");
content.textContent="1";
container.appendChild(content);
}

for (let i=0; i<32; i++){
    createGrid();


}

