module.exports= function($scope, $state, TestService){
		console.log('enter controller_334')
		$scope.test = TestService.getTest()
	}
