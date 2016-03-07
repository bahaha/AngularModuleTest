angular.module('TestController_802', ['TestService'])
	.controller('Controller_802', function($scope, $state, TestService){
		console.log('enter controller_802')
		$scope.test = TestService.getTest()
	})
