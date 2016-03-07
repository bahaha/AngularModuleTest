angular.module('TestController_468', ['TestService'])
	.controller('Controller_468', function($scope, $state, TestService){
		console.log('enter controller_468')
		$scope.test = TestService.getTest()
	})
