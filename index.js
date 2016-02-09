(function main(){

	//var moment = require('moment');
	var moment = require('moment-timezone');

	var utcDateTime = moment().utc();
	console.log('UTC TIME: ' + utcDateTime.format());

	console.log('LA TIME: ' + utcDateTime.tz('America/Los_Angeles').format());

	//console.log('Available time zones strings');
	//console.log(moment.tz.names());

})();