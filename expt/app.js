const mongoose = require('mongoose');
const User = require('./user')
mongoose.connect('mongodb://localhost:27017/expt', {useNewUrlParser:true}, {useUnifiedTopology:true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', function(){
    // dbCreate('Bob', '000')
    // dbCreate('James', '854')
    dbUpdate('60e5ee27333203568c638c26', {password:'111'})
    dbUpdate('60e5f01be7f61c4c2851e526', {username: 'JamesR'})

})
function dbCreate(username, password, gender, emailaddress){
 const user1 = new User({
        username,
        password
     })
     user1.save(function(err){
        if(err){
            return console.error(err);
        }
     });
}
function dbUpdate(_id, updates){
    User.findByIdAndUpdate(_id,updates
        ,function(err, user1){
            if(err){
                return console.error(err);
            }
 
        });
}