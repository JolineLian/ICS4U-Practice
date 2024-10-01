export function rentCar(car) {
    if (isAvailable) {
        isAvailable = false;
        console.log("The car has been rented");
    }
}

export function returnCar(car) {
    if (!isAvailable) {
        isAvailable = true;
        console.log("The car has been returned");
    }
}