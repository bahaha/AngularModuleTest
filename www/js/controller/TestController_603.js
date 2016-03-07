angular.module('TestController_603', ['TestService'])
	.controller('Controller_603', function($scope, $state, TestService){
		console.log('enter controller_603')
		$scope.test = TestService.getTest()
	})
