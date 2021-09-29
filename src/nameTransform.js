const myArgs = process.argv.slice(2);
console.log(myArgs.join(' ').toLowerCase().replace(/[^a-z0-9-_ ]/g, '').replace(/ /g, '_') + '.png')