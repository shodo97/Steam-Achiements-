var express = require('express');
var app = express();
var request = require('request');
app.set('port',3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/getplayerachievements', function(req, res) {
	
    var url = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=550&key=C8924675922FD293B6D0493FBF836323&steamid=76561198321524987';
	request(url, function(err, response, body) {
		if(!err && response.statusCode < 400) {
			console.log(body);
			res.send(body);
		}
	});	
});

    app.listen(app.get('port'), function(){
        console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
      });