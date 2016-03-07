angular.module('TestController_55', ['TestService'])
	.controller('Controller_55', function($scope, $state, TestService){
		console.log('enter controller_55')
		$scope.test = TestService.getTest()
	})
