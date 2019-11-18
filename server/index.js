const express = require("express")

const app = express()

app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())
app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3002, '0.0.0.0',() => {
  console.log('http://0.0.0.0:3002');
});