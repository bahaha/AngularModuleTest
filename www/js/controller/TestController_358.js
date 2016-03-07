angular.module('TestController_358', ['TestService'])
	.controller('Controller_358', function($scope, $state, TestService){
		console.log('enter controller_358')
		$scope.test = TestService.getTest()
	})
