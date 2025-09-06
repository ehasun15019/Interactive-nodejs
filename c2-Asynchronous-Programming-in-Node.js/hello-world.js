console.log("welcome node-js");
console.log("Running as", process.platform);
console.log("Current Directory", process.cwd());
console.log("node js version", process.version);

const os = require("os")
console.log("my computer has",os.cpus().length , "Cpu Cors");

// for total memory 
console.log("Total Memory:", Math.round(os.totalmem()) / 1024 / 1024 / 1024, "GB")



