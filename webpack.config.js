var NODE_ENV = process.env.NODE_ENV


if(NODE_ENV == 'develop'){
  module.exports = require('./webpack/webpack.config.dev.js')
}else{
  module.exports = require('./webpack/webpack.config.prod.js')
}
