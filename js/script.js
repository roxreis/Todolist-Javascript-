let board = document.getElementById('board');

let buttonAdd = document.getElementById('add');
buttonAdd.onclick = function(){

    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.textContent = "Esse é uma nova tarefa";
    titulo.setAttribute('class','col-md-8');

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class','botaoCheck');
    imgCheck.setAttribute('src','img/botaoCheck.jpg' );

    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);

}