angular.module('TestController_416', ['TestService'])
	.controller('Controller_416', function($scope, $state, TestService){
		console.log('enter controller_416')
		$scope.test = TestService.getTest()
	})
