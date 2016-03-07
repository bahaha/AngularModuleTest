angular.module('TestController_290', ['TestService'])
	.controller('Controller_290', function($scope, $state, TestService){
		console.log('enter controller_290')
		$scope.test = TestService.getTest()
	})
