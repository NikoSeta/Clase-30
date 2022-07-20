const CPUs = require('os').cpus().length;

let infoNode = [
    process.argv,
    process.cwd(), 
    process.pid, 
    process.version, 
    process.title, 
    process.platform, 
    process.memoryUsage(),
    CPUs,
];

module.exports = {infoNode}