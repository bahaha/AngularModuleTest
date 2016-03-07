angular.module('TestController_215', ['TestService'])
	.controller('Controller_215', function($scope, $state, TestService){
		console.log('enter controller_215')
		$scope.test = TestService.getTest()
	})
