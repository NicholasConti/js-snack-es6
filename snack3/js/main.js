"use strict";

const bikes = [
    {
        brand: 'Giant',
        kg: 11
    },
    {
        brand: 'Trek',
        kg: 9
    },
    {
        brand: 'Cube',
        kg: 8
    },
    {
        brand: 'Focus',
        kg: 7
    },
    {
        brand: 'Canondale',
        kg: 6
    },
    {
        brand: 'Cervelo',
        kg: 10
    },
    {
        brand: 'Specialized',
        kg: 13
    }
];

let lighterBike = {
    brand: 'boh',
    kg: 0
};

bikes.forEach((element) => {
    if((element.kg < lighterBike.kg) || (lighterBike.kg === 0)){
        lighterBike.brand = element.brand;
        lighterBike.kg = element.kg;
    }
});

const {brand , kg} = lighterBike;
console.log(`La bici piu leggera e ${brand} con il peso di ${kg}`);