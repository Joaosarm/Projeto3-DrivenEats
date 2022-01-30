let PrecoPratoFinal = null;
let PrecoBebidaFinal = null;
let PrecoSobremesaFinal = null;
let PratoFinal= null;
let BebidaFinal= null;
let SobremesaFinal= null;
let TotalFinal= null;


//Calcula valor total do pedido
function CalcularTotal(){
    const Total=document.querySelector(".total-preco");
    if (PrecoPratoFinal !== null && PrecoBebidaFinal !== null && PrecoSobremesaFinal !== null) {
    let ValorTotal= (parseFloat(PrecoPratoFinal)+parseFloat(PrecoBebidaFinal)+parseFloat(PrecoSobremesaFinal));
    let numero=ValorTotal.toFixed(2).toString().replace('.', ',');
    Total.innerHTML=`R$ ${numero}`;
    TotalFinal=numero;
    }
}


// Torna o Botão Verde
function BotaoVerde() {
    if (PrecoPratoFinal !== null && PrecoBebidaFinal !== null && PrecoSobremesaFinal !== null) {
        const botao = document.querySelector(".barra-inferior button");
        botao.style.backgroundColor = '#32B72F';
        botao.innerHTML = '<p>Fechar Pedido</p>';
    }
}


//Mostra tela de confirmação ao apertar o botão
function Confirmar(){
    if (PrecoPratoFinal !== 0 && PrecoBebidaFinal !== 0 && PrecoSobremesaFinal !== null) {
        const fundo = document.querySelector(".background-confirmacao");
        fundo.classList.remove('escondido');
        CalcularTotal();
    }
}

function Cancelar(){
    const botao = document.querySelector(".confirmacao");
    botao.classList.add('escondido');
    const fundo = document.querySelector(".background-confirmacao");
    fundo.classList.add('escondido');
}

// Função para selecionar o prato
function selecionarPrato(PratoSelecionado, nomeConfirmacao, precoConfirmacao) {
    const selecionado = document.querySelector(".pratos .selecionado");

    if (selecionado !== null) {
        // remover caso haja um ja selecionado
        selecionado.classList.remove("selecionado");
    }

    const prato = document.querySelector(".prato-pedido");
    prato.innerHTML = nomeConfirmacao;

    const preco = document.querySelector(".prato-preco");
    preco.innerHTML = precoConfirmacao.toString().replace('.', ',');

    PrecoPratoFinal = precoConfirmacao;
    PratoFinal = nomeConfirmacao;
    
    // adicionar a seleçao ao atual
    const botao = document.querySelector(PratoSelecionado);

    botao.classList.add("selecionado");
    

    BotaoVerde();
}






// Função para selecionar a bebida
function selecionarBebida(BebidaSelecionada, nomeConfirmacao, precoConfirmacao) {
    const selecionado = document.querySelector(".bebidas .selecionado");

    if (selecionado !== null) {
        // remover caso haja um ja selecionado
        selecionado.classList.remove("selecionado");
    }

    const bebida = document.querySelector(".bebida-pedido");
    bebida.innerHTML = nomeConfirmacao;

    const preco = document.querySelector(".bebida-preco");
    preco.innerHTML = precoConfirmacao.toString().replace('.', ',');

    PrecoBebidaFinal = precoConfirmacao;
    BebidaFinal = nomeConfirmacao;

    // adicionar a seleçao ao atual
    const botao = document.querySelector(BebidaSelecionada);
    botao.classList.add("selecionado");

    BotaoVerde();
}




// Função para selecionar a sobremesa
function selecionarSobremesa(SobremesaSelecionada, nomeConfirmacao, precoConfirmacao) {
    const selecionado = document.querySelector(".sobremesas .selecionado");

    if (selecionado !== null) {
        // remover caso haja um ja selecionado
        selecionado.classList.remove("selecionado");
    }

    const prato = document.querySelector(".sobremesa-pedido");
    prato.innerHTML = nomeConfirmacao;

    const preco = document.querySelector(".sobremesa-preco");
    preco.innerHTML = precoConfirmacao.toString().replace('.', ',');

    PrecoSobremesaFinal = precoConfirmacao;
    SobremesaFinal = nomeConfirmacao;

    // adicionar a seleçao ao atual
    const botao = document.querySelector(SobremesaSelecionada);
    botao.classList.add("selecionado");

    BotaoVerde();
}


//Ao apertar o botão de confirmar o pedido
function finalizarPedido(){
    if (PrecoPratoFinal !== null && PrecoBebidaFinal !== null && PrecoSobremesaFinal !== null){
        
        let nome = prompt('Qual seu nome?');
        let endereco = prompt('Qual seu endereço?');
        if(nome!==null&&endereco!==null&&nome!==''&&endereco!==''){
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${PratoFinal}\n- Bebida: ${BebidaFinal}\n- Sobremesa: ${SobremesaFinal}\nTotal: R$ ${TotalFinal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5584987059447?text=${encodeURIComponent(mensagem)}`);
        }else{
            alert('Você não digitou alguma informaçao!!')
        }
    }
}