module.exports= function($scope, $state, TestService){
		console.log('enter controller_492')
		$scope.test = TestService.getTest()
	}
