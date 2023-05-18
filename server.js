

const express = require('express');
const app = express();


//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// add dotenv
require('dotenv').config() 

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


const Logs = require('./models/logs');
app.use(methodOverride('_method'));


const logsController = require('./controllers/logs');

//Routs
app.use('/logs', logsController)

// // GET
// app.get('/logs/new', (req, res) => {
//   res.render('New');
// });


// app.get('/logs', (req, res)=>{
//   Logs.find({}, (error, allLogs)=>{
//     res.render('Index', {
//         logs: allLogs
//     });
// });
// });


// // POST
// app.post('/logs', (req, res) => {
//   if(req.body.shipBroken === 'on'){ 
//     req.body.shipBroken = true; 
//     } else { 
//         req.body.shipBroken = false; 
//     }
//     Logs.create(req.body, (error, createdLogs)=>{
//       res.redirect('/logs'); 
//     });
    
// });



// // DELETE
// app.delete('/logs/:id', (req, res)=>{
//   Logs.findByIdAndRemove(req.params.id, (err, data)=>{
//     console.log(err)
//       res.redirect('/logs');
//   });
// });


// // EDIT
// app.get('/logs/:id/edit', (req, res)=>{
//   Logs.findById(req.params.id, (err, foundLog)=>{ 
//     if(!err){
//       res.render(
//         'Edit',
//       {
//         log: foundLog 
//       }
//     );
//   } else {
//     res.send({ msg: err.message })
//   }
//   });
// });


// // EDIT PUT
// app.put('/logs/:id', (req, res)=>{
//   if(req.body.shipBroken === 'on'){
//       req.body.shipBroken = true;
//   } else {
//       req.body.shipBroken = false;
//   }
//   Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
//      console.log(updatedLog)
//       res.redirect(`/logs`);
//       //${req.params.id}
//   });
// });



// // SHOW
// app.get('/logs/:id', (req, res)=>{
//   Logs.findById(req.params.id, (error, foundLog)=>{
//     console.log(error)
//     res.render('Show', {
//       log:foundLog
//   });
//   });
// });



app.listen(process.env.PORT, () => {
  console.log('listening');
});