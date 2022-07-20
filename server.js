const express = require('express');
const app = express();

const PORT = process.argv[3] || 8080;
const { infoNode } = require('./src/models/index');
const { noBloqueante } = require('./src/routs/processNoBloqueante');
const { bloqueante } = require('./src/routs/processBloqueante');
const { clusterOn } = require('./src/utils/cluster');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + "/public"));

app.get('/api/randoms', (req, res)=>{
    res.render(clusterOn())
    res._write(noBloqueante)
});

app.get('/info', (req, res)=>{
    res.render('index', {infoNode: infoNode})
});

app.get('/calcular', (req, res)=>{
    res.render(bloqueante)
});


const server = app.listen(PORT, () => {
    console.log(`Ir a la página http://localhost:${PORT}/info \n o a la página http://localhost:${PORT}/api/randoms` );
});
server.on('error', error => console.log(`Error en el servidor ${error}`))