interface User {
    age:number
    name:string
    getAge():number
    getName():string
}

class Professional implements User{

    private salary:number;

    constructor(public name:string, salary:number, public age:number) { 
        this.salary = salary * Math.random()
    }

    getSalary() {
        return this.salary
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.getAge()
    }
}

let ti = new Professional('Mario', Math.floor(Math.ceil(Math.random()*876)), 20);
console.log(`Ò profissional ${ti.getName()} ganha o equivalente a ${ti.getSalary()} euros`);