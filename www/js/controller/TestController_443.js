module.exports= function($scope, $state, TestService){
		console.log('enter controller_443')
		$scope.test = TestService.getTest()
	}
