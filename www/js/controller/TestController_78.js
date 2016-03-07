angular.module('TestController_78', ['TestService'])
	.controller('Controller_78', function($scope, $state, TestService){
		console.log('enter controller_78')
		$scope.test = TestService.getTest()
	})
