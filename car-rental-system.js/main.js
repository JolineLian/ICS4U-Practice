import { Car } from './car';
import { calculateRentalPrice } from './priceCalculator';
import { rentCar, returnCar } from './rental';

car1 = new Car();
car2 = new Car();

console.log(rentCar(car1));
console.log(calculateRentalPrice(3,100));
console.log(returnCar(car1));