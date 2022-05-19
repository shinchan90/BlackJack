const naipes = ["Copas", "Ouros", "Espadas", "Paus"];
const numeros = ["Dois", "Tres", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Valete", "Rainha", "Rei", "Ás" ];
var valor = 0;
let score = 0;
let score_dealer = 0;
let score_player = 0;
let criar_deck = [];
let cartas_dealer =[];
let cartas_player =[];
let cartas_deck = [];
let string_dealer = "";
let string_player = "";
let empate = false;
let dealer_win = false;
let player_win = false;
let game_over = false;
let start = false;

let id_jogo = document.getElementById("jogar");
let id_hit = document.getElementById("hit");
let id_stay = document.getElementById("stay");

function deck()
{
    let cartas_deck = [];
    for (let i = 0; i < naipes.length; i++)
    {
        
        for (let x = 0; x < numeros.length; x++)
        {
            
            var carta = {naipe : naipes[i], numero : numeros[x]};
            cartas_deck.push(carta);
        }
        
        
    }
    
    return cartas_deck;
    
}

function randomize_deck(cartas_deck)
{
    for(let i = 0; i < cartas_deck.length; i++)
    {
        let shuffle = Math.trunc(Math.random() * cartas_deck.length);
        let tmp = cartas_deck[shuffle];
        cartas_deck[shuffle] = cartas_deck[i];
        cartas_deck[i] = tmp;
    }
}

function string_cartas(carta)
{
    
    return " \n"+ carta.numero + " de " + carta.naipe;
    
}

function valores_cartas(carta)
{
    switch(carta.numero)
    {
        case "Dois":
            return 2;
        case "Tres":
            return 3;
        case "Quatro":
            return 4;
        case "Cinco":
            return 5;
        case "Seis":
            return 6;
        case "Sete":
            return 7;
        case "Oito":
            return 8;
        case "Nove":
            return 9;
        case "Ás":
            return 1;
        default:
            return 10;
    }
}

function pontuacao(lista_cartas)
{
    let score = 0;
    
    for(let i = 0; i < lista_cartas.length; i++)
    {
        score += valores_cartas(lista_cartas[i]);
    }
    return score;
}

function clear()
{
     string_dealer = "";
     string_player = "";
}

function mostrar()
{
    clear();
    clear();
    for(let i = 0; i < cartas_dealer.length; i++)
    {
        string_dealer += string_cartas(cartas_dealer[i]);
    }
   

    for (let i=0; i < cartas_player.length; i++)
    {
        string_player += string_cartas(cartas_player[i]);
    }

    score_dealer = pontuacao(cartas_dealer);
    score_player = pontuacao(cartas_player);
    dealer_status.innerText = " "+ string_dealer +"\n";
    sc_dealer.innerText = "" + score_dealer;
    player_status.innerText = " "+ string_player +"\n";
    sc_player.innerText = " " + score_player;
    
}

function start_game()
{
    
    start = true;
    dealer_win = false;
    player_win = false;
    criar_deck = deck();
    randomize_deck(criar_deck);
    cartas_dealer = [criar_deck.shift(), criar_deck.shift()];
    cartas_player = [criar_deck.shift(), criar_deck.shift()];
    console.log(cartas_dealer);
    console.log(cartas_player);
    mostrar();
    jogar.style.display = "none";
    regras.style.display = "none";
    lista_regras.style.display = "none";
    botao_hit.style.display = "inline";
    botao_stay.style.display = "inline";
    inicio_jogo.style.display = "inline";
    dealer.style.display = "inline";
    player.style.display = "inline";
    sc.style.display = "inline";
    sc2.style.display = "inline";
    
    
    

}

function hit_dealer()
{
    if(score_dealer<score_player && score_dealer<21)
    {
        cartas_dealer.push(criar_deck.shift());

    }

}
function hit()
{
    hit_dealer();
    cartas_player.push(criar_deck.shift());
    mostrar();
        
    if(score_dealer>21 || score_player>21)
    {
            termino_jogo();
    }
    console.log(cartas_dealer);
    console.log(cartas_player);
}

function stay()
    {
        hit_dealer();
        if(score_dealer>21 || score_player>21)
        {
            termino_jogo();
        }
        termino_jogo();
        mostrar();
    }

function termino_jogo()
{
    score_dealer = pontuacao(cartas_dealer);
    score_player = pontuacao(cartas_player);
    if((score_dealer <= 21 && score_dealer> score_player) || (score_dealer > 21 && score_dealer< score_player) || score_player>21)
    {
        win.innerText = "Vitória do Dealer";
        botao_hit.style.display = "none";
        botao_stay.style.display = "none";
    }

    else if((score_player <= 21 && score_player > score_dealer) || (score_player > 21 && score_player < score_dealer) || score_dealer>21)
    {
        win.innerText = "Vitória do Player";
        botao_hit.style.display = "none";
        botao_stay.style.display = "none";
    }

    else if(score_player == score_dealer)
    {
        win.innerText = "Empate";
        botao_hit.style.display = "none";
        botao_stay.style.display = "none";
    }

    
}