define(['app'], function (app) {
    app.register.service('TestService',function(){
        var test = {
			columnA: 'A',
			columnB: 'B',
			columnC: 'C',
			columnD: 'D',
			columnE: 'E'
		}
		console.log('end TestService.js, return closure')
        var exports = {
            getTest: function(){
				return test
			}
        };
        return exports ;
    });
});