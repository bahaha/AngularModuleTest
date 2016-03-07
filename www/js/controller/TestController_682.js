angular.module('TestController_682', ['TestService'])
	.controller('Controller_682', function($scope, $state, TestService){
		console.log('enter controller_682')
		$scope.test = TestService.getTest()
	})
