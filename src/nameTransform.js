var isCLI = require.main === module;

const transform = (str) => {
  if (typeof str === 'string') {
    str = str.split(' ');
  }
  return str.join(' ').toLowerCase().replace(/[^a-z0-9-_ ]/g, '').replace(/ /g, '_') + '.png'
}

if (isCLI) {
  const myArgs = process.argv.slice(2);
  console.log(transform(myArgs))
}

module.exports.transform = transform;