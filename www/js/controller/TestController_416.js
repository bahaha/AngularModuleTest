module.exports= function($scope, $state, TestService){
		console.log('enter controller_416')
		$scope.test = TestService.getTest()
	}
