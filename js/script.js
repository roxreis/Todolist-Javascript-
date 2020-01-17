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


mostrarTela(listaTarefas);

buttonAdd.onclick = function(){

    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);

   gerarTarefa(valorDigitado, listaTarefas.length -1);
// necessario colocar esta linha de localStorage para atualizar com a nova tarefa
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));

}

function mostrarTela(listaTarefas){

        // for(let item of listaTarefas){
        //     gerarTarefa(item);
        // }

        // board.innerHTML = "" é para limpar a board antes de renderizar
        board.innerHTML = ""
        listaTarefas.forEach(function (valor,posicao) {
            gerarTarefa(valor,posicao)
            
        });

}

function gerarTarefa(valorDigitado, posicao){

    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');
    tarefa.setAttribute('posicao',posicao);

    let titulo = document.createElement('div');
    titulo.textContent = valorDigitado;
    titulo.setAttribute('class','col-md-8');

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class','botaoCheck');
    imgCheck.setAttribute('src','img/botaoCheck.jpg' );

                        // essa inf vem do js como global
    imgCheck.onclick = function(){
    //     let tarefaPai = event.target.parentNode.parentNode;
    //     tarefaPai.remove();
    // console.log(listaTarefas);
    let posicaoTarefa = tarefa.getAttribute('posicao');
    // filter filtra e retorna so o que é diferente do que nos pedimos
    listaTarefas = listaTarefas.filter(function(valor,posicao){
        return posicao != posicaoTarefa 
    });

    mostrarTela(listaTarefas);
    // console.log(listaTarefas);

    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
    
    // tarefa.remove é para remover a tarefa quando clicar no botao
    tarefa.remove(); 

    }

    
    
    

    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}






