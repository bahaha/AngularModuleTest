angular.module('TestController_825', ['TestService'])
	.controller('Controller_825', function($scope, $state, TestService){
		console.log('enter controller_825')
		$scope.test = TestService.getTest()
	})
