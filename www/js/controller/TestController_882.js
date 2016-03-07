angular.module('TestController_882', ['TestService'])
	.controller('Controller_882', function($scope, $state, TestService){
		console.log('enter controller_882')
		$scope.test = TestService.getTest()
	})
