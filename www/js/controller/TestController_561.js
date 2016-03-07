angular.module('TestController_561', ['TestService'])
	.controller('Controller_561', function($scope, $state, TestService){
		console.log('enter controller_561')
		$scope.test = TestService.getTest()
	})
