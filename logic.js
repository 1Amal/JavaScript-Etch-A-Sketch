function createGrid (){
const container=document.querySelector("#container");
const content=document.createElement('div');
content.classList.add("content");
content.textContent="Added a DIV, YAYYYY";
container.appendChild(content);
}


createGrid();

