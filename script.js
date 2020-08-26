function resizeGrid(){
    let newSize = window.prompt('New row and column size');
    newSize = parseInt(newSize);

    const container = document.querySelector(".container");

    container.style.cssText = 
    `grid-template: repeat(${newSize}, ${(480/newSize)}px) / repeat(${newSize}, ${(480/newSize)}px) `;

    for(let i = 0; i < (newSize*newSize); i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach( (div) =>{
        div.addEventListener('mouseenter', () => {
            div.classList.add("blacken");
        });
    } );
}







function InitGrid(){
    const container = document.querySelector(".container");
    
    for(let i = 0; i < 256; i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        
        container.appendChild(div);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach( (div) =>{
        div.addEventListener('mouseenter', () => {
            div.classList.add("blacken");
        });
    } );
}

function InitButtons(){

    const reset = document.querySelector(".reset");

    reset.addEventListener('click', () => {
        const container = document.querySelector(".container");
        
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
        
        resizeGrid();
    });

}



InitGrid();
InitButtons();