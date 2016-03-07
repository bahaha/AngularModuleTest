angular.module('TestController_988', ['TestService'])
	.controller('Controller_988', function($scope, $state, TestService){
		console.log('enter controller_988')
		$scope.test = TestService.getTest()
	})
