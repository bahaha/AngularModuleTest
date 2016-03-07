angular.module('TestController_514', ['TestService'])
	.controller('Controller_514', function($scope, $state, TestService){
		console.log('enter controller_514')
		$scope.test = TestService.getTest()
	})
