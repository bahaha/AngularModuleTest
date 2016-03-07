angular.module('TestController_716', ['TestService'])
	.controller('Controller_716', function($scope, $state, TestService){
		console.log('enter controller_716')
		$scope.test = TestService.getTest()
	})
