angular.module('TestController_544', ['TestService'])
	.controller('Controller_544', function($scope, $state, TestService){
		console.log('enter controller_544')
		$scope.test = TestService.getTest()
	})
