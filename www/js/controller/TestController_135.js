angular.module('TestController_135', ['TestService'])
	.controller('Controller_135', function($scope, $state, TestService){
		console.log('enter controller_135')
		$scope.test = TestService.getTest()
	})
