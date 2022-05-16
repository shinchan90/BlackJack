const naipes = ["Copas", "Ouros", "Espadas", "Paus"];
const numeros = ["Dois", "Tres", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Valete", "Rainha", "Rei", "Ás" ];

function deck()
{
    let cartas_deck = new Array;
    for (let naipe_valor = 0; naipe_valor < naipes.length; naipe_valor++)
    {
        for (let carta_valor = 0; carta_valor < cartas.length; carta_valor++)
        {
            let carta = {naipe : naipes[naipe_valor], numero : numeros[carta_valor]};
        }
        cartas_deck.push(carta);
    }
    return cartas_deck;
}