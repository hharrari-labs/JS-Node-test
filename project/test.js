
// Inclusion de Mongoose
var mongoose = require('mongoose');
 
// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
mongoose.connect('mongodb://localhost/blog', function(err) {
  if (err) { throw err; }
});
 
// Création du schéma pour les commentaires
var commentaireArticleSchema = new mongoose.Schema({
  pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  contenu : String,
  date : { type : Date, default : Date.now }
});
 
// Création du Model pour les commentaires
var CommentaireArticleModel = mongoose.model('commentaires', commentaireArticleSchema);
 
// On crée une instance du Model
var monCommentaire = new CommentaireArticleModel({ pseudo : 'Atinux' });
monCommentaire.contenu = 'Salut, super article sur Mongoose !';

// Récuperer des données 
CommentaireArticleModel.find(null, function (err, comms) {
  if (err) { throw err; }
  // comms est un tableau de hash
  console.log(comms);
});


// Ici on va récupérer les 3 premiers commentaires ayant le pseudo Atinux
var query = CommentaireArticleModel.find(null);
query.where('pseudo', 'Atinux');
query.limit(3);
// peut s'écrire aussi query.where('pseudo', 'Atinux').limit(3);
query.exec(function (err, comms) {
  if (err) { throw err; }
  // On va parcourir le résultat et les afficher joliment
  var comm;
  for (var i = 0, l = comms.length; i < l; i++) {
    comm = comms[i];
    console.log('------------------------------');
    console.log('Pseudo : ' + comm.pseudo);
    console.log('Commentaire : ' + comm.contenu);
    console.log('Date : ' + comm.date);
    console.log('ID : ' + comm._id);
    console.log('------------------------------');
  }
});

// Mise à jour des données 
CommentaireArticleModel.update({ pseudo : 'Atinux'}, { pseudo : 'Nikita' }, { multi : true }, function (err) {
  if (err) { throw err; }
  console.log('Pseudos modifiés !');
});

//suppression des données 
Model.remove({ pseudo : 'Nikita' }, function (err) {
  if (err) { throw err; }
  console.log('Commentaires avec pseudo Nikita supprimés !');
});
 
// On le sauvegarde dans MongoDB !
monCommentaire.save(function (err) {
  if (err) { throw err; }
  console.log('Commentaire ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
  mongoose.connection.close();
});

