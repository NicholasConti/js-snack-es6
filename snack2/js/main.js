"use strict";

const studenti = [
    {
        id: 213,
        nome: 'Marco della Rovere',
        grade: 78,
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        grade: 96,
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        grade: 48,
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        grade: 74,
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        grade: 68,
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        grade: 50,
    },
    {
        id: 120,
        nome:'Francesca da Polenta',
        grade: 84,
    }
];

//METODO PER OTTENERE LA LISTA DEI NOMI IN MAIUSCOLO
const targhe = studenti.map((elemet) => {
    return elemet.nome.toUpperCase();
});
console.log(targhe);

// METODO PER OTTENERE GLI STUDENTI CON VOTO > 70
const over70 = studenti.filter((elemet) => {
    if(elemet.grade > 70){
        return true;
    }
    return false;
});
console.log(over70);

// METODO PER OTTENERE GLI STUDENTI CON VOTO>70 E ID>120

const over70120 = over70.filter((elemet) => {
    if(elemet.id > 120){
        return true;
    }
    return false;
});
console.log(over70120);