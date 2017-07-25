var fs = require('fs-extra');  

var string = 'render_zone',
    dir = process.argv[2],
    zoneArray = [];

var readDir = function(dir){
  fs.readdir(dir,function(error, dirContent){
    if(!error){
      var files = dirContent;

      //On checke la liste du contenu du répertoire
      for (var i = files.length - 1; i >= 0; i--) {
        var filePath = dir+files[i];
        //Si c'est un dossier, on relance un readDir de zéro sur ce dossier
        if(files[i].indexOf('.') == -1){
          readDir(filePath+"/");
        } else {
           getSlug(filePath);
        }
      };
      
    } else {
      console.log("erreur de directory");
    }
  });
} 

var getSlug = function(file){
  //Et on continue quoi qu'il arrive sur le reste 
  var fileContent = fs.readFileSync(file, 'utf8');
  console.log((fileContent.match(new RegExp(string, "g") ) || []).length);

  if (fileContent.indexOf(string) != -1){

    // console.log("trouvé dans : ", filePath);
    
    for(var a = fileContent.indexOf(string); a < fileContent.length; a++){
       //console.log(fileContent[a]);
      if(fileContent[a] == ')'){
        zone = fileContent.substring(fileContent.indexOf(string), a+1);
        zone = zone.replace("render_zone('", '');
        zone = zone.replace("')", '');
        //console.log("zone ",zone)
        zoneArray.push(zone);
        break;
      }
    }
     //creatFileSlug(zoneArray);
  };  
}

var creatFileSlug = function(zone){
console.log(zone);
  fs.writeFile("hello.txt", zone, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
}

readDir(dir);
