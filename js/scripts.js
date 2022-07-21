    // First

function changeCol() {
    let mainP = document.getElementById('main').lastElementChild;
    mainP.style.backgroundColor = 'red';
}
changeCol();
function swapElem() {
    let footer = document.getElementById('footer');
    let main = document.getElementById('main');
    const footerInner = footer.innerHTML;
    footer.innerHTML = main.innerHTML;
    main.innerHTML = footerInner;
}
swapElem();

    // Second

let lights = document.getElementById('streetlight').getElementsByTagName('div');
const colorList = ['red', 'yellow', 'green'];
let count = 0;
function changeColor() {
    let countPrev;
    if (count > 0) {
        countPrev = count - 1;
        lights[countPrev].style.backgroundColor = 'black';
    }
    if (count === colorList.length) {
        count = 0;
    }
    lights[count].style.backgroundColor = colorList[count];
    count++;
    setTimeout(changeColor, 3000);
}
changeColor();

    // Third

function tableBuild() {
    array = [[1,2,3],[4,5,6],[7,8,9]];
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    document.body.appendChild(table);
    let row1 = document.createElement('tr');
    let row2 = document.createElement('tr');
    let row3 = document.createElement('tr');
    tbody.append(row1, row2, row3);
    array = array.flat();
    for (let key in array) {
        if (key < 3) {
            let th = document.createElement('th');
            th.innerHTML = `${array[key]}`;
            row1.appendChild(th);
        }
        if (key > 2 && key < 6) {
            let th = document.createElement('th');
            th.innerHTML = `${array[key]}`;
            row2.appendChild(th);
        }
        if (key > 5 && key < 9) {
            let th = document.createElement('th');
            th.innerHTML = `${array[key]}`;
            row3.appendChild(th);
        }
    }
}
tableBuild();