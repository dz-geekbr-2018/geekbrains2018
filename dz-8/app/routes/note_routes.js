module.exports = function(app,db){
  app.post('/notes', (req, res) => {
    console.log('note_routes: ' + req);
    res.send('It was post request: ' + req);
  });
};
