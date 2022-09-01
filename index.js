const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;


const app = express();

//------------ EJS Configuration ------------//
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');


app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Server Running On PORT ${PORT}`));





