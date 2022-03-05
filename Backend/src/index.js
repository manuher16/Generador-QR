require('dotenv').config({ encoding: 'latin1' })
require('./config/terminalColors')
require('./config/database')

const app = require('./routes/app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started at:", `http://localhost:${PORT}`.success);
});