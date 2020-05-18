require('dotenv').config();
const app = require('./app');
require('./database');
    async function main(){
        app.listen(app.get('port'));
        console.log('SERVER ON PORT', app.get('port'))
    
    }
main();
//node src/index.js
//$ npx nodemon src/index.js
