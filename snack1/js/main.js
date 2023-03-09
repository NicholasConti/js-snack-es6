"use strict";
const invitati = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];


const listaInvitati = invitati.map((element, index) => {
    return{
        nomeTavolo: 'Tavolo VIP',
        nomeInvitato: element,
        segnaposto: index + 1,
    }
});
console.log(listaInvitati);