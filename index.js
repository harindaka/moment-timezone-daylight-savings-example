(function main(){

	//var moment = require('moment');
	var moment = require('moment-timezone');

	var now = new Date();
	var momentFromDate = moment(now);
	var utcDateTime = momentFromDate.utc();
	var dateTimeString = utcDateTime.format();
	var momentFromString = moment(dateTimeString);
	
	console.log('UTC TIME: ' + dateTimeString);
	
	console.log('LA TIME (from moment object): ' + utcDateTime.tz('America/Los_Angeles').format());
	console.log('LA TIME (from ' + dateTimeString + '): ' + momentFromString.tz('America/Los_Angeles').format());

	//console.log('Available time zones strings');
	//console.log(moment.tz.names());

})();