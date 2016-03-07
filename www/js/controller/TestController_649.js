angular.module('TestController_649', ['TestService'])
	.controller('Controller_649', function($scope, $state, TestService){
		console.log('enter controller_649')
		$scope.test = TestService.getTest()
	})
