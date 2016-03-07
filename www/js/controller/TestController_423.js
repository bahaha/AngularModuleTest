angular.module('TestController_423', ['TestService'])
	.controller('Controller_423', function($scope, $state, TestService){
		console.log('enter controller_423')
		$scope.test = TestService.getTest()
	})
