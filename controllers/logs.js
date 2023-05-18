
const express = require('express');
//const app = express();

const router = express.Router();
const Logs = require('../models/logs')




router.get('/', (req, res)=>{
  Logs.find({}, (error, allLogs)=>{
    res.render('Index', {
        logs: allLogs
    });
});
});


// GET
router.get('/new', (req, res) => {
  res.render('New');
});


// POST
router.post('/', (req, res) => {
  if(req.body.shipBroken === 'on'){ 
    req.body.shipBroken = true; 
    } else { 
        req.body.shipBroken = false; 
    }
    Logs.create(req.body, (error, createdLogs)=>{
      res.redirect('/logs'); 
    });
    
});



// DELETE
router.delete('/:id', (req, res)=>{
  Logs.findByIdAndRemove(req.params.id, (err, data)=>{
    console.log(err)
      res.redirect('/logs');
  });
});


// EDIT
router.get('/:id/edit', (req, res)=>{
  Logs.findById(req.params.id, (err, foundLog)=>{ 
    if(!err){
      res.render(
        'Edit',
      {
        log: foundLog 
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  });
});


// EDIT PUT
router.put('/:id', (req, res)=>{
  if(req.body.shipBroken === 'on'){
      req.body.shipBroken = true;
  } else {
      req.body.shipBroken = false;
  }
  Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
     console.log(updatedLog)
      res.redirect(`/logs`);
      //${req.params.id}
  });
});



// SHOW
router.get('/:id', (req, res)=>{
  Logs.findById(req.params.id, (error, foundLog)=>{
    console.log(error)
    res.render('Show', {
      log:foundLog
  });
  });
});


module.exports = router;