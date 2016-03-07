angular.module('TestController_196', ['TestService'])
	.controller('Controller_196', function($scope, $state, TestService){
		console.log('enter controller_196')
		$scope.test = TestService.getTest()
	})
