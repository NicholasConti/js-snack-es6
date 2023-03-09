"use strict";
// FUNCTIONS
//funzione che restituisce un numero random compreso tra 0 e max
 const getRandomNumber = (max) =>{
    return Math.floor(Math.random() * max);
 };

//MAIN
const serieA = [
    {
        nome: 'Atalanta',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Bologna',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Cremonese',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Empoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Hellas Verona',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lecce',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Monza',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Salernitana',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Sampdoria',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Spezia',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Torino',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Udinese',
        punti: 0,
        falli: 0
    }
];

// metodo che crea un array con numeri random nei parametri falli e punti
const serieArandom = serieA.map((element) => {
    return{
        nome: element.nome,
        punti: getRandomNumber(115),
        falli: getRandomNumber(700)
    }
});

// metodo che crea un array con parametri solo nomi e falli
const soloNomeFalli = serieArandom.map((element) => {
    const {nome, falli} = element;
    return{
        nome: nome,
        falli: falli
    };
});
console.log(soloNomeFalli);