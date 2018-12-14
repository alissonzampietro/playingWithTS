class Spacecraft {
    constructor(public propulsor:string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MilleniumFalcon extends Spacecraft implements ContainerShip{
    cargoContainer:number
    constructor() {
        super('hiperdrive')
        this.cargoContainer = 4
    }

    jumpIntoHyperspace() {
        if(Math.random() > 0.5) {
            super.jumpIntoHyperspace()
        }else{
            console.log('Failed to jump')
        }
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

interface ContainerShip {
    cargoContainer: number
}


let goodForTheJob = (ship: ContainerShip) => ship.cargoContainer > 2

console.log(`It's Falcon good fo the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)