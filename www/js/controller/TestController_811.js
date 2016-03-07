angular.module('TestController_811', ['TestService'])
	.controller('Controller_811', function($scope, $state, TestService){
		console.log('enter controller_811')
		$scope.test = TestService.getTest()
	})
