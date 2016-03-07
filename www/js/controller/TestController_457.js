angular.module('TestController_457', ['TestService'])
	.controller('Controller_457', function($scope, $state, TestService){
		console.log('enter controller_457')
		$scope.test = TestService.getTest()
	})
