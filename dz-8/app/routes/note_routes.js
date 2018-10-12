const db = require('../../config/db');

module.exports = function(app,db){
  app.post('/notes', (req, res) => {
    console.log('req.body=' + req.body);
    let json = req.body;
    let item = {text: json.text};
    db.collection('notes').insert(item, (err, result) => {
      if(err){
        res.send({'error': 'Mongo ERROR: ' + err});
      } else {
        res.send(result.ops[0]);
      }
    })
  });
};
