angular.module('TestService', [])
	.factory('TestService', [function () {
		var test = {
			columnA: 'A',
			columnB: 'B',
			columnC: 'C',
			columnD: 'D',
			columnE: 'E'
		}
		console.log('end TestService.js, return closure')
		return {
			getTest: function(){
				return test
			}
		};
	}])