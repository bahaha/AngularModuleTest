angular.module('TestController_764', ['TestService'])
	.controller('Controller_764', function($scope, $state, TestService){
		console.log('enter controller_764')
		$scope.test = TestService.getTest()
	})
