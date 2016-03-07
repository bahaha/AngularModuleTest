module.exports= function($scope, $state, TestService){
		console.log('enter controller_790')
		$scope.test = TestService.getTest()
	}
