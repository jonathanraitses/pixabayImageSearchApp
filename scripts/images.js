const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('app/assets/images')
    .filter(file => file.endsWith('.png'))
    .map(file => file.replace('@2x.png', '').replace('@3x.png', ''));
  return Array.from(new Set(array));
};
const generate = () => {
  const properties = imageFileNames()
    .map(name => `'${name.split('.')[0]}': require('./images/${name}')`)
    .join(',\n  ');

  const string = `const images = {
      ${properties}
    }
    export default images
    `;

  fs.writeFileSync('app/assets/images.js', string, 'utf8');
};
generate();
