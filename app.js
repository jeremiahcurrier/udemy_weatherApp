const request = require('request');
const yargs = require('yargs');

// node app.js --address '555 Example Street'
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true // tells yargs to always parse the 'a' as a string
		}
	}); // object storing final parsed output





// Abandon due to lack of Google Maps API for free






request({
	url: 'https://samples.openweathermap.org/data/2.5/weather?q=San%20Francisco,usa&appid=b6907d289e10d714a6e88b30761fae22',
	json: true
}, (error, response, body) => {
	console.log(`Latitude: ${body.coord.lat}`);
	console.log(`Longitude: ${body.coord.lon}`);
});