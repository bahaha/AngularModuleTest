module.exports= function($scope, $state, TestService){
		console.log('enter controller_589')
		$scope.test = TestService.getTest()
	}
