const mongoose = require('mongoose')
const mongodb_url = 'mongodb+srv://Lewis:Royalweb123;@cluster0.ivi9r.mongodb.net/Lewisfoods?retryWrites=true&w=majority';
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).catch(err => console.log(err.reason));

