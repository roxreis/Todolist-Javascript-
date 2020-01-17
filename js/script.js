let board = document.getElementById('board');

let buttonAdd = document.getElementById('add');

let inputAdd = document.getElementById('novaTarefa');
let listaTarefas = [];
// precisa criar if para validar se existe item no local storage, se nao tem, entra no else
if(localStorage.getItem('listaTarefas')){
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
}else{
    // criando array vazia para guardar inf no localstorage
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

let buttonExcluir = document.getElementsByClassName('botaoCheck');




mostrarTela(listaTarefas);

buttonAdd.onclick = function(){

    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);

    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.textContent = valorDigitado;
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
// necessario colocar esta linha de localStorage para atualizar com a nova tarefa
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

}

function mostrarTela(listaTarefas){

        for(let item of listaTarefas){
            gerarTarefa(item);
        }
   

}

function gerarTarefa(valorDigitado){

    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.textContent = valorDigitado;
    titulo.setAttribute('class','col-md-8');

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class','botaoCheck');
    imgCheck.setAttribute('src','img/botaoCheck.jpg' );

                        // essa inf vem do js como global
    imgCheck.onclick = function(event){
        let tarefaPai = event.target.parentNode.parentNode;
        tarefaPai.remove();
    }

    // essa forma é mais facil pq ja existe na funcao
    // tarefa.remove(); 

    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}






