angular.module('TestController_584', ['TestService'])
	.controller('Controller_584', function($scope, $state, TestService){
		console.log('enter controller_584')
		$scope.test = TestService.getTest()
	})
