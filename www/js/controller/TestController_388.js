angular.module('TestController_388', ['TestService'])
	.controller('Controller_388', function($scope, $state, TestService){
		console.log('enter controller_388')
		$scope.test = TestService.getTest()
	})
