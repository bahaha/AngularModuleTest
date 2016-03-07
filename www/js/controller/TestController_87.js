angular.module('TestController_87', ['TestService'])
	.controller('Controller_87', function($scope, $state, TestService){
		console.log('enter controller_87')
		$scope.test = TestService.getTest()
	})
