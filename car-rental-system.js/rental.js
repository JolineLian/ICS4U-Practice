export function rentCar(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        console.log("The car has been rented");
    }
}

export function returnCar(car) {
    if (!car.isAvailable) {
        car.isAvailable = true;
        console.log("The car has been returned");
    }
}