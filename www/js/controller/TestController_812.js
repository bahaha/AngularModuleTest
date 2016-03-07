angular.module('TestController_812', ['TestService'])
	.controller('Controller_812', function($scope, $state, TestService){
		console.log('enter controller_812')
		$scope.test = TestService.getTest()
	})
