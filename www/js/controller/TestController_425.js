angular.module('TestController_425', ['TestService'])
	.controller('Controller_425', function($scope, $state, TestService){
		console.log('enter controller_425')
		$scope.test = TestService.getTest()
	})
