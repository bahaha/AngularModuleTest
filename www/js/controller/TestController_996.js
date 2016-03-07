angular.module('TestController_996', ['TestService'])
	.controller('Controller_996', function($scope, $state, TestService){
		console.log('enter controller_996')
		$scope.test = TestService.getTest()
	})
