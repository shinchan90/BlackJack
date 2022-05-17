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
let dealer_win = false;
let player_win = false;
let game_over = false;
let start = false;

let start_game = document.getElementById("jogar");
function deck()
{
    let cartas_deck = [];
    for (let i = 0; i < naipes.length; i++)
    {
        
        for (let x = 0; x < cartas.length; x++)
        {
            
            let carta = {naipe : naipes[naipe_valor], numero : numeros[carta_valor]};
        }
        cartas_deck.push(carta);
    }
    return cartas_deck;
}

function randomize_deck(cartas_deck)
{
    for(let i = 0; i< cartas_deck.length; i++)
    {
        let shuffle = Math.trunc(Math.random()* cartas_deck,length);
        let tmp = cartas_deck[shuffle];
        cartas_deck[shuffle] = cartas_deck[i];
        cartas_deck[i] = tmp;
    }
}

function string_cartas(carta)
{
    return carta.numero + " de " + carta.naipe;
}

function valores_cartas(carta)
{
    switch(carta.numero)
    {
        case "Dois":
            valor = 2;
        case "Tres":
            valor = 3;
        case "Quatro":
            valor = 4;
        case "Cinco":
            valor = 5;
        case "Seis":
            valor = 6;
        case "Sete":
            valor = 7;
        case "Oito":
            valor = 8;
        case "Nove":
            valor = 9;
        case "Ás":
            valor = 11;
        default:
            valor = 10;
    }
}

function pontuacao(lista_cartas)
{
    for(let i = 0; lista_cartas.length; i++)
    {
        score += valores_cartas(lista_cartas[i])
    }

    return score;
}


function mostrar()
{
    
    for(let i = 0; cartas_dealer.length; i++)
    {
        string_dealer += string_cartas(cartas_dealer[i]);
    }

    for (let i=0; cartas_player.length; i++)
    {
        string_player += string_cartas(cartas_player[i]);
    }

    score_dealer = pontuacao(cartas_dealer);
    score_player = pontuacao(cartas_player);

    "O dealer tem: "+ cartas_dealer +"\n";
    "Pontuação: " + score_dealer +"\n\n\n";
    "Voce tem: "+ cartas_player +"\n";
    "Pontuação: " + score_player;
}

start_game.addEventListener("click", function()
{
    start = true;
    dealer_win = false;
    player_win = false;
    criar_deck = deck();
    randomize_deck(criar_deck);
    cartas_dealer = [criar_deck.shift, criar_deck.shift];
    cartas_player = [criar_deck.shift, criar_deck.shift];
    
    mostrar();

})

function termino_jogo()
{
    score_dealer = pontuacao(cartas_dealer);
    score_player = pontuacao(cartas_player);
    if((score_dealer <= 21 && score_dealer> score_player) || (score_dealer > 21 && score_dealer< score_player))
    {
        dealer_win = true;
    }

    else if((score_player <= 21 && score_player > score_dealer) || (score_player > 21 && score_player < score_dealer))
    {
        player_win = true;
    }

    
}