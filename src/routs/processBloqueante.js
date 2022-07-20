

function calculo() {
    let sum = 0;
    for (let index = 0; index < 6e9; index++) {
        sum += index
    }
    return sum;
}
let visitas = 0;


function calculando (req, res)  {
    let { url } = req;
    if(url == '/calcular') {
        const sum = calculo();
        res.end(`La suma es ${sum}`)
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
}

module.exports = {
    calculando
}