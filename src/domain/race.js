class Race {

    constructor(cars, moveCount) {
        this.maxDistance = 0;
        this.history = []
        this.winners = [];
        this.cars = cars;
        this.moveCount = moveCount;
    }

    startRace() {
        Array.from({ length: this.moveCount }).forEach(() => {
            this.moveForwardCars();
            this.recordHistory();
        });
    }

    moveForwardCars() {
        this.cars.forEach(car => {
            car.moveForward();
            this.confirmHighestDisance(car.distance);
        });
    }

    recordHistory() {
        this.history.push(this.cars.map(car => ({
            name: car.name,
            distance: car.distance
        })));
    }
    getWinner() {
        this.cars.map(car => this.confirmWinner(car));
        return this.winners;
    }

    confirmHighestDisance(distance) {
        this.maxDistance = (this.maxDistance < distance) ? distance : this.maxDistance;
    }

    confirmWinner(car) {
        if(this.maxDistance === car.distance) {
            this.winners.push(car.name)
        }
    }

}

export default Race;