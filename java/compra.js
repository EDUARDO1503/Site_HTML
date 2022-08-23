//Criar as funções para manipular o carrinho (adicionar, remover, confirmar)
window.onload = function carrinho(){
    var carrinho = document.getElementById('carrinho');
    exibirCarrinho(carrinho);
}

function addCarrinho(nome, preco, quantidade, posicao){ 
    localStorage.setItem("nome"+posicao, nome); 
    localStorage.setItem("preco"+posicao, preco);
    localStorage.setItem("quantidade"+posicao, quantidade);
    console.log(nome);
}

function exibirCarrinho(carrinho){
    for(var i=1; i<=100; i++){
        if(localStorage.getItem('nome'+i) != null) {
            carrinho.innerHTML += localStorage.getItem('nome'+i)+ 
                         "<hr>" + localStorage.getItem('preco'+i) + "<hr>" +
                         "<input type='button' value='EXCLUIR' onclick='excluirItem("+ i +")' >" + "<hr>";
        }
    } 
}

function excluirItem(posicao){ 
    localStorage.removeItem("nome" + posicao); 
    localStorage.removeItem("preco" + posicao);
    localStorage.removeItem("quantidade"+ posicao);
    document.location.reload(true);
}