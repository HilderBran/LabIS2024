const express = require('express');

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);

app.use(require('./routes'));

app.listen(app.get('port'), () => {
    console.log('Servidor iniciando en el puerto', app.get('port'));
});