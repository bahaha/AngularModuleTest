angular.module('TestController_997', ['TestService'])
	.controller('Controller_997', function($scope, $state, TestService){
		console.log('enter controller_997')
		$scope.test = TestService.getTest()
	})
