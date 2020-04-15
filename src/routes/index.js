const express = require('express');
const router = express.Router();
const Estudiante = require('../model/Estudiante');

router.get('/', async (req, res) => {
  const estudiantes = await Estudiante.find();
  res.render('index', {
    estudiantes
  });
});

router.post('/add', async (req, res, next) => {
  const estudiante = new Estudiante(req.body);
  await estudiante.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const estudiante = await Estudiante.findById(id);
  estudiante.status = !estudiante.status;
  await estudiante.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const estudiante = await Estudiante.findById(req.params.id);
  console.log(estudiante)
  res.render('edit', { estudiante });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Estudiante.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Estudiante.remove({_id: id});
  res.redirect('/');

  var express  = require('express');
  var app      = express();
  var fs     = require('fs');
  var https  = require('https');
   
  var credentials = {
    ca: fs.readFileSync(__dirname+"/ssl/certificate.ca", 'utf8'), //la certification authority o CA
    key: fs.readFileSync(__dirname+"/ssl/Escuela.com.key", 'utf8'), //la clave SSL, que es el primer archivo que generamos ;)
    cert: fs.readFileSync(__dirname+"/ssl/certificate.crt", 'utf8') //el certificado
  };
   
  app.configure(function() {
   
    // set up your express application
   
  });
   
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443);

});

module.exports = router;
