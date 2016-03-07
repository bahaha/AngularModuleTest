angular.module('TestController_837', ['TestService'])
	.controller('Controller_837', function($scope, $state, TestService){
		console.log('enter controller_837')
		$scope.test = TestService.getTest()
	})
