angular.module('TestController_955', ['TestService'])
	.controller('Controller_955', function($scope, $state, TestService){
		console.log('enter controller_955')
		$scope.test = TestService.getTest()
	})
