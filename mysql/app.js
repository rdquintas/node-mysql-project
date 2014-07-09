var Sequelize = require('sequelize');
// sequelize = new Sequelize('database', 'root', 'qweqwe1')


var sequelize = new Sequelize('zrqtest', 'root', 'qweqwe1', {
    host: "localhost",
    port: 3306
});

var User = sequelize.define('User', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

sequelize.sync().success(function() {
    User.create({
        username: 'dass',
        birthday: new Date(1971, 02, 04)
    }).success(function(sdepold) {
        console.log(sdepold.values);
    });
})
