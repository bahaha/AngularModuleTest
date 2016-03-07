angular.module('TestController_803', ['TestService'])
	.controller('Controller_803', function($scope, $state, TestService){
		console.log('enter controller_803')
		$scope.test = TestService.getTest()
	})
