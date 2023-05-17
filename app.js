const path = require('path');
const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs'); // view 템플릿 형식 설정.
app.set('views', path.join(__dirname, 'views')); // __dirname 경로에 대한 설정, views 경로 폴더에 대한 설정.

app.use(express.static('public')); // 정적 폴더 경로 설정.
app.use(express.urlencoded({extended: false}));

app.use(authRoutes);

db.connectToDatabase()
.then(function (){
    app.listen(3000);
})
.catch(function (error){
    console.log('Failed to connect to the database!');
    console.log(error);
});
