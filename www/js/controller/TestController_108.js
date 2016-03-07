angular.module('TestController_108', ['TestService'])
	.controller('Controller_108', function($scope, $state, TestService){
		console.log('enter controller_108')
		$scope.test = TestService.getTest()
	})
