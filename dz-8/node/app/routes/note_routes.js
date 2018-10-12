module.exports = function(app, database){
  app.get('/notes/', (req, res) => {
    database.collection('notes').find().sort({_id:-1}).limit(10).toArray(function(err, results){
      if(err){
        res.send({'error': 'Mongo ERROR: ' + err});
      } else {
        res.send(results);
      }
    });
  });

  app.post('/notes', (req, res) => {
    console.log('req.body=' + JSON.stringify(req.body));
    let json = req.body;
    let item = {text: json.text};
    database.collection('notes').insert(item, (err, result) => {
      if(err){
        res.send({'error': 'Mongo ERROR: ' + err});
      } else {
        res.send(result.ops[0]);
      }
    })
  });
};
