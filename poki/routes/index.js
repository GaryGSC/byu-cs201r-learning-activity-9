var request = require('request')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile('index.html', { root: 'public' });
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/pokemon', function(req, res) {
	console.log("In Pokemon");
	var pokemon = [
		  {
			      name: 'Pikachu',
			      avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
			    },
		  {
			      name: 'Charmander',
			      avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

			    },
		  {
			      name: 'Mew',
			      avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif'
			    },
		  {
			      name: 'Cubone',
			      avatarUrl: 'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200'
			    },
		  {
			      name: 'Cleffa',
			      avatarUrl: 'http://media1.giphy.com/media/pTh2K2xTJ1nag/giphy.gif'
			    },
		  {
			      name: 'Gengar',
			      avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/3b/67/7e3b67c53469cc4302035be70a7f2d60.gif'
			    }
	];
	res.send(pokemon);
});

var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
router.get('/politics', function(req,res) {
    console.log("In politics");
    request(politics).pipe(res);
});

module.exports = router;
