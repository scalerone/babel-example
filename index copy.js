// index.js
const path = require('path');
const fs = require('fs');
const babel = require('@babel/core');

const TARGET_PKG_NAME = 'axuebin';

function transform(file) {
  const content = fs.readFileSync(file, {
    encoding: 'utf8',
  });
  const { code } = babel.transformSync(content, {
    sourceMaps: false,
    plugins: [
      babel.createConfigItem(({ types: t }) => ({
        visitor: {
          Program(path) {
            console.log('path')
            console.log(path)
          }
        }
      }))
    ]
  });
  return code;
}
