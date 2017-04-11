var express = require('express');
var appli = express();


appli.get(
  '/',
  function(request,response){
    response.sendfile('views/index.html');
  }
);

appli.get(
  '/user',
  function(request,response){
    var retour = {
      "nom" : "petetin",
      "prenom" : "jc"
    };
    response.send('rocket league');
  }
);

appli.listen(12107,function(){
  console.log("coucou")
});
