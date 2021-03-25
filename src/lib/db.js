const mongoose = require('mongoose')

function connect () {
  return mongoose.connect('mongodb://mongo/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

module.exports = {
  connect
}
