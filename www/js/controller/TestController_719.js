angular.module('TestController_719', ['TestService'])
	.controller('Controller_719', function($scope, $state, TestService){
		console.log('enter controller_719')
		$scope.test = TestService.getTest()
	})
