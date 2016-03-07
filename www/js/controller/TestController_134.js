angular.module('TestController_134', ['TestService'])
	.controller('Controller_134', function($scope, $state, TestService){
		console.log('enter controller_134')
		$scope.test = TestService.getTest()
	})
