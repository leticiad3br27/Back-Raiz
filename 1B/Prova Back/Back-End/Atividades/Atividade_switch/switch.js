import cd from "readline-sync"
let ddd = cd.questionInt('Infrme o DDD: ')
switch (ddd) {
    case 69:
        console.log("Rondônia");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 11:
        console.log("São Paulo");
        break;
    case 65:
        console.log("Mato Grosso");
        break;
    default:
        console.log("DDD inválido")
        break;
}