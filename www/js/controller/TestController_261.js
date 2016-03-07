angular.module('TestController_261', ['TestService'])
	.controller('Controller_261', function($scope, $state, TestService){
		console.log('enter controller_261')
		$scope.test = TestService.getTest()
	})
