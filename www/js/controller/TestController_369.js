angular.module('TestController_369', ['TestService'])
	.controller('Controller_369', function($scope, $state, TestService){
		console.log('enter controller_369')
		$scope.test = TestService.getTest()
	})
