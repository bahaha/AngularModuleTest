angular.module('TestController_978', ['TestService'])
	.controller('Controller_978', function($scope, $state, TestService){
		console.log('enter controller_978')
		$scope.test = TestService.getTest()
	})
