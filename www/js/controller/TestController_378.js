angular.module('TestController_378', ['TestService'])
	.controller('Controller_378', function($scope, $state, TestService){
		console.log('enter controller_378')
		$scope.test = TestService.getTest()
	})
