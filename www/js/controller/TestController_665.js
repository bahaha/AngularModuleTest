angular.module('TestController_665', ['TestService'])
	.controller('Controller_665', function($scope, $state, TestService){
		console.log('enter controller_665')
		$scope.test = TestService.getTest()
	})
