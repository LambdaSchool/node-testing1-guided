class Car {
    constructor(make,model){
        this.make = make
        this.model = model
        this.odometer = 0
    }
    drive(distance){
        this.odometer = this.odometer + distance
        return `${distance} miles driven`
    }
}

module.exports = Car