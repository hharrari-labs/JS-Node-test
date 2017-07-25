// ************************** Middlewares ou micro-services **************************
// *******************************************************************************************
var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
.use(function(req, res){ // Répond enfin
    res.send('Hello');
});

app.listen(8080);

// *******************************************************************************************
// *******************************************************************************************

// **************** Utilisation de Express.js Gestion des routes et des Vues *****************
// *******************************************************************************************

/*var express = require('express');
var app = express();
app.get('/', function(req, res) {
})
.get('/sous-sol', function(req, res) {
})
.get('/etage/1/chambre', function(req, res) {
})
.use(function(req, res, next){
}); */

//Route Dynamique 

// Gestion de la vue avec EJS (module de templating)
/* app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
}); */

//Cela vous permet de créer de belles URLs et vous évite d'avoir à passer par le suffixe 
//("?variable=valeur") pour gérer des variables. Ainsi, toutes les routes suivantes sont valides :

	// /etage/1/chambre
	// /etage/2/chambre
	// /etage/3/chambre
	// /etage/nawak/chambre

/* app.listen(8080); */

// *******************************************************************************************
// *******************************************************************************************


// ************************** Utilisé un évenement node avec module **************************
// *******************************************************************************************
/* var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');
var markdown = require('markdown').markdown;
console.log(markdown.toHTML('Un paragraphe en **markdown** !')); */

// *******************************************************************************************
// *******************************************************************************************


// ************************** Utilisé un évenement node **************************************
// *******************************************************************************************
/*var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})
server.listen(8080); // Démarre le serveur
server.close(); // Arrête le serveur. Déclenche l'évènement close */
// *******************************************************************************************
// *******************************************************************************************


// *******************************************************************************************
// ********************** Examination du pattern d'un ****************************************
/*var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    else {
    	res.writeHead(400);
    	res.write('Désoler cette page n\'éxiste pas' );
    }
    res.end();
});
server.listen(8080); */
// *******************************************************************************************
// *******************************************************************************************


// *******************************************************************************************
// ********************** Examination du pattern et des parmas d'url *************************
/*var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080); */
// *******************************************************************************************
// *******************************************************************************************
