angular.module('TestController_450', ['TestService'])
	.controller('Controller_450', function($scope, $state, TestService){
		console.log('enter controller_450')
		$scope.test = TestService.getTest()
	})
