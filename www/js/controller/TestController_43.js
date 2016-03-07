angular.module('TestController_43', ['TestService'])
	.controller('Controller_43', function($scope, $state, TestService){
		console.log('enter controller_43')
		$scope.test = TestService.getTest()
	})
