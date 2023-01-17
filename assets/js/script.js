let cars = [
    'subura',
    'toyota',
    'lotus',
    'mazda',
    'nissan',
    'renault',
    'peugeot',
    'bmw',
    'merco', 
    ];
const carsContainer = document.querySelector('.carsContainer');
for( let i = 0; i < cars.length ; i++) {
    
    const articleContainer = document.createElement('article');
    const carName = document.createTextNode(cars[i]);
    articleContainer.appendChild(carName);
    carsContainer.appendChild(articleContainer); 
    console.log('toto')
};                                                                                                