const name = process.argv[2] || "Omanos";
const fl = process.argv[3] || "halka developer";
const fg = process.argv[4] || "fgm";

console.log(`name: ${name}`);
console.log(`fav language: ${fl}`);

process.argv.map((arg, index) => {
    console.log(`[${index}]: ${arg} `);
});



// console.log("Your Name:", process.env.USERNAME);

