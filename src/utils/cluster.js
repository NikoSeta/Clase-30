const cluster = require('cluster')
const CPUs = require('os').cpus().length;

function clusterOn(){
    if(cluster.isMaster) { // isPrimary
        console.log(`PID Master ${process.pid}`);
        for (let index = 0; index < CPUs; index++) {
            cluster.fork()
        }
        cluster.on('exit', worker => {
            console.log(`PID Worker ${worker.process.pid} died`);
        })
    } else {
        app.get('/info', (req, res)=>{
            res.render('index', {infoNode: infoNode})
            res.writeHead(200);
            res.end(cluster.process.id);
        });
    }
}
module.exports = {
    clusterOn
}