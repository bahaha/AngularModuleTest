angular.module('TestController_607', ['TestService'])
	.controller('Controller_607', function($scope, $state, TestService){
		console.log('enter controller_607')
		$scope.test = TestService.getTest()
	})
