angular.module('TestController_406', ['TestService'])
	.controller('Controller_406', function($scope, $state, TestService){
		console.log('enter controller_406')
		$scope.test = TestService.getTest()
	})
