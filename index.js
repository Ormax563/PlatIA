const tf = require('@tensorflow/tfjs');
const sl = require('scikit-learn');
const ml = require('ml-regression');
const csv = require('csvtojson');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { regresion } = require('./algoritmos/RLS');
const { exporeg } = require('./algoritmos/RLS');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
app.post('/RL', function(req, res) {
    var jsonData = req.body;
   
    ks = Object.keys(jsonData[0]);
    x = [];
    y = [];
    for(var i = 0; i< ks.length; i ++){
      for(var j = 0; j < jsonData.length; j ++){
        //x.push(jsonData[j].eval(ks[i]));
       // console.log(jsonData[j].eval(ks[i]));
       if (i == 0){
        x.push(jsonData[j][ks[i]])
       }else{
        y.push(jsonData[j][ks[i]])
       }
      
      }
    }
    res.send(regresion(x,y));
    console.log(x);
});

app.post('/ER', function(req, res) {
  var jsonData = req.body;
 
  ks = Object.keys(jsonData[0]);
  x = [];
  y = [];
  for(var i = 0; i< ks.length; i ++){
    for(var j = 0; j < jsonData.length; j ++){
      //x.push(jsonData[j].eval(ks[i]));
     // console.log(jsonData[j].eval(ks[i]));
     if (i == 0){
      x.push(jsonData[j][ks[i]])
     }else{
      y.push(jsonData[j][ks[i]])
     }
    
    }
  }
  res.send(exporeg(x,y));
  console.log(x);
});

