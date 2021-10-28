// create 4x4 table
var table = document.createElement("table");

// create 4 header cells, Header 1 - Header 4
var tableHeader = document.createElement("thead");
tableHeader.style.border = "solid 1px"

for (var i = 1; i < 5; i++) {
	var tableHeaderCells = document.createElement("th");
	var text = document.createTextNode("Header " + i);
    tableHeaderCells.appendChild(text);
    tableHeader.appendChild(tableHeaderCells);
    tableHeaderCells.style.border = "solid 1px"
    //spacing to help table readability
    tableHeaderCells.style.padding = "2px 7px"
}

table.appendChild(tableHeader);

var tableContent = document.createElement("tcontent");

// table cells below header show cell positions 1,1 - 4,4
var rowValue = 1; 

for (var i = 1; i < 5; i++) {
	var tableRow = document.createElement("tr");
	
	for (var k = 1; k < 5; k++) {
		var tableCell = document.createElement("td");
		var tableText = document.createTextNode(k + "," + i);
		tableCell.appendChild(tableText);
        tableRow.appendChild(tableCell);
		tableRow.children[k - 1].id = rowValue;
        rowValue++; 
        tableCell.style.border = "solid 1px"
        //spacing to help table readability
        tableCell.style.padding = "2px 7px"
	}
	table.appendChild(tableRow);
}

table.appendChild(tableContent);
// removes space between cells 
table.style.borderCollapse = "collapse";
document.body.appendChild(table);

var setSelectTableCell = function(cell) {
    document.getElementById(cell).className = "selected";
    var selectedCell = document.getElementsByClassName("selected")
	selectedCell[0].style.border = "solid 3px";
} 

// when page is loaded upper left, non-header table cell is 'selected'
// denoted by thicker border
document.addEventListener("DOMContentLoaded", function() {
    setSelectTableCell("1");
});

var getSelectedCell = function() {
    var selectedCell = document.getElementsByClassName("selected");
    selectedCell[0].style.border = "solid 1px"; 
	return Number(selectedCell[0].id);
}

var deSelectedTableCell = function(cell) {
    document.getElementById(cell).className = "unselected";
}

var goUp = function() {
    var cell = getSelectedCell();
    // if at top most, nothing happens
    topLeftCell = 1
    topLeftMiddleCell = 2
    topRightMiddleCell = 3
    topRightCell = 4
    if (cell === topLeftCell || cell === topLeftMiddleCell || cell === topRightMiddleCell || cell === topRightCell) {
        setSelectTableCell(cell)
    }else {   
        deSelectedTableCell(cell);
        cell -= 4;
        setSelectTableCell(cell);
	}
}

var goDown = function() {
    var cell = getSelectedCell();
    // if at bottom most, nothing happens
    bottomLeftCell = 13
    bottomLeftMiddleCell = 14
    bottomRightMiddleCell = 15
    bottomRightCell = 16
	if (cell === bottomLeftCell || cell === bottomLeftMiddleCell || cell === bottomRightMiddleCell || cell === bottomRightCell) {
        setSelectTableCell(cell)
	} else {
		deSelectedTableCell(cell);
		cell += 4;
		setSelectTableCell(cell);
	} 
}

var goRight = function() {
    var cell = getSelectedCell();
    // if  at right most, nothing happens
    topRightCell = 4
    secondRowRightCell = 8
    thirdRowRightCell = 12
    bottomRightCell = 16
	if (cell === topRightCell || cell === secondRowRightCell || cell === thirdRowRightCell || cell === bottomRightCell) {
        setSelectTableCell(cell)
	} else {
		deSelectedTableCell(cell);
        cell += 1;
		setSelectTableCell(cell);
	} 
}

var goLeft = function() {
    var cell = getSelectedCell();
    // if at left most, nothing happens
    topLeftCell = 1
    secondRowLeftCell = 5
    thirdRowLeftCell = 9
    bottomLefttCell = 13
	if (cell === topLeftCell || cell === secondRowLeftCell || cell === thirdRowLeftCell || cell === bottomLefttCell) {
        setSelectTableCell(cell)
	} else {
		deSelectedTableCell(cell);
		cell -= 1;
		setSelectTableCell(cell);
	} 
}

var markYellow = function() {
	var highlight = document.getElementsByClassName("selected");
	
	highlight[0].style.backgroundColor = "yellow";
}


// buttons (up, down, left, right, and mark cell)
// buttons clicks change which cell is selected
var upButton = document.createElement("button");
upButton.textContent = "Up";
upButton.id = "upButton";
document.body.appendChild(upButton);
document.getElementById("upButton").addEventListener("click", goUp);

var downButton = document.createElement("button");
downButton.textContent = "Down";
downButton.id = "downButton";
document.body.appendChild(downButton);
document.getElementById("downButton").addEventListener("click", goDown);

var leftButton = document.createElement("button");
leftButton.textContent = "Left";
leftButton.id = "leftButton";
document.body.appendChild(leftButton);
document.getElementById("leftButton").addEventListener("click", goLeft);

var rightButton = document.createElement("button");
rightButton.textContent = "Right";
rightButton.id = "rightButton";
document.body.appendChild(rightButton);
document.getElementById("rightButton").addEventListener("click", goRight);

// Mark Cell button
var markCellButton = document.createElement("button");
markCellButton.textContent = "Mark Cell";
markCellButton.id = "markButton";
document.body.appendChild(markCellButton);
document.getElementById("markButton").addEventListener("click", markYellow);








