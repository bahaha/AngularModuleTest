angular.module('TestController_752', ['TestService'])
	.controller('Controller_752', function($scope, $state, TestService){
		console.log('enter controller_752')
		$scope.test = TestService.getTest()
	})
