module.exports= function($scope, $state, TestService){
		console.log('enter controller_351')
		$scope.test = TestService.getTest()
	}
