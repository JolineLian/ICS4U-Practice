
import { Car } from './car.js';
import { calculateRentalPrice } from './priceCalculator.js';
import { rentCar, returnCar } from './rental.js';

let car = new Car(12, 12, 2008, 1000, true);

console.log(rentCar(car));
console.log(calculateRentalPrice(3, 1000));
console.log(returnCar(car));