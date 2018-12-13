const calcImc = (height:number, weight:number):string => {
    let imc:number = weight / (height * height);
    let result:string = '';
    if(imc < 18) {
        result = 'Você esta abaixo do peso';
    }else if(imc >= 18 && imc <= 26) {
        result = 'Você esta normal';
    }else{
        result = 'Você esta obeso';
    }
    return result;
}


console.log(`Seu estado atual é: ${calcImc(1.83, 100)}`)


let contarPorquinhos = (...porquinhos:Array<number>):void => {
    porquinhos.map(porco => {
        // console.log('Encontrei o porquinho '+porco);
    })
}

contarPorquinhos(1,2,3,4,5,6,6,8,9,10);

let mostrarNome = (nome:string, idade:number = 2) => {
    return 'Olá '+nome+', você nasceu em '+((new Date).getFullYear() - idade);
}
;

console.log(mostrarNome('Jose', 25));

console.log(calcImc(1.85, 107))

let message:string = "Alo moçada"
let testando:any;

let episode:number = 5
testando = 'Oi Teste, seja vem vindo';
testando = 1281928918912819212;
episode = episode+1;
episode = 9;