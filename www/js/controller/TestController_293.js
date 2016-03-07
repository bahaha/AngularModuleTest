angular.module('TestController_293', ['TestService'])
	.controller('Controller_293', function($scope, $state, TestService){
		console.log('enter controller_293')
		$scope.test = TestService.getTest()
	})
