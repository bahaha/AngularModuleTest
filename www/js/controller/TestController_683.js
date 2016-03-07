angular.module('TestController_683', ['TestService'])
	.controller('Controller_683', function($scope, $state, TestService){
		console.log('enter controller_683')
		$scope.test = TestService.getTest()
	})
