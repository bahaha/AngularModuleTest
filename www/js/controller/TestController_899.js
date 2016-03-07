angular.module('TestController_899', ['TestService'])
	.controller('Controller_899', function($scope, $state, TestService){
		console.log('enter controller_899')
		$scope.test = TestService.getTest()
	})
