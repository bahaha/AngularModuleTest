angular.module('TestController_132', ['TestService'])
	.controller('Controller_132', function($scope, $state, TestService){
		console.log('enter controller_132')
		$scope.test = TestService.getTest()
	})
