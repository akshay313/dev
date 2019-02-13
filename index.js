/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
var c=1;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
    var bb=document.getElementsByClassName("box");
    for (var idxx = 0; idxx < (bb.length); idxx++) {
    
    if((bb[0].innerHTML)===(bb[1].innerHTML)&&(bb[1].innerHTML)===(bb[2].innerHTML)&&(bb[0].innerHTML!= ""))
    {

        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[3].innerHTML)===(bb[4].innerHTML)&&(bb[4].innerHTML)===(bb[5].innerHTML)&&(bb[3].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[6].innerHTML)===(bb[7].innerHTML)&&(bb[7].innerHTML)===(bb[8].innerHTML)&&(bb[6].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[0].innerHTML)===(bb[3].innerHTML)&&(bb[3].innerHTML)===(bb[6].innerHTML)&&(bb[3].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[1].innerHTML)===(bb[4].innerHTML)&&(bb[4].innerHTML)===(bb[7].innerHTML)&&(bb[7].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[2].innerHTML)===(bb[5].innerHTML)&&(bb[5].innerHTML)===(bb[8].innerHTML)&&(bb[5].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[0].innerHTML)===(bb[4].innerHTML)&&(bb[4].innerHTML)===(bb[8].innerHTML)&&(bb[4].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }
    if((bb[2].innerHTML)===(bb[4].innerHTML)&&(bb[4].innerHTML)===(bb[6].innerHTML)&&(bb[4].innerHTML!= ""))
    {
        alert("You Win");
        document.location.reload()
        break;
    }

}
//      for (var idxx = 0; idxx < (bb.length-8); idxx++) {
//         if(bb[idxx].innerHTML!= ""){
//         if(((bb[idxx].innerHTML) ===(bb[idxx+1].innerHTML))&&((bb[idxx+1].innerHTML) ===(bb[idxx+2].innerHTML)))
// alert("test");
// if(((bb[idxx].innerHTML) ===(bb[idxx+3].innerHTML))&&((bb[idxx+3].innerHTML) ===(bb[idxx+6].innerHTML)))
// alert("test");
// if(((bb[idxx].innerHTML) ===(bb[idxx+4].innerHTML))&&((bb[idxx+4].innerHTML) ===(bb[idxx+8].innerHTML)))
// alert("test");

//         }
//     }
//        for (var idxxx = bb.length-1; idxxx >7; idxxx--) {
//         if(bb[idxxx].innerHTML!= ""){
//         if(((bb[idxxx].innerHTML) ===(bb[idxxx-1].innerHTML))&&((bb[idxxx-1].innerHTML) ===(bb[idxxx-2].innerHTML)))
// alert("test");
// if(((bb[idxxx].innerHTML) ===(bb[idxxx-3].innerHTML))&&((bb[idxxx-3].innerHTML) ===(bb[idxxx-6].innerHTML)))
// alert("test");
// if(((bb[idxxx].innerHTML) ===(bb[idxxx-4].innerHTML))&&((bb[idxxx-4].innerHTML) ===(bb[idxxx-8].innerHTML)))
// alert("test");
//         }
//     }
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    if((c%2)==0)
    {
        newValue = 2;
       c++;
    }
    else{
     newValue = 1;
    c++;
}
    grid[colIdx][rowIdx] = newValue;
    renderMainGrid();
    addClickHandlers();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        if((boxes[idx].innerHTML) ==="")
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
