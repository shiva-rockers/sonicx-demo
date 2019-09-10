const app = require('../lib');
app.listen(4000, () => console.log("Magic happens on port 4000"));

require('./routes/user');