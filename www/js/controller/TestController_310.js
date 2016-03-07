angular.module('TestController_310', ['TestService'])
	.controller('Controller_310', function($scope, $state, TestService){
		console.log('enter controller_310')
		$scope.test = TestService.getTest()
	})
