let gridSize=256;

function createGrid (){
const containerDiv=document.querySelector("#containerDiv");
const gridDivs=document.createElement('div');
gridDivs.classList.add("gridDivs");
gridDivs.setAttribute("id","id1")
// content.textContent="1";
containerDiv.appendChild(gridDivs);
}

for (let i=0; i<gridSize; i++){
    createGrid();


}

function itWorked (){
    let currentLocation=document.getElementById('id1');
    currentLocation.classList.add("changedContent");
    // currentLocation.style.backgroundColor = 'rgb(255, 125, 115)';  
    containerDiv.style.backgroundColor = 'rgb(255, 125, 115)';  

    // let currentLocation=document.getElementsByClassName('content');
    console.log(currentLocation);
}

function changeGrid () {
const contentDiV=document.querySelector("gridDivs");
// contentDiV.addEventListener("mouseenter",itWorked);
document.getElementById("containerDiv").addEventListener("mouseenter", itWorked);


}



changeGrid();