const { fork } = require('child_process');

let visitas = 0;

function forkRequest (req, res) {
    let { url } = req;
    if(url == '/calcular') {
        // USO DE FORK
        const computo = fork('../utils/computo.js') // URL DEL PROCESO HIJO
        // INICIO DE FORK
        computo.send('start');
        // COMUNICACIÓN CON EL PROCESO HIJO
        computo.on('message', sum => {
            res.end(`La suma es ${sum}`)
        })
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
}

module.exports = {
    forkRequest
}
