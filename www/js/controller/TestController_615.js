angular.module('TestController_615', ['TestService'])
	.controller('Controller_615', function($scope, $state, TestService){
		console.log('enter controller_615')
		$scope.test = TestService.getTest()
	})
