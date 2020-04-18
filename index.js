const express = require('express');
const app = express();

const port = 3000

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req,res){
	res.render('index', {
		name: "Truong"
	});
});

app.get('/users', (req,res) => res.render('users/index', {
	users: [
	{id: 1, name: 'Thinh'},
	{id: 2, name: 'Truong'}
	]
}));


app.listen(port, ()=> console.log('Example app listening at http://localhost:' + port));