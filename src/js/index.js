
/*Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML */

const abas = document.
    querySelectorAll(".aba");

//Passo 2 - Dar um jeito de identificar o clique no elemento da aba - ok 

abas.forEach(aba => {
   aba.addEventListener("click", function(){
    
    if(aba.classList.contains("selecionado")){
        return;
    }

selecionarAba(aba)
mostrarInformacoesDaAba(aba)
        
   });
});

function selecionarAba(aba) {
    //Passo 3 - quando o usuario clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    //Passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")  
}

function mostrarInformacoesDaAba(aba){
    // Passo 5 - Esconder o conteúdo anterior
    const informacaoSelecioinada = document.querySelector(".informacao.selecionado");
    informacaoSelecioinada.classList.remove("selecionado");

// Passo 6 - mostrar o conteudo na aba selecionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document
    .getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}

