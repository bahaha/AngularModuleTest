angular.module('TestController_70', ['TestService'])
	.controller('Controller_70', function($scope, $state, TestService){
		console.log('enter controller_70')
		$scope.test = TestService.getTest()
	})
